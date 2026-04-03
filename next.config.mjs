/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // <-- enables static export for Cloudflare Pages
};

export default nextConfig;