import 'rc-dialog/assets/index.css';
import { ReactNode } from 'react';
import { Spinner } from '../Spinner';
import { DialogContainer } from './dialog.styles';

type DialogProps = {
	/**
	 * Whether the dialog is open or not.
	 */
	isOpen: boolean;

	/**
	 * The title of the dialog.
	 */
	title: ReactNode;

	/**
	 * The width of the dialog.
	 */
	width?: string | number;

	/**
	 * The height of the dialog.
	 */
	height?: string | number;

	/**
	 * Whether the dialog is loading or not.
	 */
	isLoading?: boolean;

	/**
	 * The children of the dialog.
	 */
	children: ReactNode;

	/**
	 * Callback to be called when the dialog is closed.
	 */
	onClose?: () => void;
};

export function Dialog(props: DialogProps) {
	const { isOpen, title, width, height, isLoading, children, onClose } = props;

	return (
		<DialogContainer
			visible={isOpen}
			title={title}
			animation='zoom'
			width={width}
			height={height}
			onClose={onClose}
		>
			<div style={{ height: height }}>{isLoading ? <Spinner /> : children}</div>
		</DialogContainer>
	);
}
