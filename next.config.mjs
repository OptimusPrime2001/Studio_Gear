/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `@import "src/styles/variables/_variables.scss"; @import "src/styles/variables/_mixin.scss"; `
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
