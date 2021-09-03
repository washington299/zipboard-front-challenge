import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: sans-serif;
	}

	:root {
		--primary-color: #166FE5;
		--secondary-color: #36A420;

		--gray: #DDDFE2;
		--dark-gray: #AAAAAA;
		--red: #F02849;
		--white: #ffffff;
		--black: #000000;

		--font-extra-light: 400;
		--font-light: 500;
		--font-medium: 600;
		--font-bold: 700;
		--font-extra-bold: 800;

		--extra-small: 0.5rem; // 8px
		--small: 1rem; // 16px
		--medium: 1.5rem; // 24px
		--large: 2rem; // 32px
		--extra-large: 3rem; // 48px
	}
`;
