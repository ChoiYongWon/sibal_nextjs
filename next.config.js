/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ahtty.s3.ap-northeast-2.amazonaws.com",
        pathname: "/image/**",
      },
    ],
  },
};

module.exports = nextConfig;
