
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions:{
    additionalData: `@import "src/styles/variables/_variables.scss";`,
  }
}
export default nextConfig;
