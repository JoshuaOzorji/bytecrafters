/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: [
			"cdn.sanity.io",
			"https://sanity.io",
			"https://vercel.app",
			"https://vercel.com",
			"https://vercel.io",
		],
	},
};

module.exports = nextConfig;
