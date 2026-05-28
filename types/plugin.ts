/**
 * Plugin data types — designed to match the eventual WPGraphQL response shape
 * from the headless WordPress backend. When `lib/plugins.ts` is swapped for a
 * GraphQL query, this same Plugin interface is what comes back.
 */

export type PluginStatus = "live" | "soon";
export type PluginIconKey = "clock" | "store" | "notice" | "user";

export interface PluginSetting {
	label: string;
	value: string;
}

export interface PluginChangelogEntry {
	version: string;
	date: string;
	notes: string[];
}

export interface PluginRequires {
	wp: string;
	php: string;
}

export interface Plugin {
	slug: string;
	name: string;
	fullName: string;
	arabic: string;
	tagline: string;
	description: string;
	status: PluginStatus;
	icon: PluginIconKey;
	/** Accent foreground (icon stroke, accents) */
	color: string;
	/** Accent background (icon container fill) */
	bg: string;
	tags: string[];

	/* Live-only fields */
	version?: string;
	requires?: PluginRequires;
	features?: string[];
	settings?: PluginSetting[];
	changelog?: PluginChangelogEntry[];
	wporgUrl?: string;

	/* Coming-soon fields */
	eta?: string;
}
