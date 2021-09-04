import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React, { useState } from "react";
import { MdSend } from "react-icons/md";

import { CommentsCollection } from "../../../api/commentsCollection";

import { PostInformation } from "../PostInformation";
import { Comment } from "../Comment";

import * as GE from "../../styles/globalElements";
import * as S from "./styles";

export const Post = ({ id, email, text }) => {
	const [value, setValue] = useState("");

	const user = useTracker(() => Meteor.user());
	const comments = useTracker(() => CommentsCollection.find({ postId: id }).fetch());

	const handleClick = () => {
		if (!value) return;

		Meteor.call("comments.insert", { postId: id, email: user?.emails[0]?.address, comment: value });

		setValue("");
	};

	return (
		<S.Wrapper>
			<PostInformation email={email} text={text} />

			<GE.Line />

			<S.CommentArea>
				<S.MyComment>
					<GE.Image src={"https://www.w3schools.com/howto/img_avatar.png"} width={40} height={40} />
					<S.CommentWrapper>
						<input
							placeholder="Type a comment..."
							value={value}
							onChange={e => setValue(e.target.value)}
						/>
						<MdSend size={25} color="#166FE5" style={{ cursor: "pointer" }} onClick={handleClick} />
					</S.CommentWrapper>
				</S.MyComment>

				<S.CommentsList>
					{comments.map(({ _id, email, comment }) => (
						<Comment
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
