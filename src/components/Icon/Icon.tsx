import React from 'react';
import './Icon.scss';

export interface IconProps {
	/**
	 * Icon name (without the 'icon-' prefix)
	 * @example 'circle-checked', 'home', 'user'
	 */
	name: string;

	/**
	 * Rendering type: 'font' for CSS-based icons, 'svg' for SVG symbols
	 * @default 'font'
	 */
	type?: 'font' | 'svg';

	/**
	 * Icon size in pixels (without 'px' suffix)
	 * @example 16, 24, 32
	 */
	size?: number | string;

	/**
	 * Icon color (hex code without '#' prefix, or any valid CSS color)
	 * @example 'f00', 'ff0000', 'red', '#ff0000'
	 */
	color?: string;

	/**
	 * Additional CSS class name
	 */
	className?: string;

	/**
	 * Inline styles
	 */
	style?: React.CSSProperties;

	/**
	 * ARIA label for accessibility
	 */
	ariaLabel?: string;

	/**
	 * Click handler
	 */
	onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

/**
 * Icon component for rendering icon fonts from Iconfont.cn or Icomoon.io
 *
 * Supports two rendering modes:
 * - `font`: Uses CSS class-based icon fonts (requires iconfont.css)
 * - `svg`: Uses SVG symbol references (requires iconfont.js)
 *
 * @example
 * ```tsx
 * // Font mode (default)
 * <Icon name="home" size={24} color="primary" />
 *
 * // SVG mode
 * <Icon type="svg" name="user" size={20} color="#ff0000" />
 * ```
 */
const Icon: React.FC<IconProps> = ({
	name,
	type = 'font',
	size,
	color,
	className = '',
	style = {},
	ariaLabel,
	onClick,
}) => {
	// Normalize color to include # prefix if it looks like a hex color
	const normalizedColor = React.useMemo(() => {
		if (!color) return undefined;

		// If it's already a valid CSS color (contains # or is a named color)
		if (color.startsWith('#') || color.startsWith('rgb') || /^[a-z]+$/i.test(color)) {
			return color;
		}

		// Assume it's a hex code without #
		return `#${color}`;
	}, [color]);

	// Normalize size to include px suffix
	const normalizedSize = React.useMemo(() => {
		if (!size) return undefined;
		return typeof size === 'number' ? `${size}px` : size;
	}, [size]);

	const iconStyle: React.CSSProperties = {
		...style,
		...(normalizedColor && { color: normalizedColor }),
		...(normalizedSize && { fontSize: normalizedSize }),
	};

	const classes = ['icon-wrapper', className].filter(Boolean).join(' ');

	if (type === 'svg') {
		return (
			<span
				className={classes}
				onClick={onClick}
				role={onClick ? 'button' : undefined}
				tabIndex={onClick ? 0 : undefined}
				aria-label={ariaLabel || name}
			>
				<svg className="icon-svg" style={iconStyle} aria-hidden={!ariaLabel}>
					<use xlinkHref={`#icon-${name}`} />
				</svg>
			</span>
		);
	}

	return (
		<span
			className={`${classes} iconfont icon-${name}`}
			style={iconStyle}
			onClick={onClick}
			role={onClick ? 'button' : undefined}
			tabIndex={onClick ? 0 : undefined}
			aria-label={ariaLabel || name}
		/>
	);
};

export default Icon;
