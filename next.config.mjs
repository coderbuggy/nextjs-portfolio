/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "dist",
    output: "export",
    images: {
        unoptimized: true,
        remotePatterns: [{
            protocol: "https",
            hostname: "**",
        }, ],
    },
};

export default nextConfig;