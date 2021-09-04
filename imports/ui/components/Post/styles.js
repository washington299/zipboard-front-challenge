import styled from "styled-components";

import { InputDefaultStyles } from "../../styles/globalElements";

export const Wrapper = styled.section`
	width: 100%;

	padding: var(--small);

	background-color: var(--white);
	border-radius: var(--extra-small);
	box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

export const Content = styled.div`
	width: 100%;

	display: flex;
`;

export const Image = styled.img`
	width: 60px;
	height: 60px;
	margin-right: var(--small);
	border-radius: 50%;
`;

export const Email = styled.strong`
	display: block;
	margin-bottom: var(--extra-small);
`;

export const Line = styled.div`
	width: 100%;
	height: 1px;
	background-color: var(--dark-gray);
`;

export const Description = styled.p`
	margin: var(--small) 0;
`;

export const CommentArea = styled.div`
	margin: var(--small) 0;
`;

export const MyComment = styled.div`
	display: flex;
	margin-bottom: var(--small);

	img {
		margin-right: var(--extra-small);
	}

	textarea {
		${InputDefaultStyles};

		width: 100%;
		padding: 0 var(--small);
		vertical-align: middle;
		resize: none;
		border-radius: 30px;
	}
`;

export const CommentsList = styled.div`
	display: flex;
	flex-direction: column;
`;
