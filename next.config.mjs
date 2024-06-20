/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

if (process.env.NODE_ENV === "production") {
    if (process.env.STATIC_ONLY === "true") {
      nextConfig.pageExtensions = ["page.tsx", "page.ts", "page.jsx", "page.js"];
      nextConfig.output = "export";
    } else {
      nextConfig.pageExtensions = ["api.ts", "api.js"];
    }
  } else {
    nextConfig.pageExtensions = [
      "page.tsx",
      "page.ts",
      "page.jsx",
      "page.js",
      "api.ts",
      "api.js",
    ];
  }
  
export default nextConfig;
