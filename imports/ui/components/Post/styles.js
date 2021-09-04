import styled from "styled-components";

import { BoxDefaultStyles } from "../../styles/globalElements";

export const Wrapper = styled.section`
	${BoxDefaultStyles};

	width: 100%;
	margin-bottom: var(--large);
`;

export const CommentArea = styled.div`
	margin-top: var(--small);
`;

export const CommentsList = styled.div`
	display: flex;
	flex-direction: column;
`;
