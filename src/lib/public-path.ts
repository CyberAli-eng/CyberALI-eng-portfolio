/**
 * Prefix for files in /public.
 * GitHub Pages serves the site from /<repo>/, so assets need that prefix there;
 * every other host (Netlify) serves from the root and gets an empty prefix.
 */
const PUBLIC_BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const publicPath = (path: string): string => `${PUBLIC_BASE}${path}`;
