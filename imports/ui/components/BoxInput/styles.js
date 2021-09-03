import styled from "styled-components";

import { InputDefaultStyles, ButtonDefaultStyles } from "../../styles/globalElements";

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
	justify-content: space-between;
`;

export const Image = styled.img`
	width: 60px;
	height: 60px;
	margin-right: var(--small);
	border-radius: 50%;
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
