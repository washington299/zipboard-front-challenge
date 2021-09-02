import styled from "styled-components";

export const Wrapper = styled.header`
	width: 100%;
	height: 60px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: var(--small);
	background-color: var(--primary-color);
	color: var(--white);
`;

export const LogoName = styled.div`
	font-size: var(--large);
`;

export const UserInfo = styled.div`
	display: flex;

	div {
		margin-left: var(--large);
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
`;
