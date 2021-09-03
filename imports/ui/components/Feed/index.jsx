import React from "react";

import { Post } from "../Post";

import * as S from "./styles";

const mockData = [
	{
		img: "https://www.w3schools.com/howto/img_avatar.png",
		email: "teste1@teste.com",
		text: "Exercitation enim do consectetur consectetur elit duis voluptate excepteur ipsum quis eiusmod culpa esse. Do eiusmod et veniam velit. Proident velit qui in ut dolor consequat veniam laboris. Incididunt minim minim exercitation excepteur. Laboris ipsum consequat amet eiusmod. Lorem esse occaecat commodo dolore ullamco sint labore aliquip nulla in.",
	},
];

export const Feed = () => {
	return (
		<S.Wrapper>
			<S.Title>Feed</S.Title>

			{mockData.map(({ img, email, text }) => (
				<Post key={`${email} - ${text}`} img={img} email={email} text={text} />
			))}
		</S.Wrapper>
	);
};
