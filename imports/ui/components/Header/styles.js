import styled from "styled-components";

export const Wrapper = styled.header`
	width: 100%;
	height: 60px;

	background-color: var(--primary-color);
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	color: var(--white);
`;

export const LogoName = styled.div`
	font-size: var(--large);

	@media screen and (max-width: 700px) {
		font-size: var(--medium);
	}
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
