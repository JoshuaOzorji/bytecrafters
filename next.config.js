/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["cdn.sanity.io, vercel.com"],
	},
};

module.exports = nextConfig;
