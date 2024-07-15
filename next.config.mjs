/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `@import "src/styles/variables/_variables.scss"; @import "src/styles/variables/_mixin.scss"; `
  }
};
export default nextConfig;
