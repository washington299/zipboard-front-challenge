import styled from "styled-components";

import {
	InputDefaultStyles,
	ButtonDefaultStyles,
	BoxDefaultStyles,
} from "../../styles/globalElements";

export const Wrapper = styled.section`
	${BoxDefaultStyles};

	width: 100%;
`;

export const Content = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;
`;

export const Textarea = styled.textarea`
	${InputDefaultStyles};

	flex: 1;
	height: 100px;
	padding: var(--extra-small);
	resize: none;
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

export const SendButton = styled.button`
	${ButtonDefaultStyles};

	width: 150px;
	margin-top: var(--small);
	padding: 12px var(--small);
	font-size: var(--small);
	background-color: var(--primary-color);
	color: var(--white);
`;
