## Install the `design-taste-frontend` skill

Add the v2 experimental Taste skill from Leonxlnx/taste-skill so future design/frontend work in this project follows its rules automatically.

### Steps

1. Run `npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"` to fetch the skill bundle.
2. If the CLI writes to `.claude/skills/`, copy the directory to `.agents/skills/design-taste-frontend/` (approved skill location).
3. Verify `SKILL.md` frontmatter (`name`, `description`) is valid; leave the body untouched.
4. Apply the skill via the internal apply-draft step so it becomes active in `.workspace/skills/`.
5. Read the activated `SKILL.md` and summarise for you: how it reads a brief and the rules it enforces.

### Out of scope

- No visual redesign or code changes to the site in this step. The skill only becomes active; we apply it on the next design task you request.
