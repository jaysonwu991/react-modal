import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Icon from './Icon';

describe('Icon Component', () => {
	describe('Rendering', () => {
		it('should render with default props', () => {
			const { container } = render(<Icon name="home" />);
			const icon = container.querySelector('.iconfont.icon-home');
			expect(icon).toBeInTheDocument();
		});

		it('should render with custom className', () => {
			const { container } = render(<Icon name="home" className="custom-class" />);
			const icon = container.querySelector('.icon-wrapper');
			expect(icon).toHaveClass('custom-class');
		});

		it('should render with inline styles', () => {
			const { container } = render(<Icon name="home" style={{ margin: '10px' }} />);
			const icon = container.querySelector('.iconfont');
			expect(icon).toHaveStyle({ margin: '10px' });
		});
	});

	describe('Icon Name', () => {
		it('should apply correct icon class based on name', () => {
			const { container } = render(<Icon name="user" />);
			const icon = container.querySelector('.icon-user');
			expect(icon).toBeInTheDocument();
		});

		it('should handle icon names with hyphens', () => {
			const { container } = render(<Icon name="circle-checked" />);
			const icon = container.querySelector('.icon-circle-checked');
			expect(icon).toBeInTheDocument();
		});

		it('should handle icon names with underscores', () => {
			const { container } = render(<Icon name="user_profile" />);
			const icon = container.querySelector('.icon-user_profile');
			expect(icon).toBeInTheDocument();
		});
	});

	describe('Rendering Types', () => {
		it('should render font type by default', () => {
			const { container } = render(<Icon name="home" />);
			const icon = container.querySelector('.iconfont.icon-home');
			expect(icon).toBeInTheDocument();
			expect(container.querySelector('svg')).not.toBeInTheDocument();
		});

		it('should render font type explicitly', () => {
			const { container } = render(<Icon name="home" type="font" />);
			const icon = container.querySelector('.iconfont.icon-home');
			expect(icon).toBeInTheDocument();
		});

		it('should render SVG type', () => {
			const { container } = render(<Icon name="home" type="svg" />);
			const svg = container.querySelector('svg');
			const use = container.querySelector('use');
			expect(svg).toBeInTheDocument();
			expect(use).toBeInTheDocument();
		});

		it('should not have iconfont class in SVG mode', () => {
			const { container } = render(<Icon name="home" type="svg" />);
			expect(container.querySelector('.iconfont')).not.toBeInTheDocument();
		});
	});

	describe('Size Prop', () => {
		it('should apply size as number', () => {
			const { container } = render(<Icon name="home" size={24} />);
			const icon = container.querySelector('.iconfont');
			expect(icon).toHaveStyle({ fontSize: '24px' });
		});

		it('should apply size as string with px', () => {
			const { container } = render(<Icon name="home" size="32px" />);
			const icon = container.querySelector('.iconfont');
			expect(icon).toHaveStyle({ fontSize: '32px' });
		});

		it('should apply size as string with em', () => {
			const { container } = render(<Icon name="home" size="2em" />);
			const icon = container.querySelector('.iconfont');
			expect(icon).toHaveStyle({ fontSize: '2em' });
		});

		it('should apply size in SVG mode', () => {
			const { container } = render(<Icon name="home" type="svg" size={20} />);
			const svg = container.querySelector('svg');
			expect(svg).toHaveStyle({ fontSize: '20px' });
		});
	});

	describe('Color Prop', () => {
		it('should apply color with # prefix', () => {
			const { container } = render(<Icon name="home" color="#ff0000" />);
			const icon = container.querySelector('.iconfont');
			expect(icon).toHaveStyle({ color: '#ff0000' });
		});

		it('should add # prefix to hex color without it', () => {
			const { container } = render(<Icon name="home" color="ff0000" />);
			const icon = container.querySelector('.iconfont');
			expect(icon).toHaveStyle({ color: '#ff0000' });
		});

		it('should handle short hex colors', () => {
			const { container } = render(<Icon name="home" color="f00" />);
			const icon = container.querySelector('.iconfont');
			expect(icon).toHaveStyle({ color: '#f00' });
		});

		it('should handle rgb colors', () => {
			const { container } = render(<Icon name="home" color="rgb(255, 0, 0)" />);
			const icon = container.querySelector('.iconfont');
			expect(icon).toHaveStyle({ color: 'rgb(255, 0, 0)' });
		});

		it('should apply color in SVG mode', () => {
			const { container } = render(<Icon name="home" type="svg" color="#00ff00" />);
			const svg = container.querySelector('svg');
			expect(svg).toHaveStyle({ color: '#00ff00' });
		});
	});

	describe('Click Handler', () => {
		it('should call onClick when clicked', async () => {
			const handleClick = vi.fn();
			const user = userEvent.setup();
			const { container } = render(<Icon name="home" onClick={handleClick} />);
			const icon = container.querySelector('.iconfont');
			await user.click(icon!);
			expect(handleClick).toHaveBeenCalledTimes(1);
		});

		it('should have button role when onClick is provided', () => {
			const handleClick = vi.fn();
			const { container } = render(<Icon name="home" onClick={handleClick} />);
			const icon = container.querySelector('.iconfont');
			expect(icon).toHaveAttribute('role', 'button');
		});

		it('should have tabindex when onClick is provided', () => {
			const handleClick = vi.fn();
			const { container } = render(<Icon name="home" onClick={handleClick} />);
			const icon = container.querySelector('.iconfont');
			expect(icon).toHaveAttribute('tabindex', '0');
		});

		it('should not have button role when onClick is not provided', () => {
			const { container } = render(<Icon name="home" />);
			const icon = container.querySelector('.iconfont');
			expect(icon).not.toHaveAttribute('role');
		});

		it('should work with SVG type', async () => {
			const handleClick = vi.fn();
			const user = userEvent.setup();
			const { container } = render(<Icon name="home" type="svg" onClick={handleClick} />);
			const wrapper = container.querySelector('.icon-wrapper');
			await user.click(wrapper!);
			expect(handleClick).toHaveBeenCalledTimes(1);
		});
	});

	describe('Accessibility', () => {
		it('should have aria-label from ariaLabel prop', () => {
			const { container } = render(<Icon name="home" ariaLabel="Home Icon" />);
			const icon = container.querySelector('.iconfont');
			expect(icon).toHaveAttribute('aria-label', 'Home Icon');
		});

		it('should use icon name as aria-label when not provided', () => {
			const { container } = render(<Icon name="home" />);
			const icon = container.querySelector('.iconfont');
			expect(icon).toHaveAttribute('aria-label', 'home');
		});

		it('should have aria-hidden on SVG when no ariaLabel', () => {
			const { container } = render(<Icon name="home" type="svg" />);
			const svg = container.querySelector('svg');
			expect(svg).toHaveAttribute('aria-hidden', 'true');
		});

		it('should not have aria-hidden on SVG when ariaLabel provided', () => {
			const { container } = render(<Icon name="home" type="svg" ariaLabel="Home" />);
			const svg = container.querySelector('svg');
			expect(svg).toHaveAttribute('aria-hidden', 'false');
		});
	});

	describe('Combined Props', () => {
		it('should handle all props together', () => {
			const handleClick = vi.fn();
			const { container } = render(
				<Icon
					name="user"
					type="font"
					size={24}
					color="#3b82f6"
					className="custom"
					style={{ margin: '8px' }}
					ariaLabel="User Profile"
					onClick={handleClick}
				/>,
			);

			const icon = container.querySelector('.iconfont');
			expect(icon).toHaveClass('icon-wrapper', 'custom', 'iconfont', 'icon-user');
			expect(icon).toHaveStyle({
				fontSize: '24px',
				color: '#3b82f6',
				margin: '8px',
			});
			expect(icon).toHaveAttribute('aria-label', 'User Profile');
			expect(icon).toHaveAttribute('role', 'button');
		});
	});
});
