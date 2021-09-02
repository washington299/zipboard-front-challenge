import { Meteor } from "meteor/meteor";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";

import * as S from "./styles";

export const Login = () => {
	const [loginErrorMessage, setLoginErrorMessage] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const history = useHistory();

	const onSubmit = values => {
		const { email, password } = values;

		Meteor.loginWithPassword(email, password, callback => {
			if (!callback) {
				history.push("/");
				return;
			}

			setLoginErrorMessage(callback.reason);
		});
	};

	return (
		<S.Wrapper>
			<S.Title>ZipBoard</S.Title>

			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<S.FormField>
					<S.Input {...register("email", { required: true })} type="text" placeholder="E-mail" />
					{errors.email && <S.ErrorMessage>This field is required</S.ErrorMessage>}
				</S.FormField>

				<S.FormField>
					<S.Input
						{...register("password", { required: true })}
						type="password"
						placeholder="Password"
					/>
					{errors.password && <S.ErrorMessage>This field is required</S.ErrorMessage>}
				</S.FormField>

				<S.SignInButton type="submit">Sign in</S.SignInButton>

				{loginErrorMessage && <S.ErrorMessage alignCenter>{loginErrorMessage}</S.ErrorMessage>}

				<S.Line />

				<Link to="/signup">
					<S.SignUpButton>Create account</S.SignUpButton>
				</Link>
			</S.Form>
		</S.Wrapper>
	);
};
