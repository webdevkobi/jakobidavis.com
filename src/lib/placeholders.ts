/**
 * Content that is still waiting on real information is written as
 * "TODO: ..." in the data and content files. These helpers let the templates
 * render those values in a visibly unfinished style instead of printing a
 * blank, so nothing silently ships empty.
 */
export const isTodo = (value: string | undefined): boolean =>
  typeof value === "string" && value.trim().startsWith("TODO:");

export const todoText = (value: string): string =>
  value.replace(/^TODO:\s*/, "");
