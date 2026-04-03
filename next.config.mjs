/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',         // enables static export
  distDir: 'out'            // <-- ensures build goes to 'out' folder
};

export default nextConfig;