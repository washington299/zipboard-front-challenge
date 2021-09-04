import styled from "styled-components";

import {
	InputDefaultStyles,
	ButtonDefaultStyles,
	BoxDefaultStyles,
} from "../../styles/globalElements";

export const Wrapper = styled.section`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: var(--gray);

	@media screen and (max-width: 700px) {
		padding: 0 var(--small);
	}
`;

export const Title = styled.h1`
	margin-bottom: var(--medium);
	font-size: var(--large);
	color: var(--primary-color);
	text-align: center;
`;

export const Form = styled.form`
	${BoxDefaultStyles};

	max-width: 420px;
	width: 100%;
`;

export const FormField = styled.div`
	margin-bottom: var(--small);
`;

export const Input = styled.input`
	${InputDefaultStyles};

	width: 100%;
	padding: var(--small);
`;

export const SignInButton = styled.button`
	${ButtonDefaultStyles};

	margin-bottom: var(--medium);
	padding: var(--small);
	font-size: var(--small);
	background-color: var(--primary-color);
	color: var(--white);
`;

export const SignUpButton = styled.button`
	${ButtonDefaultStyles};

	margin-top: var(--medium);
	padding: var(--small);
	font-size: var(--small);
	background-color: var(--secondary-color);
	color: var(--white);
`;

export const ErrorMessage = styled.span`
	display: block;
	font-size: 14px;
	margin-bottom: var(--small);
	color: var(--red);
	text-align: ${({ alignCenter }) => (alignCenter ? "center" : "start")};
`;
