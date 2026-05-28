"use client";

import { useState } from "react";
import type { Plugin, PluginStatus } from "@/types/plugin";
import { PluginCard } from "@/components/plugin-card";

type Filter = "all" | PluginStatus;

const FILTERS: { key: Filter; label: string }[] = [
	{ key: "all",  label: "All plugins" },
	{ key: "live", label: "Live" },
	{ key: "soon", label: "Coming soon" },
];

export function PluginsClient({ plugins }: { plugins: Plugin[] }) {
	const [filter, setFilter] = useState<Filter>("all");
	const filtered = filter === "all" ? plugins : plugins.filter((p) => p.status === filter);

	return (
		<div className="max-w-container mx-auto px-8 pt-16">
			{/* Header */}
			<div className="mb-10">
				<span className="text-[11px] tracking-[0.12em] uppercase text-faint font-medium">
					Plugins
				</span>
				<h1 className="font-display text-[48px] text-ink m-0 mt-2 mb-4 font-normal tracking-tight">
					The studio catalogue
				</h1>
				<p className="text-[16px] text-muted leading-relaxed max-w-[580px] m-0">
					Every plugin shipped by the studio. Each one is single-purpose,
					performance-conscious, and FSE-ready.
				</p>
			</div>

			{/* Filter row */}
			<div className="flex gap-2 mb-8 pb-6 border-b border-line items-center">
				{FILTERS.map((f) => (
					<button
						key={f.key}
						onClick={() => setFilter(f.key)}
						className={`px-4 py-[7px] text-[13px] rounded-lg border transition-colors ${
							filter === f.key
								? "border-ink bg-ink text-white font-medium"
								: "border-line bg-surface text-muted font-normal hover:border-faint"
						}`}
					>
						{f.label}
					</button>
				))}
				<div className="flex-1" />
				<span className="text-[12px] text-faint font-mono">
					{filtered.length} {filtered.length === 1 ? "plugin" : "plugins"}
				</span>
			</div>

			{/* Grid */}
			<div className="grid grid-cols-2 gap-5">
				{filtered.map((p) => (
					<PluginCard key={p.slug} plugin={p} />
				))}
			</div>
		</div>
	);
}
