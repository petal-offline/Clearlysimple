/** @type {import('next').NextConfig} */
const nextConfig = {
  htmlLimitedBots: /.*/,
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

module.exports = nextConfig;
