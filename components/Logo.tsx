import Link from "next/link";
import { IdaraMark } from "./icons";

export function Logo({ small = false }: { small?: boolean }) {
	return (
		<Link
			href="/"
			className="group flex items-center gap-2.5 no-underline"
			aria-label="Idara — home"
		>
			<IdaraMark
				size={small ? 22 : 26}
				className="transition-transform duration-500 ease-out group-hover:rotate-[22.5deg]"
			/>
			<span className="flex items-baseline gap-1.5">
				<span
					className={`font-display font-medium text-ink tracking-tight ${
						small ? "text-[19px]" : "text-[22px]"
					}`}
				>
					Idara
				</span>
				<span
					className={`font-arabic text-faint ${small ? "text-[12px]" : "text-[13px]"}`}
					aria-hidden="true"
				>
					إدارة
				</span>
			</span>
		</Link>
	);
}
