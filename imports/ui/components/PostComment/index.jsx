import React from "react";

import * as GE from "../../styles/globalElements";
import * as S from "./styles";

export const PostComment = ({ img, email, text }) => {
	return (
		<S.Comment key={`${email} - ${text}`}>
			<GE.Image src={img} width={40} height={40} />
			<S.Ballon>
				<S.Email>{email}</S.Email>
				<S.Description>{text}</S.Description>
			</S.Ballon>
		</S.Comment>
	);
};
