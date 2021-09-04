import React from "react";

import * as S from "./styles";

export const Comment = ({ img, email, text }) => {
	return (
		<S.Comment key={`${email} - ${text}`}>
			<img src={img} width={40} height={40} />
			<S.Ballon>
				<S.Email>{email}</S.Email>
				<S.Description>{text}</S.Description>
			</S.Ballon>
		</S.Comment>
	);
};
