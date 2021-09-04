import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

import * as GE from "../../styles/globalElements";
import * as S from "./styles";

export const BoxInput = () => {
	const [text, setText] = useState("");

	const user = useTracker(() => Meteor.user());

	const handleClick = () => {
		if (!text) return;

		Meteor.call("posts.insert", { email: user?.emails[0]?.address, text });

		setText("");
	};

	return (
		<S.Wrapper>
			<S.Content>
				<GE.Image
					src="https://www.w3schools.com/howto/img_avatar.png"
					alt="man avatar"
					width={60}
					height={60}
				/>

				<S.Textarea
					placeholder="Type something..."
					value={text}
					onChange={e => setText(e.target.value)}
				/>
			</S.Content>

			<S.ButtonWrapper>
				<S.SendButton onClick={handleClick}>Send</S.SendButton>
			</S.ButtonWrapper>
		</S.Wrapper>
	);
};
