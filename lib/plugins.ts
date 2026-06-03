import type { Plugin } from "@/types/plugin";

/**
 * Static plugin catalogue.
 *
 * This file will eventually be replaced by `getPlugins()` and `getPlugin(slug)`
 * helpers that call the WPGraphQL endpoint. The data shape here matches the
 * Plugin interface exactly, so swapping is mechanical.
 */
export const PLUGINS: Plugin[] = [
	{
		slug: "reading-time",
		name: "Reading Time",
		fullName: "Idara Reading Time",
		arabic: "زمن القراءة",
		tagline: "Estimated reading time with scroll progress.",
		description:
			"A dynamic Gutenberg block that calculates reading time server-side and renders an optional scroll progress bar at the top or bottom of the page. Inherits your theme typography, loads nothing on pages where it isn't placed, and ships with four icon styles plus a range-display mode for honest estimates.",
		status: "live",
		icon: "clock",
		color: "#b45309",
		bg: "#fef3c7",
		version: "1.0.0",
		requires: { wp: "6.4+", php: "7.4+" },
		tags: ["utility", "blog", "FSE-ready", "performance"],
		wporgUrl: "https://wordpress.org/plugins/idara-reading-time/",
		screenshots: [
			{
				src: "/plugins/reading-time/screenshot-1.png",
				caption: 'Block in the WordPress inserter — find it by searching "Reading Time".',
			},
			{
				src: "/plugins/reading-time/screenshot-2.png",
				caption: "Block selected in the editor, with toolbar shortcuts for icon cycling and range toggle.",
			},
			{
				src: "/plugins/reading-time/screenshot-3.png",
				caption: "Block settings sidebar — Display, Calculation, and Scroll progress bar panels.",
			},
			{
				src: "/plugins/reading-time/screenshot-4.png",
				caption: "Display panel — icon style picker, Single/Range format toggle, and custom prefix/suffix.",
			},
			{
				src: "/plugins/reading-time/screenshot-5.png",
				caption: "Calculation panel — adjustable words-per-minute (default 200) and hide-on-short-posts.",
			},
			{
				src: "/plugins/reading-time/screenshot-6.png",
				caption: "Scroll progress bar panel — enable toggle, live preview, position, height, and color.",
			},
			{
				src: "/plugins/reading-time/screenshot-7.png",
				caption: "Frontend — reading time with a clock icon, scroll progress bar pinned to the page.",
			},
			{
				src: "/plugins/reading-time/screenshot-8.png",
				caption: "Frontend — reading time with an hourglass icon below the post title in a blog layout.",
			},
		],
		features: [
			"Server-side calculation — always accurate after edits",
			"Adjustable WPM (50–600)",
			"Range display mode (\"2–3 min read\" instead of \"3 min read\")",
			"Scroll progress bar with position, height, color",
			"4 icon styles: clock, timer, hourglass, none",
			"Hide on short posts (smart threshold)",
			"Full block color + typography support",
			"CSS/JS loaded only on pages with the block",
		],
		settings: [
			{ label: "Icon style",     value: "Clock / Timer / Hourglass / None" },
			{ label: "Format",         value: "Single value or Range" },
			{ label: "WPM",            value: "200 (default), 50–600" },
			{ label: "Progress bar",   value: "Off / Top / Bottom" },
			{ label: "Hide threshold", value: "Off / 1–10 minutes" },
		],
		changelog: [
			{ version: "1.0.0", date: "May 2026", notes: ["Initial release on WordPress.org"] },
		],
	},
	{
		slug: "business-hours",
		name: "Business Hours",
		fullName: "Idara Business Hours",
		arabic: "ساعات العمل",
		tagline: "Weekly schedule with LocalBusiness schema.",
		description:
			"A visual weekly hours editor that outputs valid LocalBusiness JSON-LD schema automatically. Built for agencies running local SEO for restaurants, clinics, salons, and service businesses.",
		status: "soon",
		icon: "store",
		color: "#0f766e",
		bg: "#ccfbf1",
		eta: "Q3 2026",
		tags: ["local-seo", "schema", "agency"],
	},
	{
		slug: "notice-block",
		name: "Notice Block",
		fullName: "Idara Notice Block",
		arabic: "تنبيه",
		tagline: "Info, warning, success, danger callouts.",
		description:
			"Four semantic callout types with optional icon, title, and dismiss button. Smaller and faster than any suite plugin that bundles notices alongside 40 other blocks.",
		status: "soon",
		icon: "notice",
		color: "#3f6212",
		bg: "#ecfccb",
		eta: "Q3 2026",
		tags: ["utility", "content"],
	},
	{
		slug: "author-bio",
		name: "Author Bio",
		fullName: "Idara Author Bio",
		arabic: "ملف الكاتب",
		tagline: "Author profile with Person schema for E-E-A-T.",
		description:
			"Author bio block that outputs Person schema JSON-LD automatically — bio, avatar, social links, sameAs URLs. Lightweight alternative to bundled SEO-suite author blocks.",
		status: "soon",
		icon: "user",
		color: "#9d174d",
		bg: "#fce7f3",
		eta: "Q4 2026",
		tags: ["seo", "schema", "trust"],
	},
];

export function getAllPlugins(): Plugin[] {
	return PLUGINS;
}

export function getPlugin(slug: string): Plugin | undefined {
	return PLUGINS.find((p) => p.slug === slug);
}

export function getAllPluginSlugs(): string[] {
	return PLUGINS.map((p) => p.slug);
}
