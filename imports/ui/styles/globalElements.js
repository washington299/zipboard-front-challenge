import styled, { css } from "styled-components";

export const Container = styled.div`
	max-width: 1080px;
	width: 100%;
	margin: auto;
	padding: var(--small);
`;

export const Image = styled.img`
	width: ${({ width }) => width || "60px"};
	height: ${({ height }) => height || "60px"};

	margin-right: var(--small);
	border-radius: 50%;
`;

export const Line = styled.div`
	width: 100%;
	height: 1px;
	background-color: var(--gray);
`;

export const BoxDefaultStyles = css`
	padding: var(--small);

	background-color: var(--white);
	border-radius: var(--extra-small);
	box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

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
