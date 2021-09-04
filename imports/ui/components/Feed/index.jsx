import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { PostsCollection } from "../../../api/postsCollection";

import { Post } from "../Post";

import * as S from "./styles";

// const mockData = [
// 	{
// 		img: "",
// 		email: "teste1@teste.com",
// 		text: "Exercitation enim do consectetur consectetur elit duis voluptate excepteur ipsum quis eiusmod culpa esse. Do eiusmod et veniam velit. Proident velit qui in ut dolor consequat veniam laboris. Incididunt minim minim exercitation excepteur. Laboris ipsum consequat amet eiusmod. Lorem esse occaecat commodo dolore ullamco sint labore aliquip nulla in.",
// 		comments: [
// 			{
// 				img: "https://www.w3schools.com/howto/img_avatar.png",
// 				email: "teste1@teste.com",
// 				text: "Exercitation enim do consectetur consectetur elit duis voluptate excepteur ipsum quis eiusmod culpa esse. Do eiusmod et veniam velit. Proident velit qui in ut dolor consequat veniam laboris. Incididunt minim minim exercitation excepteur. Laboris ipsum consequat amet eiusmod. Lorem esse occaecat commodo dolore ullamco sint labore aliquip nulla in.",
// 			},
// 			{
// 				img: "https://www.w3schools.com/howto/img_avatar.png",
// 				email: "teste1@teste.com",
// 				text: "Exercitation enim do consectetur consectetur elit duis voluptate excepteur ipsum quis eiusmod culpa esse. Do eiusmod et veniam velit. Proident velit qui in ut dolor consequat veniam laboris. Incididunt minim minim exercitation excepteur. Laboris ipsum consequat amet eiusmod. Lorem esse occaecat commodo dolore ullamco sint labore aliquip nulla in.",
// 			},
// 			{
// 				img: "https://www.w3schools.com/howto/img_avatar.png",
// 				email: "teste1@teste.com",
// 				text: "Exercitation enim do consectetur consectetur elit duis voluptate excepteur ipsum quis eiusmod culpa esse. Do eiusmod et veniam velit. Proident velit qui in ut dolor consequat veniam laboris. Incididunt minim minim exercitation excepteur. Laboris ipsum consequat amet eiusmod. Lorem esse occaecat commodo dolore ullamco sint labore aliquip nulla in.",
// 			},
// 		],
// 	},
// ];

export const Feed = () => {
	const posts = useTracker(() => PostsCollection.find({}).fetch());

	// console.log(posts);

	return (
		<S.Wrapper>
			<S.Title>Feed</S.Title>

			{posts.map(({ _id, email, text, comments }) => (
				<Post
					key={_id}
					id={_id}
					img={"https://www.w3schools.com/howto/img_avatar.png"}
					email={email}
					text={text}
					comments={comments}
				/>
			))}
		</S.Wrapper>
	);
};
