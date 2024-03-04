/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
<<<<<<< HEAD
				sm: "50px",
=======
				sm: "300px",
>>>>>>> e2db26c082f7cfd0162b92ffac32e0e11e8e3395
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},

			fontFamily: {
				ubuntu: ["var(--font-ubuntu)"],
				abel: ["var(--font-abel)"],
			},

			colors: {
				primary: "#123C13",
				secondary: "#424242",
				accent: "#FDF7ED",
				accent1: "#fcfbf7",
				accent2: "#F3D2AC",
			},
		},
	},

	plugins: [],
};
