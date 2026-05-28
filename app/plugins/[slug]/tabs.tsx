"use client";

import { useState } from "react";
import type { Plugin } from "@/types/plugin";
import { ClockIcon } from "@/components/icons";

type TabKey = "overview" | "settings" | "installation" | "changelog";

const TABS: { key: TabKey; label: string }[] = [
	{ key: "overview",     label: "Overview" },
	{ key: "settings",     label: "Settings" },
	{ key: "installation", label: "Installation" },
	{ key: "changelog",    label: "Changelog" },
];

export function PluginDetailTabs({ plugin }: { plugin: Plugin }) {
	const [tab, setTab] = useState<TabKey>("overview");

	return (
		<>
			{/* Tab strip */}
			<div className="flex border-b border-line mb-7">
				{TABS.map((t) => {
					const active = tab === t.key;
					return (
						<button
							key={t.key}
							onClick={() => setTab(t.key)}
							className={`px-5 py-2.5 text-[13.5px] cursor-pointer bg-transparent border-none -mb-px ${
								active
									? "font-medium text-ink border-b-2 border-amber"
									: "font-normal text-muted border-b-2 border-transparent hover:text-ink"
							}`}
						>
							{t.label}
						</button>
					);
				})}
			</div>

			{tab === "overview"     && <Overview     plugin={plugin} />}
			{tab === "settings"     && <SettingsTab  plugin={plugin} />}
			{tab === "installation" && <Installation plugin={plugin} />}
			{tab === "changelog"    && <Changelog    plugin={plugin} />}
		</>
	);
}

/* ── Tab content ───────────────────────────────────────────────────────── */

