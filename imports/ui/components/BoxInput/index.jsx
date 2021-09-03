import React from "react";

import * as S from "./styles";

export const BoxInput = () => {
	return (
		<S.Wrapper>
			<S.Content>
				<S.Image src="https://www.w3schools.com/howto/img_avatar.png" alt="man avatar" />

				<S.Textarea placeholder="Type something..." />
			</S.Content>

			<S.ButtonWrapper>
				<S.SendButton>Send</S.SendButton>
			</S.ButtonWrapper>
		</S.Wrapper>
	);
};
