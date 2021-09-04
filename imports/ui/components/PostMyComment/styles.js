import styled from "styled-components";

import { InputDefaultStyles } from "../../styles/globalElements";

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
