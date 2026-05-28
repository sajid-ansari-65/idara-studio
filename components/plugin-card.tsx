import Link from "next/link";
import type { Plugin } from "@/types/plugin";
import { PluginIcon } from "@/components/icons";

interface PluginCardProps {
	plugin: Plugin;
	/** Compact card for the home page "Coming soon" grid */
	variant?: "default" | "compact";
}

export function PluginCard({ plugin, variant = "default" }: PluginCardProps) {
	if (variant === "compact") {
		return (
			<Link
				href={`/plugins/${plugin.slug}`}
				className="block bg-surface border border-line rounded-xl p-6 no-underline hover:border-amber/30 transition-colors"
			>
				<div className="flex justify-between items-start mb-4">
					<div
						className="w-[38px] h-[38px] rounded-lg flex items-center justify-center"
						style={{ background: plugin.bg }}
					>
						<PluginIcon icon={plugin.icon} color={plugin.color} size={20} />
					</div>
					{plugin.eta && (
						<span className="text-[10px] tracking-[0.08em] uppercase px-2 py-[3px] rounded bg-[#f4f0e8] text-muted font-medium">
							{plugin.eta}
						</span>
					)}
				</div>
				<div className="font-arabic text-[15px] text-faint mb-2">
					{plugin.arabic}
				</div>
				<h3 className="font-display text-[22px] text-ink m-0 mb-2 font-normal">
					{plugin.name}
				</h3>
				<p className="text-[13px] text-muted leading-relaxed m-0">
					{plugin.tagline}
				</p>
			</Link>
		);
	}

	return (
		<Link
			href={`/plugins/${plugin.slug}`}
			className="block bg-surface border border-line rounded-2xl p-7 no-underline relative hover:border-amber/30 transition-colors"
		>
			<div
				className="absolute top-0 left-0 w-[60px] h-[2px] rounded-tl-2xl"
				style={{ background: plugin.color }}
			/>
			<div className="flex items-start gap-4 mb-5">
				<div
					className="w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0"
					style={{ background: plugin.bg }}
				>
					<PluginIcon icon={plugin.icon} color={plugin.color} />
				</div>
				<div className="flex-1">
					<div className="flex items-center gap-2.5 mb-1">
						<h3 className="font-display text-[22px] text-ink m-0 font-medium">
							{plugin.name}
						</h3>
						<span className={plugin.status === "live" ? "badge-live" : "badge-soon"}>
							{plugin.status === "live" ? "Live" : "Soon"}
						</span>
					</div>
					<p className="font-arabic text-[15px] text-faint m-0">
						{plugin.arabic}
					</p>
				</div>
			</div>
			<p className="text-[14px] text-muted leading-relaxed m-0 mb-4">
				{plugin.tagline}
			</p>
			<div className="flex flex-wrap gap-1.5">
				{plugin.tags.map((t) => (
					<span key={t} className="tag">{t}</span>
				))}
			</div>
		</Link>
	);
}
