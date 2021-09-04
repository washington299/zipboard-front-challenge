import styled from "styled-components";

import { InputDefaultStyles, BoxDefaultStyles } from "../../styles/globalElements";

export const Wrapper = styled.section`
	${BoxDefaultStyles};

	width: 100%;
	margin-bottom: var(--large);
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

export const Description = styled.p`
	margin: var(--small) 0;
`;

export const CommentArea = styled.div`
	margin-top: var(--small);
`;

export const MyComment = styled.div`
	display: flex;
	margin-bottom: var(--small);

	img {
		margin-right: var(--extra-small);
		border-radius: 50%;
	}

	input {
		width: 100%;
		border: none;
		outline: none;
	}
`;

export const CommentWrapper = styled.div`
	${InputDefaultStyles};

	width: 100%;
	display: flex;
	align-items: center;
	padding: 0 var(--extra-small);

	border-radius: 30px;
`;

export const CommentsList = styled.div`
	display: flex;
	flex-direction: column;
`;
