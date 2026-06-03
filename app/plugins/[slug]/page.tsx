import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPluginSlugs, getPlugin } from "@/lib/plugins";
import type { Plugin } from "@/types/plugin";
import { PluginIcon, ClockIcon } from "@/components/icons";
import { PluginDetailTabs } from "./tabs";

/* ── Static generation ─────────────────────────────────────────────────── */

export function generateStaticParams() {
	return getAllPluginSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const plugin = getPlugin(slug);
	if (!plugin) return { title: "Plugin not found" };
	return {
		title: plugin.name,
		description: plugin.tagline,
	};
}

/* ── Page ──────────────────────────────────────────────────────────────── */

export default async function PluginDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const plugin = getPlugin(slug);
	if (!plugin) notFound();

	if (plugin.status === "soon") {
		return <ComingSoonView plugin={plugin} />;
	}

	return <LivePluginView plugin={plugin} />;
}

/* ── Coming soon variant ───────────────────────────────────────────────── */

function ComingSoonView({ plugin }: { plugin: Plugin }) {
	return (
		<div className="max-w-[760px] mx-auto px-8 pt-20 text-center">
			<Link
				href="/plugins"
				className="inline-block border border-line rounded-lg px-3.5 py-1.5 text-[13px] text-muted no-underline mb-12 hover:border-faint transition-colors"
			>
				← Plugins
			</Link>
			<div
				className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
				style={{ background: plugin.bg }}
			>
				<PluginIcon icon={plugin.icon} color={plugin.color} size={32} />
			</div>
			<div className="font-arabic text-[24px] text-faint mb-3">
				{plugin.arabic}
			</div>
			<h1 className="font-display text-[44px] text-ink m-0 mb-4 font-normal tracking-tight">
				{plugin.name}
			</h1>
			<p className="text-[17px] text-muted leading-relaxed m-0 mb-8">
				{plugin.description}
			</p>
			<div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-soft border border-amber-line rounded-lg text-[13px] text-amber-800 font-medium">
				Expected {plugin.eta}
			</div>
		</div>
	);
}

/* ── Live plugin variant ───────────────────────────────────────────────── */

function LivePluginView({ plugin }: { plugin: Plugin }) {
	return (
		<div className="max-w-container mx-auto px-8 pt-8">
			{/* Breadcrumb */}
			<div className="flex items-center gap-2.5 mb-8">
				<Link
					href="/plugins"
					className="border border-line rounded-lg px-3 py-1 text-[13px] text-muted no-underline hover:border-faint transition-colors"
				>
					← Plugins
				</Link>
				<span className="text-line">/</span>
				<span className="text-[13px] text-faint">{plugin.name}</span>
			</div>

			{/* Hero */}
			<section className="bg-surface border border-line rounded-2xl px-11 py-10 mb-8 relative overflow-hidden">
				<div
					className="absolute top-0 right-0 w-60 h-60 rounded-full opacity-35"
					style={{ background: plugin.bg, transform: "translate(80px, -80px)" }}
					aria-hidden="true"
				/>
				<div className="relative flex items-start gap-6">
					<div
						className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
						style={{ background: plugin.bg }}
					>
						<PluginIcon icon={plugin.icon} color={plugin.color} size={28} />
					</div>
					<div className="flex-1">
						<div className="font-arabic text-[18px] text-faint mb-1.5">
							{plugin.arabic}
						</div>
						<div className="flex items-center gap-3 mb-3.5">
							<h1 className="font-display text-[40px] text-ink m-0 font-normal tracking-tight">
								{plugin.name}
							</h1>
							<span className="badge-live">Live · v{plugin.version}</span>
						</div>
						<p className="text-[16px] text-muted leading-relaxed m-0 mb-6 max-w-[640px]">
							{plugin.description}
						</p>
						<div className="flex gap-2.5">
							<a
								href={plugin.wporgUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-ink text-white px-[22px] py-[11px] text-[14px] font-medium rounded-lg no-underline inline-flex items-center gap-2"
							>
								Download from WordPress.org ↓
							</a>
						</div>
					</div>
				</div>
			</section>

			<PluginDetailTabs plugin={plugin} />
		</div>
	);
}
