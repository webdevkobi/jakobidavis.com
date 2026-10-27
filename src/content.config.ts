import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Add a project by dropping a new .md file in src/content/projects/.
//
// The brief fixes the block order for every project page: title, context,
// problem, approach, result, limits, downloads. The prose for those blocks
// lives in frontmatter so the template can place each one in that order. The
// markdown body below the frontmatter is optional and renders as "Notes" at
// the end of the page.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    // Shorter stand-in for the <title> tag when the headline runs past the
    // ~60 characters search results show. The <h1> always uses `title`.
    metaTitle: z.string().optional(),
    // One line, states the result.
    result: z.string(),
    course: z.string(),
    semester: z.string(),
    team: z.string(),
    myPart: z.string(),
    tools: z.array(z.string()),
    cardSummary: z.string(),
    description: z.string(),
    problem: z.string(),
    approach: z.string(),
    resultNote: z.string(),
    limits: z.string(),
    // Two or three headline numbers.
    numbers: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .min(2)
      .max(3),
    // Drop a file in public/figures/ and set src. Leave src out for a slot.
    figure: z.object({
      src: z.string().optional(),
      alt: z.string(),
      caption: z.string(),
    }),
    downloads: z.array(
      z.object({
        label: z.string(),
        kind: z.string(),
        href: z.string().optional(),
      }),
    ),
  }),
});

export const collections = { projects };
