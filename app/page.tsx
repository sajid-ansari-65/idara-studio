import Link from "next/link";
import { getAllPlugins } from "@/lib/plugins";
import { PluginCard } from "@/components/plugin-card";
import { SectionDivider } from "@/components/chrome";
import { ArrowRight, ClockIcon } from "@/components/icons";

export default function HomePage() {
	const plugins = getAllPlugins();
	const featured = plugins.find((p) => p.status === "live")!;
	const coming   = plugins.filter((p) => p.status === "soon");

	return (
		<div className="max-w-container mx-auto px-8">

			{/* ── HERO ─────────────────────────────────────────────── */}
			<section className="py-24 relative">
				<span
					className="absolute top-[60px] -left-5 text-[200px] leading-none pointer-events-none select-none font-arabic"
					style={{ color: "#f5e6c8" }}
					aria-hidden="true"
				>
					إدارة
				</span>
				<div className="relative max-w-[760px]">
					<div className="inline-flex items-center gap-2 px-3.5 py-[5px] rounded-full bg-amber-soft border border-amber-line text-[11.5px] font-medium text-amber-800 tracking-wide mb-7">
						<span className="w-1.5 h-1.5 rounded-full bg-amber-800" />
						Reading Time block is live on WordPress.org
					</div>

					<h1 className="font-display text-[68px] leading-[1.02] tracking-tightest text-ink m-0 mb-6 font-normal">
						Carefully crafted{" "}
						<span className="italic font-medium text-amber">Gutenberg</span>
						<br />
						blocks. <span className="text-muted font-normal">One discipline,</span>
						<br />
						<span className="text-muted font-normal">at a time.</span>
					</h1>

					<p className="font-display italic text-[22px] text-amber leading-tight m-0 mb-5">
						The studio that lights up your editor.
					</p>

					<p className="text-[17px] text-muted leading-relaxed max-w-[540px] m-0 mb-9">
						Idara is a small studio building single-purpose WordPress blocks.
						No 40-block bundles. No upgrade nags. Just considered tools that
						load only where they&apos;re used.
					</p>

					<div className="flex gap-3">
						<Link
							href="/plugins"
							className="bg-ink text-white px-[22px] py-[13px] text-[14px] font-medium rounded-lg flex items-center gap-2 no-underline"
						>
							Browse plugins <ArrowRight />
						</Link>
						<Link
							href="/about"
							className="bg-transparent text-ink border border-line px-[22px] py-[13px] text-[14px] font-medium rounded-lg no-underline"
						>
							About the studio
						</Link>
					</div>
				</div>
			</section>

			<SectionDivider label="Live now" />

			{/* ── FEATURED PLUGIN ─────────────────────────────────── */}
			<Link
				href={`/plugins/${featured.slug}`}
				className="grid grid-cols-[1fr_320px] gap-12 bg-surface border border-line rounded-2xl p-12 mb-[88px] no-underline hover:border-amber/30 transition-colors"
			>
				<div>
					<div className="flex items-center gap-3 mb-4">
						<div
							className="w-11 h-11 rounded-[10px] flex items-center justify-center"
							style={{ background: featured.bg }}
						>
							<ClockIcon color={featured.color} />
						</div>
						<span className="font-arabic text-[22px] text-faint">
							{featured.arabic}
						</span>
					</div>
					<h2 className="font-display text-[36px] text-ink m-0 mb-2 font-normal tracking-tight">
						{featured.name}
					</h2>
					<p className="text-[16px] text-muted leading-relaxed m-0 mb-7 max-w-[460px]">
						{featured.description}
					</p>
					<div className="flex gap-2.5 flex-wrap mb-7">
						{featured.tags.map((t) => (
							<span key={t} className="tag">{t}</span>
						))}
					</div>
					<div
						className="flex items-center gap-2 text-[13px] font-medium"
						style={{ color: featured.color }}
					>
						View plugin <ArrowRight />
					</div>
				</div>
				<div className="bg-paper rounded-xl p-6 border border-line">
					<div className="text-[11px] tracking-[0.08em] uppercase text-faint font-medium mb-3.5">
						At a glance
					</div>
					{[
						["Version",      featured.version!],
						["Status",       "Live"],
						["Size",         "< 25 KB"],
						["License",      "GPL-2.0"],
						["Requires WP",  featured.requires!.wp],
						["Requires PHP", featured.requires!.php],
					].map(([k, v]) => (
						<div
							key={k}
							className="flex justify-between py-2 border-b border-lineSoft text-[13px] last:border-b-0"
						>
							<span className="text-muted">{k}</span>
							<span className="text-ink font-mono text-[12px]">{v}</span>
						</div>
					))}
				</div>
			</Link>

			<SectionDivider label="Coming next" />

			{/* ── COMING SOON GRID ────────────────────────────────── */}
			<section className="grid grid-cols-3 gap-4 mb-24">
				{coming.map((p) => (
					<PluginCard key={p.slug} plugin={p} variant="compact" />
				))}
			</section>

			<SectionDivider label="Why Idara" />

			{/* ── PHILOSOPHY ──────────────────────────────────────── */}
			<section className="grid grid-cols-3 gap-8 mb-16">
				{[
					{
						title: "One thing, done well",
						body: "Every Idara plugin does exactly one thing. No 40-block suites. No bundled features you'll never use. Smaller plugins, faster sites.",
					},
					{
						title: "FSE-native",
						body: "Built for block themes from day one. Works in templates, template parts, post meta sections. Inherits theme.json colors and typography.",
					},
					{
						title: "Honest defaults",
						body: "No tracking. No external requests. No telemetry. GPL-2.0-or-later. The source is the source — there's no premium upgrade waiting behind a paywall.",
					},
				].map((p) => (
					<div key={p.title}>
						<h4 className="font-display text-[19px] text-ink m-0 mb-2.5 font-medium">
							{p.title}
						</h4>
						<p className="text-[14px] text-muted leading-relaxed m-0">
							{p.body}
						</p>
					</div>
				))}
			</section>
		</div>
	);
}
