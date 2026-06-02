import { SectionDivider } from "@/components/chrome";

export const metadata = {
	title: "About",
	description:
		"Idara is a small studio crafting careful, single-purpose Gutenberg blocks. Read about the philosophy and the maker.",
};

const PRINCIPLES = [
	{
		n: "01",
		t: "One purpose, one plugin",
		b: "Each plugin solves exactly one problem. The boundary is intentional — it's what keeps things small.",
	},
	{
		n: "02",
		t: "Performance by default",
		b: "CSS and JS load only where used. No global enqueues. No jQuery. The progress bar script is under one kilobyte.",
	},
	{
		n: "03",
		t: "Honest open source",
		b: "Everything on WordPress.org is GPL-2.0-or-later, and the free core is genuinely useful — never a crippled trial. If a Pro tier ever ships, it extends the free plugin rather than holding it hostage.",
	},
	{
		n: "04",
		t: "No telemetry, ever",
		b: "Nothing phones home. No analytics SDK, no usage metrics, no email collection. What you install is what runs.",
	},
];

export default function AboutPage() {
	return (
		<div className="max-w-[760px] mx-auto px-8 pt-16">
			<span className="text-[11px] tracking-[0.12em] uppercase text-faint font-medium">
				About the studio
			</span>
			<h1 className="font-display text-[52px] text-ink m-0 mt-3 mb-6 font-normal tracking-tightest leading-[1.05]">
				A studio in the{" "}
				<span className="italic text-amber">classical</span> sense.
			</h1>

			<p className="text-[18px] text-muted leading-loose m-0 mb-6">
				Idara{" "}
				<span className="font-arabic text-[22px] text-ink" lang="ar">
					(إدارة)
				</span>{" "}
				is an Arabic word that translates to &ldquo;studio&rdquo; or
				&ldquo;administration.&rdquo; It&rsquo;s the kind of word used for a
				place where craftsmen work together with discipline, where the focus is
				the work itself.
			</p>
			<p className="text-[16px] text-muted leading-loose m-0 mb-6">
				This studio builds Gutenberg blocks for WordPress. Not 40 at a time.
				One at a time, considered carefully, shipped with the same attention
				to detail as the second one, and the tenth one.
			</p>
			<p className="text-[16px] text-muted leading-loose m-0 mb-12">
				The WordPress plugin economy is full of suite plugins that ship dozens
				of blocks alongside upgrade nags, tracking scripts, and bundled
				features that slow your editor down. Idara takes the other path:
				smaller plugins, narrower scope, honest behaviour. If a block
				isn&rsquo;t on your page, none of its code loads. There is no premium
				tier. There is no analytics package phoning home.
			</p>

			<SectionDivider label="The maker" />

			<div className="bg-surface border border-line rounded-2xl p-8 mb-12">
				<div className="flex gap-6 items-start">
					<div
						className="w-18 h-18 rounded-full flex items-center justify-center text-[24px] font-display font-medium flex-shrink-0"
						style={{
							background: "linear-gradient(135deg, #fef3c7, #fde68a)",
							color: "#92400e",
							width: "72px",
							height: "72px",
						}}
					>
						SA
					</div>
					<div>
						<h3 className="font-display text-[22px] text-ink m-0 mb-1 font-medium">
							Mohammad Sajid Ansari
						</h3>
						<p className="text-[13px] text-faint m-0 mb-3.5 font-mono">
							Senior Fullstack Developer · Surat, India
						</p>
						<p className="text-[14.5px] text-muted leading-relaxed m-0">
							Ten years building WordPress at scale — agency work, enterprise
							platforms, headless Next.js stacks. Idara is where I take the
							opposite approach: small, careful, finished.
						</p>
					</div>
				</div>
			</div>

			<SectionDivider label="Principles" />

			<div id="principles">
				{PRINCIPLES.map((p) => (
					<div
						key={p.n}
						className="flex gap-6 pt-6 border-t border-line first:border-t-0 first:pt-0 mt-6 first:mt-0"
					>
						<span className="font-mono text-[13px] text-amber font-medium flex-shrink-0 mt-0.5">
							{p.n}
						</span>
						<div>
							<h4 className="font-display text-[19px] text-ink m-0 mb-2 font-medium">
								{p.t}
							</h4>
							<p className="text-[14.5px] text-muted leading-loose m-0">
								{p.b}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
