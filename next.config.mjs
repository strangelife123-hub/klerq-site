/** @type {import('next').NextConfig} */
const lastModified = new Date().toUTCString();

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Last-Modified", value: lastModified }],
      },
    ];
  },
};

export default nextConfig;
