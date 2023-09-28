/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/originals/**",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
