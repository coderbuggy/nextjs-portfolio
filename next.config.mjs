/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "dist",
    output: "export",
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "**",
        }, ],
    },
};

export default nextConfig;