# Skill Structure

## Directory Layout

```
skill-name/
├── SKILL.md          # Required: Main definition
├── scripts/          # Optional: Executable code
│   ├── helper.py
│   └── process.sh
├── references/       # Optional: Reference docs
│   ├── api.md
│   └── schema.md
└── assets/           # Optional: Output files
    ├── template.html
    └── logo.png
```

## SKILL.md Format

### Required Structure

```markdown
---
name: skill-name
description: "Brief description with trigger words"
---

# Skill Title

Your instructions here...
```

### Full Structure with Metadata

````markdown
---
name: skill-name
description: "Detailed description of what this skill does. Use when user asks about X or needs Y."
metadata:
  {
    "cml-hive-assist":
      {
        "emoji": "🔧",
        "requires": { "bins": ["tool-name"], "env": ["API_KEY"], "config": ["path.to.config"] },
        "os": ["darwin", "linux"],
        "install":
          [
            {
              "id": "brew",
              "kind": "brew",
              "formula": "tool-name",
              "bins": ["tool-name"],
              "label": "Install via Homebrew",
            },
            {
              "id": "apt",
              "kind": "apt",
              "package": "tool-name",
              "bins": ["tool-name"],
              "label": "Install via apt",
            },
          ],
      },
  }
---

# Skill Title

## Overview

Brief explanation of the skill's purpose.

## Commands

### Basic Usage

```bash
tool-name command --option value
```
````

### Advanced Usage

For complex operations, use:

```bash
tool-name advanced --flag
```

## Examples

### Example 1: Common Task

When user asks "do X", follow these steps:

1. First, run `tool-name check`
2. Then, execute `tool-name action`

## References

For detailed API docs, see [references/api.md](references/api.md)

```

## Frontmatter Fields

### Required

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Skill identifier (lowercase, hyphens) |
| `description` | string | Trigger-rich description |

### Optional (under `metadata.cml-hive-assist`)

| Field | Type | Description |
|-------|------|-------------|
| `emoji` | string | Display emoji |
| `requires.bins` | string[] | Required CLI tools |
| `requires.env` | string[] | Required env vars |
| `requires.config` | string[] | Required config paths |
| `os` | string[] | Platform restrictions |
| `install` | object[] | Installation options |
| `always` | boolean | Skip all gating |

## Scripts Directory

For repetitive or complex operations:

```

scripts/
├── process_data.py # Python script
├── setup.sh # Bash script
└── helper.js # Node.js script

````

Reference in SKILL.md:
```markdown
## Data Processing

Run the processor script:
```bash
python scripts/process_data.py --input file.csv
````

```

## References Directory

For documentation that's too long for SKILL.md:

```

references/
├── api.md # API documentation
├── schema.md # Data schemas
└── examples.md # Extended examples

````

Reference in SKILL.md:
```markdown
## API Details

For complete API reference, see [references/api.md](references/api.md)
````

## Assets Directory

For files used in output:

```
assets/
├── template.html     # Output template
├── style.css         # Styling
└── logo.png          # Images
```

Reference in SKILL.md:

```markdown
## Creating Reports

Copy the template from `assets/template.html` and fill in:

- Title
- Content sections
- Footer
```

## Naming Conventions

### Skill Name

- Lowercase letters, digits, hyphens only
- Under 64 characters
- Verb-led phrases preferred: `create-report`, `analyze-data`
- Namespace by tool when helpful: `gh-review-pr`, `npm-publish`

### File Names

- Use lowercase with hyphens
- Match the skill name for the directory
- Use standard extensions (.md, .py, .sh)
