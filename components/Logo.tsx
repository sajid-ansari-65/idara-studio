import Link from "next/link";

export function Logo({ small = false }: { small?: boolean }) {
	return (
		<Link href="/" className="flex items-baseline gap-2 no-underline">
			<span
				className={`font-display font-medium text-ink tracking-tight ${
					small ? "text-[19px]" : "text-[22px]"
				}`}
			>
				Idara
			</span>
			<span
				className={`font-display text-amber leading-none ${
					small ? "text-[19px]" : "text-[22px]"
				}`}
			>
				.
			</span>
			<span
				className={`font-arabic text-faint ml-1 ${
					small ? "text-[13px]" : "text-[14px]"
				}`}
				aria-hidden="true"
			>
				إدارة
			</span>
		</Link>
	);
}
