import React from "react";

import * as GE from "../../styles/globalElements";
import * as S from "./styles";

export const BoxInput = () => {
	return (
		<S.Wrapper>
			<S.Content>
				<GE.Image
					src="https://www.w3schools.com/howto/img_avatar.png"
					alt="man avatar"
					width={60}
					height={60}
				/>

				<S.Textarea placeholder="Type something..." />
			</S.Content>

			<S.ButtonWrapper>
				<S.SendButton>Send</S.SendButton>
			</S.ButtonWrapper>
		</S.Wrapper>
	);
};
