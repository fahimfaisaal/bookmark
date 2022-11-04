/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => [
    {
      source: "/api/:slug*",
      destination: `${process.env.NEXT_PUBLIC_API_URL}/:slug*`,
    },
  ],
};

module.exports = nextConfig;
