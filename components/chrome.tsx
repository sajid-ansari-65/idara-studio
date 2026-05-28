import Link from "next/link";
import { Logo } from "@/components/Logo";
import { StarEight } from "@/components/icons";

/* ── SectionDivider ────────────────────────────────────────────────────── */

export function SectionDivider({ label }: { label: string }) {
	return (
		<div className="section-divider">
			<span className="text-amber">
				<StarEight size={12} />
			</span>
			<span className="section-divider-label">{label}</span>
			<div className="section-divider-line" />
		</div>
	);
}

/* ── Footer ────────────────────────────────────────────────────────────── */

const FOOTER_COLS = [
	{
		title: "Plugins",
		links: [
			{ label: "Reading Time",   href: "/plugins/reading-time" },
			{ label: "Business Hours", href: "/plugins/business-hours" },
			{ label: "Notice Block",   href: "/plugins/notice-block" },
			{ label: "Author Bio",     href: "/plugins/author-bio" },
		],
	},
	{
		title: "Studio",
		links: [
			{ label: "About",      href: "/about" },
			{ label: "Philosophy", href: "/about#principles" },
			{ label: "Roadmap",    href: "/plugins" },
			{ label: "Contact",    href: "mailto:hello@idara.studio" },
		],
	},
	{
		title: "Resources",
		links: [
			{ label: "Documentation", href: "/docs" },
			{ label: "WordPress.org", href: "https://wordpress.org/plugins/idara-reading-time/" },
			{ label: "GitHub",        href: "https://github.com/" },
		],
	},
];

export function Footer() {
	return (
		<footer className="border-t border-line bg-paper px-8 pt-12 pb-8 mt-20">
			<div className="max-w-container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-10">
					<div>
						<Logo small />
						<p className="font-display italic text-[14px] text-amber mt-2.5 mb-2">
							The studio that lights up your editor.
						</p>
						<p className="text-[13px] text-muted leading-relaxed max-w-[280px]">
							A small studio crafting careful, single-purpose Gutenberg blocks. No bloat, no tracking, no upsells.
						</p>
						<p className="text-[11px] text-faint mt-4 font-mono">
							GPL-2.0-or-later · Surat, India
						</p>
					</div>
					{FOOTER_COLS.map((col) => (
						<div key={col.title}>
							<h5 className="text-[11px] tracking-[0.08em] uppercase text-ink font-medium mb-3.5">
								{col.title}
							</h5>
							{col.links.map((link) => (
								<Link
									key={link.label}
									href={link.href}
									className="block text-[13px] text-muted no-underline mb-2 hover:text-ink transition-colors"
								>
									{link.label}
								</Link>
							))}
						</div>
					))}
				</div>
				<div className="border-t border-line pt-5 flex justify-between items-center text-[11px] text-faint font-mono">
					<span>© 2026 Idara Studio</span>
					<span className="text-amber">
						<StarEight size={13} />
					</span>
				</div>
			</div>
		</footer>
	);
}
