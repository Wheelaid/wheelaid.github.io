/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'danube': {
					'50': '#f3f7fb',
					'100': '#e4ecf5',
					'200': '#cfdfee',
					'300': '#adcae3',
					'400': '#86afd4',
					'500': '#6a95c8',
					'600': '#567dba',
					'700': '#4b6baa',
					'800': '#42598b',
					'900': '#394b6f',
					'950': '#262f45',
				}
			},
    
		},
	},
	plugins: [],
}
