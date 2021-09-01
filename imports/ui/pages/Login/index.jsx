import React from "react";
import { useForm } from "react-hook-form";

import * as S from "./styles";

export const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = () => {};

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

				<S.Line />

				<S.SignUpButton>Create account</S.SignUpButton>
			</S.Form>
		</S.Wrapper>
	);
};
