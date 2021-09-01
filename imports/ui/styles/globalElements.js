import { css } from "styled-components";

export const InputDefaultStyles = css`
	font-size: var(--small);
	border: 1px solid var(--gray);
	border-radius: var(--extra-small);
	outline: none;

	&::placeholder {
		color: var(--dark-gray);
	}
`;

export const ButtonDefaultStyles = css`
	width: 100%;
	border: none;
	border-radius: var(--extra-small);
	font-weight: var(--font-bold);
	outline: none;
	cursor: pointer;
`;
