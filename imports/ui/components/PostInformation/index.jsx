import React from "react";

import * as GE from "../../styles/globalElements";
import * as S from "./styles";

export const PostInformation = ({ email, text }) => {
	return (
		<S.Content>
			<GE.Image
				src={"https://www.w3schools.com/howto/img_avatar.png"}
				alt="Avatar"
				width={60}
				height={60}
			/>
			<div>
				<S.Email>{email}</S.Email>
				<GE.Line />
				<S.Description>{text}</S.Description>
			</div>
		</S.Content>
	);
};
