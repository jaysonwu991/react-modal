// Export all components and types
export { Modal, Button, Input, Icon, Calendar } from './components';
export type {
	ModalProps,
	ModalSize,
	ButtonProps,
	ButtonVariant,
	ButtonSize,
	InputProps,
	InputSize,
	IconProps,
	CalendarProps,
	CalendarView,
	DateRange,
} from './components';

// Export individual component style loaders for tree-shaking
export { default as loadModalStyles } from './components/Modal/styles';
export { default as loadButtonStyles } from './components/Button/styles';
export { default as loadInputStyles } from './components/Input/styles';
export { default as loadIconStyles } from './components/Icon/styles';
export { default as loadCalendarStyles } from './components/Calendar/styles';

// Export icon font loader (lazy-loadable)
export { loadIconFont, loadIconSvg } from './assets/icons/loader';
