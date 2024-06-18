const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,json}'],
	theme: {
		extend: {},
		screens: {
			'xs': '500px',
			'xxs': '450px',
			...defaultTheme.screens,
		  },
	},
	plugins: [],
}
