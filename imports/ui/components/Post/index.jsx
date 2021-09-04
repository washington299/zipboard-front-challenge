import { useTracker } from "meteor/react-meteor-data";
import React from "react";

import { CommentsCollection } from "../../../api/commentsCollection";

import { PostInformation } from "../PostInformation";
import { PostMyComment } from "../PostMyComment";
import { PostComment } from "../PostComment";

import * as GE from "../../styles/globalElements";
import * as S from "./styles";

export const Post = ({ id, email, text }) => {
	const comments = useTracker(() => CommentsCollection.find({ postId: id }).fetch());

	return (
		<S.Wrapper>
			<PostInformation email={email} text={text} />

			<GE.Line />

			<S.CommentArea>
				<PostMyComment id={id} />

				<S.CommentsList>
					{comments.map(({ _id, email, comment }) => (
						<PostComment
							key={_id}
							img={"https://www.w3schools.com/howto/img_avatar.png"}
							email={email}
							text={comment}
						/>
					))}
				</S.CommentsList>
			</S.CommentArea>
		</S.Wrapper>
	);
};
