import type { PluginIconKey } from "@/types/plugin";

interface IconProps {
	color?: string;
	size?: number;
	className?: string;
}

/** 8-pointed star — Islamic geometric motif used as section divider */
export function StarEight({ size = 14, className = "" }: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
			className={className}
		>
			<path
				d="M12 1l2.2 6.8h7.1l-5.7 4.2 2.2 6.8L12 14.6l-5.8 4.2 2.2-6.8L2.7 7.8h7.1L12 1z"
				opacity="0.85"
				transform="rotate(22.5 12 12)"
			/>
			<path
				d="M12 1l2.2 6.8h7.1l-5.7 4.2 2.2 6.8L12 14.6l-5.8 4.2 2.2-6.8L2.7 7.8h7.1L12 1z"
				opacity="0.85"
			/>
		</svg>
	);
}

export function ArrowRight({ size = 14, className = "" }: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<line x1="5" y1="12" x2="19" y2="12" />
			<polyline points="12 5 19 12 12 19" />
		</svg>
	);
}

/* ── Plugin category icons ─────────────────────────────────────────────── */

export function ClockIcon({ color = "currentColor", size = 22 }: IconProps) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</svg>
	);
}

export function StoreIcon({ color = "currentColor", size = 22 }: IconProps) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M3 9l1.5-5h15L21 9M4 9v11h16V9M9 22V12h6v10" />
		</svg>
	);
}

export function NoticeIcon({ color = "currentColor", size = 22 }: IconProps) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<circle cx="12" cy="12" r="10" />
			<line x1="12" y1="8" x2="12" y2="12" />
			<line x1="12" y1="16" x2="12.01" y2="16" />
		</svg>
	);
}

export function UserIcon({ color = "currentColor", size = 22 }: IconProps) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>
	);
}

/** Render the correct icon for a given plugin icon key */
export function PluginIcon({
	icon,
	color,
	size = 22,
}: {
	icon: PluginIconKey;
	color: string;
	size?: number;
}) {
	const props = { color, size };
	switch (icon) {
		case "clock":  return <ClockIcon  {...props} />;
		case "store":  return <StoreIcon  {...props} />;
		case "notice": return <NoticeIcon {...props} />;
		case "user":   return <UserIcon   {...props} />;
		default:       return <ClockIcon  {...props} />;
	}
}
