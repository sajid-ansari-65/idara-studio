import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono, Amiri } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/chrome";
import "./globals.css";

const fraunces = Fraunces({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-display",
	axes: ["opsz"],
});

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-sans",
});

const mono = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-mono",
});

const amiri = Amiri({
	subsets: ["arabic"],
	weight: ["400", "700"],
	display: "swap",
	variable: "--font-arabic",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://idara.studio"),
	title: {
		default: "Idara — The studio that lights up your editor",
		template: "%s · Idara",
	},
	description:
		"A small studio crafting careful, single-purpose Gutenberg blocks for WordPress. No bloat, no tracking, no upsells.",
	openGraph: {
		title: "Idara — Carefully crafted Gutenberg blocks",
		description: "Single-purpose WordPress blocks built for performance and FSE compatibility.",
		siteName: "Idara",
		type: "website",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={`${fraunces.variable} ${inter.variable} ${mono.variable} ${amiri.variable}`}
		>
			<body>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
