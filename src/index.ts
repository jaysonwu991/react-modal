// Import all component styles
import './components/Modal/Modal.scss';
import './components/Button/Button.scss';
import './components/Input/Input.scss';
import './components/Icon/Icon.scss';

// Export all components and types
export { Modal, Button, Input, Icon } from './components';
export type {
	ModalProps,
	ModalSize,
	ButtonProps,
	ButtonVariant,
	ButtonSize,
	InputProps,
	InputSize,
	IconProps,
} from './components';
