const { withContentlayer } = require("next-contentlayer2");

const basePath = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/issues",
        destination: "https://github.com/picguard/picguard/issues",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      { hostname: "raw.githubusercontent.com" },
      { hostname: "microsoft.com" },
      { hostname: "snapcraft.io" },
      { hostname: "flathub.org" },
      { hostname: "lh3.googleusercontent.com" },
    ],
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
  },
  env: {
    VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
    NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
    NEXT_PUBLIC_GOOGLE_ID: process.env.NEXT_PUBLIC_GOOGLE_ID,
    NEXT_PUBLIC_COOKIE_BANNER_ID: process.env.NEXT_PUBLIC_COOKIE_BANNER_ID,
    NEXT_PUBLIC_SHOW_PARTICLES: process.env.NEXT_PUBLIC_SHOW_PARTICLES,
    NEXT_PUBLIC_WEBSITE_GLOBAL_GRAY:
      process.env.NEXT_PUBLIC_WEBSITE_GLOBAL_GRAY,
    GH_TOKEN: process.env.GH_TOKEN,
    GH_REPO_OWNER: process.env.GH_REPO_OWNER,
    GH_REPO: process.env.GH_REPO,
  },
};

module.exports = withContentlayer(nextConfig);
