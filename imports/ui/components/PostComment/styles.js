import styled from "styled-components";

export const Comment = styled.div`
	display: flex;

	img {
		border-radius: 50%;
		margin-right: var(--extra-small);
	}
`;

export const Ballon = styled.div`
	padding: var(--extra-small);
	background-color: #f0f2f5;
	border-radius: var(--small);
`;

export const Email = styled.strong`
	display: block;
	margin-bottom: var(--extra-small);
`;

export const Description = styled.p`
	margin: var(--extra-small) 0;
`;
