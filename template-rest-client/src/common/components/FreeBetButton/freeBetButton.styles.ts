import styled, { css } from 'styled-components';
import { FreeBetButtonMode } from './freeBetButton.types';

type ContainerProps = {
	/**
	 * Margin top
	 */
	mt?: number;
};

export const Container = styled.div<ContainerProps>`
	margin-bottom: 5px;
	margin-left: 2px;
	margin-right: 2px;
	margin-top: ${({ mt }) => (mt ? mt : 6)}px;
`;

type ButtonProps = {
	/**
	 * Button mode to change the background color
	 */
	mode: FreeBetButtonMode;

	/**
	 * Indicates if the button is disabled
	 */
	isDisabled?: boolean;
};

export const Button = styled.button<ButtonProps>`
	user-select: none;
	border: none;
	cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};
	border-radius: 35px;
	padding: 0;

	${({ disabled }) =>
		!disabled &&
		css`
			&:focus {
				outline: none;
			}

			&:hover {
				opacity: 0.9;
			}

			${Text}:active {
				transform: translateY(-2px);
			}
		`}

	${({ mode }) => {
		switch (mode) {
			case 'error':
				return css`
					background: #b10000;
				`;

			case 'success':
				return css`
					background: #359661;
				`;

			case 'info':
				return css`
					background: #8411ae;
				`;

			default:
				return css`
					background: #464f49;
				`;
		}
	}}
`;

type TextProps = {
	/**
	 * Button mode to change the color and the background color of the text
	 */
	mode: FreeBetButtonMode;

	/**
	 * Indicates if the button is responsive
	 */
	isResponsive?: boolean;

	/**
	 * The breakpoint of the media query
	 */
	breakpoint: number;

	/**
	 * Indicates if the button is disabled
	 */
	isDisabled?: boolean;
};

export const Text = styled.span<TextProps>`
	display: block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-style: normal;
	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
	padding: 10px 20px;
	border-radius: 35px;
	font-size: 12px;
	height: 37px;
	letter-spacing: 0.5px;
	font-weight: 700;
	will-change: transform;
	transform: translateY(-4px);
	transition: transform 250ms;
	cursor: ${({ isDisabled }) => isDisabled && 'no-drop'};

	${({ isDisabled }) =>
		!isDisabled &&
		css`
			&:hover {
				transform: translateY(-6px);
			}
		`}

	${({ isResponsive, breakpoint }) =>
		isResponsive &&
		`@media (max-width: ${breakpoint}px) {
      padding: 6px 13px;
      height: 30px;
    }
  `}

	${({ mode }) => {
		switch (mode) {
			case 'error':
				return css`
					background: #ff0f11;
					color: #fafafa;
				`;

			case 'success':
				return css`
					background: #51d98f;
					color: #fafafa;
				`;

			case 'info':
				return css`
					background: #bb00ff;
					color: #fafafa;
				`;

			default:
				return css`
					background: #6d726f;
					color: #fafafa;
				`;
		}
	}};
`;
