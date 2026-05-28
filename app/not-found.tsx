import Link from "next/link";

export default function NotFound() {
	return (
		<div className="max-w-[600px] mx-auto px-8 py-32 text-center">
			<span className="font-mono text-[12px] tracking-[0.12em] uppercase text-faint">
				404 · Page not found
			</span>
			<h1 className="font-display text-[44px] text-ink m-0 mt-3 mb-4 font-normal tracking-tight">
				This page doesn&rsquo;t exist.
			</h1>
			<p className="text-[16px] text-muted leading-relaxed m-0 mb-8">
				The page you&rsquo;re looking for has moved or never existed.
			</p>
			<Link
				href="/"
				className="inline-block bg-ink text-white px-5 py-2.5 text-[14px] font-medium rounded-lg no-underline"
			>
				Back to studio
			</Link>
		</div>
	);
}
