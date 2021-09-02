import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import * as S from "./styles";

export const SignUp = () => {
	const [signUpErrorMessage, setSignupErrorMessage] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = values => {
		const { username, email, password, confirm_password } = values;

		if (password !== confirm_password) {
			setSignupErrorMessage("Passwords does not match");
			return;
		}
	};

	return (
		<S.Wrapper>
			<S.Title>ZipBoard</S.Title>

			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<S.FormField>
					<S.Input
						{...register("username", { required: true })}
						type="text"
						placeholder="Username"
					/>
					{errors.username && <S.ErrorMessage>This field is required</S.ErrorMessage>}
				</S.FormField>

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

				<S.FormField>
					<S.Input
						{...register("confirm_password", { required: true })}
						type="password"
						placeholder="Confirm password"
					/>
					{errors.confirm_password && <S.ErrorMessage>This field is required</S.ErrorMessage>}
				</S.FormField>

				{signUpErrorMessage && <S.ErrorMessage alignCenter>{signUpErrorMessage}</S.ErrorMessage>}

				<S.SignInButton type="submit">Sign up</S.SignInButton>

				<Link to="/login">Go to login page</Link>
			</S.Form>
		</S.Wrapper>
	);
};
