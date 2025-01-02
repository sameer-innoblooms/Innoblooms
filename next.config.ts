// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
 
// };
//   module.exports = {
//     distDir: 'build',
//   }

// export default nextConfig;
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  assetPrefix: "./",
  images: {
      unoptimized: true,
      domains: ["localhost", "127.0.0.1:5501"],
  },
  // trailingSlash: true, 
  // basePath: '',  // If you're deploying to the root path
  // experimental: {
  //   appDir: true,  // If you are using the app directory
  // },
};

export default nextConfig;