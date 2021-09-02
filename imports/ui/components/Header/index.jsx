import React from "react";
import { Meteor } from "meteor/meteor";

import * as S from "./styles";

export const Header = ({ email }) => {
	const logout = () => Meteor.logout();

	return (
		<S.Wrapper>
			<S.LogoName>ZipBoard</S.LogoName>
			<S.UserInfo>
				<span>{email}</span>
				<div onClick={logout}>Logout</div>
			</S.UserInfo>
		</S.Wrapper>
	);
};
