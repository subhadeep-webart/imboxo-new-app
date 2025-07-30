/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "imboxott.s3.us-west-2.amazonaws.com"
        }, {
            protocol: "https",
            hostname: "images.unsplash.com"
        }
        ]
    }
};

export default nextConfig;
