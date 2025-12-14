import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
	title: 'Components/Icon',
	component: Icon,
	parameters: {
		docs: {
			description: {
				component:
					'Icon component for rendering icon fonts from Iconfont.cn or Icomoon.io. Supports both CSS class-based fonts and SVG symbols.',
			},
		},
	},
	argTypes: {
		name: {
			control: 'text',
			description: 'Icon name (without the icon- prefix)',
		},
		type: {
			control: 'radio',
			options: ['font', 'svg'],
			description: 'Rendering type',
		},
		size: {
			control: { type: 'number', min: 8, max: 128, step: 4 },
			description: 'Icon size in pixels',
		},
		color: {
			control: 'color',
			description: 'Icon color (hex, rgb, or named color)',
		},
		ariaLabel: {
			control: 'text',
			description: 'ARIA label for accessibility',
		},
		onClick: {
			action: 'clicked',
			description: 'Click handler',
		},
	},
	args: {
		onClick: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof Icon>;

// Basic Examples
export const Default: Story = {
	args: {
		name: 'home',
		size: 24,
	},
};

export const WithColor: Story = {
	args: {
		name: 'heart',
		size: 32,
		color: '#ff0000',
	},
};

export const SVGType: Story = {
	args: {
		name: 'user',
		type: 'svg',
		size: 28,
		color: '#3b82f6',
	},
};

export const Clickable: Story = {
	args: {
		name: 'settings',
		size: 24,
		color: '#6b7280',
		ariaLabel: 'Settings',
	},
};

// Size Variants
export const Sizes: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
			<Icon name="star" size={16} color="#fbbf24" />
			<Icon name="star" size={24} color="#fbbf24" />
			<Icon name="star" size={32} color="#fbbf24" />
			<Icon name="star" size={48} color="#fbbf24" />
			<Icon name="star" size={64} color="#fbbf24" />
		</div>
	),
};

// Color Variants
export const Colors: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
			<Icon name="circle" size={32} color="#ef4444" />
			<Icon name="circle" size={32} color="#f59e0b" />
			<Icon name="circle" size={32} color="#10b981" />
			<Icon name="circle" size={32} color="#3b82f6" />
			<Icon name="circle" size={32} color="#8b5cf6" />
			<Icon name="circle" size={32} color="#ec4899" />
		</div>
	),
};

// Common Icons
export const CommonIcons: Story = {
	render: () => (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px' }}>
			{[
				'home',
				'user',
				'heart',
				'star',
				'search',
				'settings',
				'mail',
				'bell',
				'calendar',
				'camera',
				'edit',
				'trash',
				'download',
				'upload',
				'check',
				'close',
				'arrow-left',
				'arrow-right',
			].map((icon) => (
				<div key={icon} style={{ textAlign: 'center' }}>
					<Icon name={icon} size={32} color="#1f2937" />
					<div style={{ fontSize: '12px', marginTop: '8px', color: '#6b7280' }}>{icon}</div>
				</div>
			))}
		</div>
	),
};

// Font vs SVG Comparison
export const FontVsSVG: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '48px' }}>
			<div>
				<h4 style={{ marginTop: 0 }}>Font Mode</h4>
				<div style={{ display: 'flex', gap: '16px' }}>
					<Icon name="home" type="font" size={32} color="#3b82f6" />
					<Icon name="user" type="font" size={32} color="#10b981" />
					<Icon name="heart" type="font" size={32} color="#ef4444" />
				</div>
			</div>
			<div>
				<h4 style={{ marginTop: 0 }}>SVG Mode</h4>
				<div style={{ display: 'flex', gap: '16px' }}>
					<Icon name="home" type="svg" size={32} color="#3b82f6" />
					<Icon name="user" type="svg" size={32} color="#10b981" />
					<Icon name="heart" type="svg" size={32} color="#ef4444" />
				</div>
			</div>
		</div>
	),
};

// Interactive Icons
export const InteractiveIcons: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '16px' }}>
			<Icon
				name="heart"
				size={32}
				color="#ef4444"
				onClick={() => alert('Heart clicked!')}
				ariaLabel="Like"
			/>
			<Icon
				name="star"
				size={32}
				color="#fbbf24"
				onClick={() => alert('Star clicked!')}
				ariaLabel="Favorite"
			/>
			<Icon
				name="share"
				size={32}
				color="#3b82f6"
				onClick={() => alert('Share clicked!')}
				ariaLabel="Share"
			/>
			<Icon
				name="bookmark"
				size={32}
				color="#8b5cf6"
				onClick={() => alert('Bookmark clicked!')}
				ariaLabel="Bookmark"
			/>
		</div>
	),
};

// In Button Context
export const InButtons: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '12px' }}>
			<button
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '8px',
					padding: '8px 16px',
					backgroundColor: '#3b82f6',
					color: 'white',
					border: 'none',
					borderRadius: '6px',
					cursor: 'pointer',
				}}
			>
				<Icon name="plus" size={16} color="#ffffff" />
				<span>Add Item</span>
			</button>

			<button
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '8px',
					padding: '8px 16px',
					backgroundColor: '#ef4444',
					color: 'white',
					border: 'none',
					borderRadius: '6px',
					cursor: 'pointer',
				}}
			>
				<Icon name="trash" size={16} color="#ffffff" />
				<span>Delete</span>
			</button>

			<button
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '8px',
					padding: '8px 16px',
					backgroundColor: '#10b981',
					color: 'white',
					border: 'none',
					borderRadius: '6px',
					cursor: 'pointer',
				}}
			>
				<Icon name="check" size={16} color="#ffffff" />
				<span>Confirm</span>
			</button>
		</div>
	),
};

// Icon States
export const IconStates: Story = {
	render: () => (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
			<div>
				<h4 style={{ marginTop: 0, fontSize: '14px' }}>Default</h4>
				<Icon name="bell" size={32} color="#6b7280" />
			</div>
			<div>
				<h4 style={{ marginTop: 0, fontSize: '14px' }}>Active/Primary</h4>
				<Icon name="bell" size={32} color="#3b82f6" />
			</div>
			<div>
				<h4 style={{ marginTop: 0, fontSize: '14px' }}>Disabled</h4>
				<Icon name="bell" size={32} color="#d1d5db" />
			</div>
		</div>
	),
};

// All Props Combined
export const AllProps: Story = {
	args: {
		name: 'settings',
		type: 'font',
		size: 40,
		color: '#8b5cf6',
		ariaLabel: 'Application Settings',
		className: 'custom-icon',
	},
};
