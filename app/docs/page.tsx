export const metadata = {
	title: "Documentation",
	description: "Documentation for Idara plugins. Coming soon.",
};

export default function DocsPage() {
	return (
		<div className="max-w-[760px] mx-auto px-8 py-32 text-center">
			<span className="text-[11px] tracking-[0.12em] uppercase text-faint font-medium">
				Documentation
			</span>
			<h1 className="font-display text-[44px] text-ink m-0 mt-3 mb-4 font-normal tracking-tight">
				Docs coming soon
			</h1>
			<p className="text-[16px] text-muted leading-relaxed max-w-[480px] mx-auto m-0">
				Each plugin will have its own detailed documentation here — block
				attributes, hooks, filter reference, and FAQs.
			</p>
		</div>
	);
}
