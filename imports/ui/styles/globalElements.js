import { css } from "styled-components";

export const InputStyles = css`
	font-size: var(--small);
	border: 1px solid var(--gray);
	border-radius: var(--extra-small);
	outline: none;

	&::placeholder {
		color: var(--dark-gray);
	}
`;
