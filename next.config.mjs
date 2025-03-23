import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@use "@styles/utils/_variables.scss" as *; @use "@styles/utils/_mixin.scss" as *;`,
  },
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: './public/loader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
      },
    ],
  },
};
export default nextConfig;
