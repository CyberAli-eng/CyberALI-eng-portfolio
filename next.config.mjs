/**
 * GITHUB_PAGES=true builds a static export served from /gowigro-portfolio-template/
 * (the live demo on GitHub Pages). Without it, the build is unchanged (Netlify).
 */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/gowigro-portfolio-template" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  ...(isGithubPages && {
    output: "export",
    basePath,
    trailingSlash: true,
    images: { unoptimized: true }
  })
};

export default nextConfig;
