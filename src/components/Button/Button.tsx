import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/** Button content */
	children: ReactNode;
	/** Visual style variant */
	variant?: ButtonVariant;
	/** Size of the button */
	size?: ButtonSize;
	/** Full width button */
	fullWidth?: boolean;
	/** Loading state */
	loading?: boolean;
	/** Custom CSS class */
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	size = 'medium',
	fullWidth = false,
	loading = false,
	className = '',
	disabled,
	...props
}) => {
	const classes = [
		'btn',
		`btn--${variant}`,
		`btn--${size}`,
		fullWidth && 'btn--full-width',
		loading && 'btn--loading',
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<button className={classes} disabled={disabled || loading} {...props}>
			{loading ? <span className="btn__spinner" /> : children}
		</button>
	);
};

export default Button;
