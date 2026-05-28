"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

const NAV_ITEMS = [
	{ href: "/",        label: "Studio"  },
	{ href: "/plugins", label: "Plugins" },
	{ href: "/about",   label: "About"   },
	{ href: "/docs",    label: "Docs"    },
];

function isActive(pathname: string, href: string): boolean {
	if (href === "/") return pathname === "/";
	return pathname === href || pathname.startsWith(href + "/");
}

export function Nav() {
	const pathname = usePathname();

	return (
		<nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-line">
			<div className="max-w-container mx-auto px-8 flex items-center h-16 gap-9">
				<Logo small />
				<div className="flex gap-1 flex-1">
					{NAV_ITEMS.map((item) => {
						const active = isActive(pathname, item.href);
						return (
							<Link
								key={item.href}
								href={item.href}
								className={`relative px-3.5 py-1.5 text-[13.5px] rounded-md no-underline transition-colors ${
									active
										? "text-ink font-medium"
										: "text-faint hover:text-muted"
								}`}
							>
								{item.label}
								{active && (
									<span className="absolute -bottom-[22px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber" />
								)}
							</Link>
						);
					})}
				</div>
				<a
					href="https://wordpress.org/plugins/idara-reading-time/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-xs font-medium text-ink no-underline border border-line px-3.5 py-1.5 rounded-md bg-surface flex items-center gap-1.5 hover:border-amber/40 transition-colors"
				>
					WordPress.org <span aria-hidden="true">↗</span>
				</a>
			</div>
		</nav>
	);
}
