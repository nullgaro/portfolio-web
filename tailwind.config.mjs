const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,json}'],
	darkMode: "class",
	theme: {
		extend: {
			dropShadow: {
				'around-light': [
					'2px 0 1px rgba(255, 255, 255, 0.5)',
					'-2px 0 1px rgba(255, 255, 255, 0.5)',
					'0 2px 1px rgba(255, 255, 255, 0.5)',
					'0 -2px 1px rgba(255, 255, 255, 0.5)'
				],
				'around-dark': [
					'2px 0 1px rgba(0, 0, 0, 1)',
					'-2px 0 1px rgba(0, 0, 0, 1)',
					'0 2px 1px rgba(0, 0, 0, 1)',
					'0 -2px 1px rgba(0, 0, 0, 1)'
				]
			  }
		},
		screens: {
			'xs': '500px',
			'xxs': '450px',
			...defaultTheme.screens,
		  },
	},
	plugins: [],
}