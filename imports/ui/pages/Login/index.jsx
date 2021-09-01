import React from "react";

import * as S from "./styles";

export const Login = () => {
	return (
		<S.Wrapper>
			<S.Title>ZipBoard</S.Title>

			<S.Form>
				<S.Input type="text" placeholder="E-mail" />
				<S.Input type="password" placeholder="Password" />

				<S.SignInButton>Sign in</S.SignInButton>

				<S.Line />

				<S.SignUpButton>Create account</S.SignUpButton>
			</S.Form>
		</S.Wrapper>
	);
};
