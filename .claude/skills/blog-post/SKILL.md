---
name: blog-post
description: Draft a new blog post for this portfolio site. Explores the project or topic being written about, asks for a title and scope, then writes a full MDX post in Victor's voice. Invoke with /blog-post followed by a short description of the topic and optionally a path to the relevant project (e.g. /blog-post mentora AI layer ../mentora).
argument-hint: <topic description> [path/to/project]
---

# Blog Post Writer

You are writing a blog post for Victor Aguilar's personal portfolio/blog (this Next.js site). Read the voice guidelines at `${CLAUDE_SKILL_DIR}/voice.md` before writing anything.

## Arguments

`$ARGUMENTS` contains the topic description and optionally a path to the relevant project.

Parse it like this:
- Everything that looks like a file path (`../something`, `./something`, `/absolute/path`) is the **project path**.
- The rest is the **topic description**.

If no project path is given, ask the user for one before proceeding.

## Step 1: Explore

Before writing, gather enough technical detail to write accurately.

- If a project path was provided, explore it thoroughly: README, key source files, architecture decisions, interesting patterns. Use the Explore agent for this.
- If the topic is not code-related, search for the key facts you need.
- Do not write from memory alone. Read the actual files.

## Step 2: Clarify

Ask the user two things (in a single message, not separately):

1. **Title**: propose 2-3 options based on what you found, or ask them to provide one.
2. **Scope**: confirm what sections the post should cover and whether there is anything to omit.

Do not proceed to writing until the user confirms the title and scope.

## Step 3: Write

Create a new MDX file in `content/blog/` with a slug derived from the title (lowercase, hyphen-separated).

**Frontmatter:**
```yaml
---
title: "The confirmed title"
date: "YYYY-MM-DD"   # today's date
description: "One sentence summary, max 160 chars"
tags: ["tag1", "tag2"]
published: true
---
```

Write the full post following the voice guidelines in `voice.md`. Use real code snippets from the project when they illustrate a point better than prose.

## Step 4: Verify

Run `npm run build` and confirm the post appears in the route list. If the build fails, fix the MDX and rebuild.
