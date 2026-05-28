import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				/* Idara brand palette — warm editorial */
				paper:   "#fafaf7", // page background (warm cream)
				surface: "#ffffff", // card surfaces
				ink:     "#0a0a0f", // primary text (near-black, warm)
				muted:   "#4a4a55", // body copy
				faint:   "#8a8a95", // tertiary / labels
				line:    "#e8e3da", // warm gray borders
				lineSoft:"#f0ebe2", // even softer borders
				amber: {
					DEFAULT: "#b45309", // primary accent
					soft:    "#fef3c7", // accent fill
					line:    "#fde68a", // accent border
				},
				/* Per-plugin accents */
				plugin: {
					"reading-time-bg":    "#fef3c7",
					"reading-time-fg":    "#b45309",
					"business-hours-bg":  "#ccfbf1",
					"business-hours-fg":  "#0f766e",
					"notice-block-bg":    "#ecfccb",
					"notice-block-fg":    "#3f6212",
					"author-bio-bg":      "#fce7f3",
					"author-bio-fg":      "#9d174d",
				},
			},
			fontFamily: {
				display: ["var(--font-display)", "serif"],
				sans:    ["var(--font-sans)", "system-ui", "sans-serif"],
				mono:    ["var(--font-mono)", "monospace"],
				arabic:  ["var(--font-arabic)", "serif"],
			},
			maxWidth: {
				container: "1100px",
			},
			letterSpacing: {
				"tightest": "-0.025em",
			},
		},
	},
	plugins: [],
};

export default config;
