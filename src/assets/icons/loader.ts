/**
 * Lazy-loadable icon font loaders
 * These allow users to only load icon assets when needed
 */

let fontLoaded = false;
let svgLoaded = false;

/**
 * Loads the icon font CSS (for type="font" icons)
 * Only loads once, subsequent calls are no-ops
 */
export const loadIconFont = (): void => {
	if (fontLoaded) return;

	// Dynamically import the CSS
	// @ts-ignore - Dynamic CSS import
	import('./iconfont.css');
	fontLoaded = true;
};

/**
 * Loads the SVG symbol definitions (for type="svg" icons)
 * Only loads once, subsequent calls are no-ops
 */
export const loadIconSvg = (): void => {
	if (svgLoaded) return;

	// Dynamically import the SVG symbols
	// @ts-ignore - Dynamic JS import
	import('./iconfont.js');
	svgLoaded = true;
};

/**
 * Preloads both font and SVG icons
 * Use this if you know you'll need both
 */
export const loadAllIcons = (): void => {
	loadIconFont();
	loadIconSvg();
};
