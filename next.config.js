const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this line for static HTML export
  images: {
    path: '/_next/image',
  },
};

module.exports = withContentlayer(nextConfig);