#!/usr/bin/env python3
"""
notion-to-obsidian.py

Improved converter to flatten a Notion markdown export into a single Obsidian-friendly folder.

Features:
- Removes YAML frontmatter (Notion export metadata).
- Converts Markdown links to Obsidian wikilinks ([[Page]] or [[Page|alias]]).
- Decodes URL-encoded filenames in links.
- Adds a breadcrumb line when input files are nested in subfolders.
- Flattens .md files into the output folder while copying non-markdown assets into an assets/ subfolder.
- Ensures unique filenames to avoid collisions.
- CLI with helpful flags.
"""

import argparse
import os
import re
import shutil
from pathlib import Path
from urllib.parse import unquote

def slugify_filename(name: str) -> str:
    # Keep it readable for Obsidian but remove problematic characters
    # Preserve spaces (Obsidian supports them), remove control chars and slashes
    name = name.strip()
    name = name.replace("\\", "-").replace("/", "-")
    # Remove null bytes and weird control chars
    name = re.sub(r"[\x00-\x1f\x7f]+", "", name)
    return name

def ensure_unique_path(folder: str, filename: str) -> str:
    base, ext = os.path.splitext(filename)
    candidate = filename
    counter = 1
    while os.path.exists(os.path.join(folder, candidate)):
        candidate = f"{base}-{counter}{ext}"
        counter += 1
    return candidate

def remove_frontmatter(content: str) -> str:
    # Remove a YAML frontmatter block at the very start of the file: --- ... ---
    return re.sub(r'^\s*---\s*\n.*?\n---\s*\n+', '', content, flags=re.DOTALL)

def convert_md_links_to_wikilinks(content: str) -> str:
    """
    Convert Markdown links that point to .md files into Obsidian wikilinks.

    Patterns handled:
    - [text](Some%20Page.md)
    - [text](../some/folder/Other%20Page.md#heading)
    - [SameName](SameName.md) -> [[SameName]]
    - [Alias](Target%20Name.md) -> [[Target Name|Alias]]
    """

    def repl(match):
        text = match.group(1).strip()
        target = match.group(2).split('#')[0]  # drop anchors
        target = unquote(target)               # decode %20, etc.
        target = os.path.basename(target)      # strip any path, keep filename
        target = re.sub(r'\.md$', '', target, flags=re.IGNORECASE)
        target = target.replace('\\', '/')
        # If link text equals the target, keep simple [[Target]]
        if text == target:
            return f'[[{target}]]'
        # If text is a short URL or external link, leave as-is (shouldn't match .md)
        return f'[[{target}|{text}]]'

    # Only convert links whose destination ends with .md (case-insensitive)
    pattern = re.compile(r'\[([^\]]+)\]\(([^)]+?\.md(?:#[^)]+)?)\)', flags=re.IGNORECASE)
    return pattern.sub(repl, content)

def add_breadcrumb(content: str, parent_rel_path: str) -> str:
    if not parent_rel_path or parent_rel_path == '.':
        return content
    # Create breadcrumb links from the parent path parts
    parts = [p for p in parent_rel_path.split(os.sep) if p and p != '.']
    if not parts:
        return content
    links = " > ".join(f'[[{part}]]' for part in parts)
    breadcrumb = f"**Parent:** {links}\n\n"
    return breadcrumb + content

def process_file(md_path: str, export_root: str, output_folder: str, assets_folder: str):
    try:
        with open(md_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"⚠️  Skipping {md_path}: cannot read ({e})")
        return

    # Clean content
    content = remove_frontmatter(content)
    content = convert_md_links_to_wikilinks(content)

    # Determine parent relative path for breadcrumb
    rel_dir = os.path.relpath(os.path.dirname(md_path), export_root)
    content = add_breadcrumb(content, rel_dir)

    # Determine output file name (flatten)
    original_name = os.path.basename(md_path)
    safe_name = slugify_filename(original_name)
    unique_name = ensure_unique_path(output_folder, safe_name)
    out_path = os.path.join(output_folder, unique_name)

    try:
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✔ Converted: {md_path} -> {out_path}")
    except Exception as e:
        print(f"⚠️  Failed to write {out_path}: {e}")

def copy_asset(src_path: str, export_root: str, output_assets_root: str):
    # Preserve relative path under assets root to avoid collisions
    rel_path = os.path.relpath(src_path, export_root)
    dest_path = os.path.join(output_assets_root, rel_path)
    dest_dir = os.path.dirname(dest_path)
    os.makedirs(dest_dir, exist_ok=True)
    try:
        shutil.copy2(src_path, dest_path)
        # print(f"  Copied asset: {rel_path}")
    except Exception as e:
        print(f"⚠️  Failed to copy asset {src_path}: {e}")

def process_and_flatten(export_folder: str, output_folder: str, copy_assets: bool = True, assets_dirname: str = "assets"):
    export_folder = os.path.abspath(export_folder)
    output_folder = os.path.abspath(output_folder)
    assets_root = os.path.join(output_folder, assets_dirname)

    os.makedirs(output_folder, exist_ok=True)
    if copy_assets:
        os.makedirs(assets_root, exist_ok=True)

    md_count = 0
    asset_count = 0

    for root, dirs, files in os.walk(export_folder):
        for file in files:
            src = os.path.join(root, file)
            if file.lower().endswith('.md'):
                process_file(src, export_folder, output_folder, assets_root)
                md_count += 1
            else:
                if copy_assets:
                    copy_asset(src, export_folder, assets_root)
                    asset_count += 1

    print("\n✅ Finished.")
    print(f" - Markdown files processed: {md_count}")
    if copy_assets:
        print(f" - Assets copied into: {assets_root} ({asset_count} files)")

def main():
    parser = argparse.ArgumentParser(description="Flatten and convert a Notion markdown export into Obsidian-friendly files.")
    parser.add_argument("export_folder", help="Path to your Notion export folder (root of exported files)")
    parser.add_argument("output_folder", help="Path to your Obsidian vault folder (where flattened files will be written)")
    parser.add_argument("--no-assets", dest="copy_assets", action="store_false", help="Don't copy non-markdown assets (images, attachments)")
    parser.add_argument("--assets-dir", default="assets", help="Subfolder name inside output_folder to place copied assets")
    args = parser.parse_args()

    process_and_flatten(args.export_folder, args.output_folder, copy_assets=args.copy_assets, assets_dirname=args.assets_dir)

if __name__ == "__main__":
    main()