function Overview({ plugin }: { plugin: Plugin }) {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
			<div>
				{/* Playground demo placeholder */}
				<div className="bg-ink rounded-xl overflow-hidden mb-7">
					<div className="bg-[#1a1a1f] px-4 py-2.5 flex items-center gap-2">
						<div className="flex gap-1.5">
							<div className="w-2.5 h-2.5 rounded-full bg-[#3a3a3f]" />
							<div className="w-2.5 h-2.5 rounded-full bg-[#3a3a3f]" />
							<div className="w-2.5 h-2.5 rounded-full bg-[#3a3a3f]" />
						</div>
						<span className="text-[11px] text-faint ml-2 font-mono">
							wordpress-playground.local — {plugin.fullName}
						</span>
					</div>
					<div className="h-72 flex flex-col items-center justify-center gap-3.5 p-10">
						<div
							className="w-13 h-13 rounded-xl flex items-center justify-center"
							style={{ background: plugin.bg }}
						>
							<ClockIcon color={plugin.color} size={28} />
						</div>
						<p className="text-[14px] text-[#a8a8b0] m-0 text-center max-w-[320px] leading-relaxed">
							A live WordPress instance with this plugin pre-installed. Try the
							block in a real editor — no installation required.
						</p>
						<button
							type="button"
							className="text-white border-none px-4.5 py-2 text-[13px] rounded-md cursor-pointer font-medium"
							style={{ background: plugin.color }}
						>
							Launch Playground ▶
						</button>
					</div>
				</div>

				{/* Features list */}
				<div className="bg-surface border border-line rounded-xl p-7">
					<h3 className="font-display text-[19px] text-ink m-0 mb-4.5 font-medium">
						What&apos;s included — all free
					</h3>
					<div className="grid gap-3">
						{plugin.features?.map((f) => (
							<div key={f} className="flex items-start gap-3">
								<span
									className="text-[13px] mt-0.5 flex-shrink-0"
									style={{ color: plugin.color }}
								>
									✓
								</span>
								<span className="text-[14px] text-muted leading-relaxed">
									{f}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>

			<aside className="flex flex-col gap-4">
				<div className="bg-surface border border-line rounded-xl px-5 py-4">
					<h4 className="text-[11px] tracking-[0.08em] uppercase text-faint font-medium m-0 mb-3.5">
						Plugin details
					</h4>
					{[
						["Version",        plugin.version!],
						["Requires WP",    plugin.requires!.wp],
						["Requires PHP",   plugin.requires!.php],
						["License",        "GPL-2.0"],
						["Last updated",   "May 2026"],
						["Active installs", "New"],
					].map(([k, v]) => (
						<div
							key={k}
							className="flex justify-between py-1.5 border-b border-lineSoft text-[12.5px] last:border-b-0"
						>
							<span className="text-muted">{k}</span>
							<span className="text-ink font-mono text-[11.5px]">{v}</span>
						</div>
					))}
				</div>
				<div
					className="rounded-xl px-5 py-4 border"
					style={{ background: plugin.bg, borderColor: plugin.color + "22" }}
				>
					<p className="text-[13px] text-muted m-0 mb-2 leading-relaxed">
						Found a bug or have a feature idea?
					</p>
					<a
						href="https://github.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[13px] font-medium no-underline"
						style={{ color: plugin.color }}
					>
						Open an issue on GitHub →
					</a>
				</div>
			</aside>
		</div>
	);
}

function SettingsTab({ plugin }: { plugin: Plugin }) {
	return (
		<div className="bg-surface border border-line rounded-xl p-8 max-w-[760px]">
			<h3 className="font-display text-[22px] text-ink m-0 mb-2 font-medium">
				All available settings
			</h3>
			<p className="text-[14px] text-muted m-0 mb-7">
				Configure the block from the editor sidebar after inserting it on a
				post or page.
			</p>
			{plugin.settings?.map((s, i) => (
				<div
					key={s.label}
					className={`grid grid-cols-[160px_1fr] gap-5 py-3.5 border-b border-line ${
						i === 0 ? "border-t" : ""
					}`}
				>
					<span className="text-[13px] font-medium text-ink">{s.label}</span>
					<span className="text-[13px] text-muted font-mono">{s.value}</span>
				</div>
			))}
		</div>
	);
}

function Installation({ plugin }: { plugin: Plugin }) {
	const steps = [
		{
			n: 1,
			t: "Install from WordPress.org",
			b: `Search "${plugin.fullName}" in Plugins → Add New, or upload the .zip from the WordPress.org listing.`,
		},
		{
			n: 2,
			t: "Activate",
			b: "Click Activate. No settings page needed — the block is immediately available in the block inserter.",
		},
		{
			n: 3,
			t: "Insert the block",
			b: `Open any post or page → click + → search ${plugin.name} → place it below the post title or inside a template part.`,
		},
		{
			n: 4,
			t: "Configure",
			b: "Use the editor sidebar to adjust icon, format, WPM, and the optional progress bar.",
		},
	];

	return (
		<div className="bg-surface border border-line rounded-xl p-8 max-w-[760px]">
			{steps.map((s) => (
				<div key={s.n} className="flex gap-5 mb-6 last:mb-0">
					<div
						className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[13px] font-medium flex-shrink-0 font-mono"
						style={{
							background: plugin.bg,
							borderColor: plugin.color + "33",
							color: plugin.color,
						}}
					>
						{s.n}
					</div>
					<div>
						<h4 className="text-[15px] text-ink m-0 mb-1 font-medium">
							{s.t}
						</h4>
						<p className="text-[13.5px] text-muted leading-relaxed m-0">
							{s.b}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

function Changelog({ plugin }: { plugin: Plugin }) {
	return (
		<div className="bg-surface border border-line rounded-xl p-8 max-w-[760px]">
			{plugin.changelog?.map((entry, idx) => (
				<div
					key={entry.version}
					className={`flex gap-6 ${idx < (plugin.changelog?.length ?? 0) - 1 ? "mb-8" : ""}`}
				>
					<div className="relative w-2 flex-shrink-0">
						<div
							className="absolute top-1 left-0 w-3 h-3 rounded-full"
							style={{ background: plugin.color }}
						/>
						{idx < (plugin.changelog?.length ?? 0) - 1 && (
							<div
								className="absolute top-5 left-[5px] bottom-0 w-0.5"
								style={{ background: plugin.color + "33" }}
							/>
						)}
					</div>
					<div className="pb-1">
						<div className="flex items-baseline gap-3 mb-3">
							<span className="font-mono text-[15px] font-medium text-ink">
								v{entry.version}
							</span>
							<span className="text-[12px] text-faint">{entry.date}</span>
						</div>
						<ul className="m-0 pl-4.5 text-[14px] text-muted leading-loose">
							{entry.notes.map((n) => (
								<li key={n}>{n}</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
}
