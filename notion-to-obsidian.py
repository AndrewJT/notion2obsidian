import os
import re
import shutil

def clean_and_flatten_md(file_path, target_folder, parent_path):
    file_name = os.path.basename(file_path)
    new_path = os.path.join(target_folder, file_name)

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove Notion metadata blocks
    content = re.sub(r'^---[\s\S]*?---', '', content, flags=re.MULTILINE)

    # Convert Notion-style links to Obsidian wikilinks
    content = re.sub(r'

\[([^\]

]+)\]

\([^\)]+\.md\)', r'[[\1]]', content)

    # Add breadcrumb if nested
    if parent_path:
        breadcrumb = f"**Parent:** [[{parent_path.replace(os.sep, ' > ')}]]\n\n"
        content = breadcrumb + content

    with open(new_path, 'w', encoding='utf-8') as f:
        f.write(content)

def process_and_flatten(export_folder, output_folder):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for root, dirs, files in os.walk(export_folder):
        for file in files:
            if file.endswith('.md'):
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(root, export_folder)
                parent = rel_path if rel_path != '.' else ''
                clean_and_flatten_md(full_path, output_folder, parent)

if __name__ == "__main__":
    export_folder = input("Enter the path to your Notion export folder: ").strip('"')
    output_folder = input("Enter the path to your Obsidian vault folder: ").strip('"')
    process_and_flatten(export_folder, output_folder)
    print("✅ All files flattened, cleaned, and ready for Obsidian.")
