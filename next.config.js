/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/id/1016/720/400",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
