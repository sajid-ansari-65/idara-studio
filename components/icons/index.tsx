import type { PluginIconKey } from "@/types/plugin";

interface IconProps {
	color?: string;
	size?: number;
	className?: string;
}

/* ── Brand logomark ────────────────────────────────────────────────────── */

/** Geometrically exact 8-pointed khatim (two superimposed squares, r_inner/r_outer = 0.7654). */
const MARK_STAR =
	"M16 1 L20.394 5.393 L26.607 5.393 L26.607 11.606 L31 16 L26.607 20.394 L26.607 26.607 L20.394 26.607 L16 31 L11.606 26.607 L5.393 26.607 L5.393 20.394 L1 16 L5.393 11.606 L5.393 5.393 L11.606 5.393Z";
/** Eight facet rays from centre to each outer tip — reads as radiance / a cut gem. */
const MARK_FACETS =
	"M16 16L16 1M16 16L26.607 5.393M16 16L31 16M16 16L26.607 26.607M16 16L16 31M16 16L5.393 26.607M16 16L1 16M16 16L5.393 5.393";

/**
 * Idara logomark — the "lit star".
 * Brand mode (default): amber gradient body. Pass `color` for a solid, per-plugin
 * tint (teal/green/pink). `id` must be unique if several gradient marks share a page.
 */
export function IdaraMark({
	size = 28,
	color,
	id = "idara-mark",
	className = "",
}: {
	size?: number;
	color?: string;
	id?: string;
	className?: string;
}) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 32 32"
			role="img"
			aria-label="Idara"
			className={className}
		>
			{!color && (
				<defs>
					<linearGradient id={id} x1="6" y1="3" x2="26" y2="29" gradientUnits="userSpaceOnUse">
						<stop offset="0" stopColor="#d97706" />
						<stop offset="1" stopColor="#a3450a" />
					</linearGradient>
				</defs>
			)}
			<path d={MARK_STAR} fill={color ?? `url(#${id})`} />
			<path
				d={MARK_FACETS}
				fill="none"
				stroke="#fde68a"
				strokeWidth="0.5"
				strokeLinecap="round"
				opacity={color ? 0.3 : 0.45}
			/>
			<circle cx="16" cy="16" r="2.3" fill="#fef3c7" />
		</svg>
	);
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
