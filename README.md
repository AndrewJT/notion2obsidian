# notion2obsidian

Flatten and convert a Notion Markdown export into Obsidian-friendly notes.

This repository provides a small Python utility, `notion-to-obsidian.py`, that:
- removes Notion export metadata (YAML frontmatter),
- converts Markdown links that point to `.md` pages into Obsidian wikilinks (`[[Page]]` or `[[Page|alias]]`),
- optionally copies non-markdown assets (images, attachments) into an `assets/` subfolder,
- flattens the exported folder structure into a single folder while adding breadcrumb metadata for nested pages,
- ensures safe, unique filenames to avoid overwriting.

Script: [notion-to-obsidian.py](https://github.com/AndrewJT/notion2obsidian/blob/main/notion-to-obsidian.py)

---

## Table of contents

- [Quick start](#quick-start)
- [Features](#features)
- [Usage](#usage)
- [Examples](#examples)
- [How it works (overview)](#how-it-works-overview)
- [Options & behavior notes](#options--behavior-notes)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Quick start

Requirements:
- Python 3.7+ (no external dependencies; uses the standard library)

Install / run:
1. Clone the repo (or download the single script).
2. From a terminal run:

```bash
python3 notion-to-obsidian.py /path/to/notion-export /path/to/obsidian-vault
```

By default the script will:
- process all `.md` files found in the export,
- write flattened `.md` files into your Obsidian vault folder,
- copy non-markdown files (images, attachments) into an `assets/` folder inside the vault.

---

## Features

- Remove YAML frontmatter produced by Notion exports.
- Convert Markdown links that reference `.md` files into Obsidian-style wikilinks:
  - `[Text](Some%20Page.md)` → `[[Some Page|Text]]`
  - `[Some Page](Some%20Page.md)` → `[[Some Page]]`
  - Removes anchors and decodes URL-encoded filenames.
- Add a breadcrumb line to files that were nested in the exported folder structure:
  - `**Parent:** [[Folder]] > [[Subfolder]]`
- Flatten exported notes into one folder and copy assets into `assets/` to avoid filename collisions.
- Ensure safe filenames and avoid overwriting by adding numeric suffixes when necessary.
- Simple CLI with flags to control asset copying and asset folder name.

---

## Usage

Basic:

```bash
python3 notion-to-obsidian.py /path/to/notion-export /path/to/obsidian-vault
```

Options:

- `--no-assets`  
  Do not copy non-markdown files (images/attachments).

- `--assets-dir NAME`  
  Change the assets directory name inside the output folder (default: `assets`).

Example with options:

```bash
python3 notion-to-obsidian.py /tmp/notion-export ~/Dropbox/Obsidian/Vault --assets-dir attachments
python3 notion-to-obsidian.py /tmp/notion-export ~/Obsidian/Vault --no-assets
```

---

## Examples

Given a Notion-exported markdown fragment:

```md
---
title: Example
created_time: 2023-01-01
---

Here is a link to another page: [My Other Page](../pages/My%20Other%20Page.md#section)
```

The script will produce (flattened) output similar to:

```md
**Parent:** [[pages]]

Here is a link to another page: [[My Other Page|My Other Page]]
```

If the link text matches the target page name, it will be simplified:

Input:
```md
[My Other Page](../pages/My%20Other%20Page.md)
```

Output:
```md
[[My Other Page]]
```

---

## How it works (overview)

- Walks the export directory recursively.
- For each `.md` file:
  - Reads the file,
  - Removes YAML frontmatter if present,
  - Converts `.md` links to wikilinks (decodes URL-encoded parts, strips anchors and paths),
  - Prepends a breadcrumb line when the file was in a subfolder,
  - Writes the resulting markdown to the output folder using a safe, unique filename.
- For non-markdown files, optionally copies them under the chosen assets folder while preserving relative paths to reduce collisions.

---

## Options & behavior notes

- The script flattens the folder structure by default (all `.md` files are written into the single output folder). If you prefer to preserve the folder hierarchy, tell me and I can add a "mirror folder structure" mode.
- Links are converted only when they point to `.md` files (case-insensitive). External links and non-md links are left unchanged.
- Anchors (e.g., `#heading`) are removed from wikilinks — Obsidian has different rules for heading links; if you want to preserve anchors as `[[Page#Heading]]` I can update the behavior.
- Filenames are cleaned to remove control characters and slashes. Spaces are preserved (Obsidian supports them). If filename collisions occur, the script appends `-1`, `-2`, etc.
- The script does not modify file timestamps. If you'd like original created/modified times added as YAML frontmatter, that can be implemented.

---

## Troubleshooting

- "UnicodeDecodeError" when reading a file: try re-encoding your Notion export as UTF-8, or open problematic files in a text editor to inspect encoding.
- Links not converted: ensure the link destination ends with `.md`. Some Notion exports use different link formats or absolute URLs — paste a sample here and I can update the conversion.
- Overwritten files: the script tries to avoid overwrites by ensuring unique filenames. If you still see collisions, check for files that differ only by case on case-insensitive filesystems.

---

## Contributing

Bug reports, ideas, and pull requests are welcome.

If you want to improve link conversion, add support for additional Notion export patterns, or change flattening behavior — open an issue or a PR in the repository.

Repository: [AndrewJT/notion2obsidian](https://github.com/AndrewJT/notion2obsidian)

---

## License

This project is provided under the MIT License. See the `LICENSE` file for details.

---

Authored by AndrewJT
