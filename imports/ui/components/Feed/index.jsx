import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { PostsCollection } from "../../../api/postsCollection";

import { Post } from "../Post";

import * as S from "./styles";

export const Feed = () => {
	const posts = useTracker(() => PostsCollection.find({}, { sort: { createdAt: -1 } }).fetch());

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
