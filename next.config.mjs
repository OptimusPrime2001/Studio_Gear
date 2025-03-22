/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `@import "@styles/variables/_variables.scss"; `
  },
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: './public/loader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com'
      },
      {
        protocol: 'https',
        hostname: 'ucarecdn.com'
      }
    ]
  }
};
export default nextConfig;
