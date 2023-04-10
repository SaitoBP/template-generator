import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	min-height: 100vh;
`;

export const Svg = styled.svg`
	width: 250px;

	@keyframes b1 {
		0%,
		20% {
			fill: #c6cfd6;
		}
		30%,
		70% {
			fill: #0f657a;
		}
		80%,
		100% {
			fill: #c6cfd6;
		}
	}

	@keyframes b2 {
		0%,
		20% {
			fill: #c6cfd6;
		}
		30%,
		70% {
			fill: #0b4b63;
		}
		80%,
		100% {
			fill: #c6cfd6;
		}
	}

	@keyframes b3 {
		0%,
		20% {
			fill: #c6cfd6;
		}
		30%,
		70% {
			fill: #2385a8;
		}
		80%,
		100% {
			fill: #c6cfd6;
		}
	}

	@keyframes b4 {
		0%,
		20% {
			fill: #c6cfd6;
		}
		30%,
		70% {
			fill: #2385a8;
		}
		80%,
		100% {
			fill: #c6cfd6;
		}
	}

	@keyframes b5 {
		0%,
		20% {
			fill: #c6cfd6;
		}
		30%,
		70% {
			fill: #8c9fac;
		}
		80%,
		100% {
			fill: #c6cfd6;
		}
	}

	@keyframes b6 {
		0%,
		20% {
			fill: #c6cfd6;
		}
		30%,
		70% {
			fill: #0f657a;
		}
		80%,
		100% {
			fill: #c6cfd6;
		}
	}

	@keyframes b7 {
		0%,
		20% {
			fill: #c6cfd6;
		}
		30%,
		70% {
			fill: #0f657a;
		}
		80%,
		100% {
			fill: #c6cfd6;
		}
	}

	@keyframes b8 {
		0%,
		20% {
			fill: #c6cfd6;
		}
		30%,
		70% {
			fill: #0b4b63;
		}
		80%,
		100% {
			fill: #c6cfd6;
		}
	}

	@keyframes b9 {
		0%,
		20% {
			fill: #c6cfd6;
		}
		30%,
		70% {
			fill: #2385a8;
		}
		80%,
		100% {
			fill: #c6cfd6;
		}
	}

	.b {
		fill: #c6cfd6;
		animation-duration: 2.5s;
		animation-direction: alternate;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}

	.b1 {
		animation-name: b1;
		animation-delay: 100ms;
	}

	.b2 {
		animation-name: b2;
		animation-delay: 200ms;
	}

	.b3 {
		animation-name: b3;
		animation-delay: 300ms;
	}

	.b4 {
		animation-name: b4;
		animation-delay: 400ms;
	}

	.b5 {
		animation-name: b5;
		animation-delay: 500ms;
	}

	.b6 {
		animation-name: b6;
		animation-delay: 600ms;
	}

	.b7 {
		animation-name: b7;
		animation-delay: 700ms;
	}

	.b8 {
		animation-name: b8;
		animation-delay: 800ms;
	}

	.b9 {
		animation-name: b9;
		animation-delay: 900ms;
	}
`;
