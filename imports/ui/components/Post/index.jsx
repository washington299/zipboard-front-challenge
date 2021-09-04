import React from "react";
import { MdSend } from "react-icons/md";

import { Comment } from "../Comment";

import * as GE from "../../styles/globalElements";
import * as S from "./styles";

export const Post = ({ img, email, text, comments }) => {
	return (
		<S.Wrapper>
			<S.Content>
				<GE.Image src={img} alt="Avatar" width={60} height={60} />
				<div>
					<S.Email>Email: {email}</S.Email>
					<GE.Line />
					<S.Description>{text}</S.Description>
				</div>
			</S.Content>

			<GE.Line />

			<S.CommentArea>
				<S.MyComment>
					<GE.Image src={img} width={40} height={40} />
					<S.CommentWrapper>
						<input placeholder="Type a comment..." />
						<MdSend size={25} color="#166FE5" style={{ cursor: "pointer" }} />
					</S.CommentWrapper>
				</S.MyComment>

				<S.CommentsList>
					{comments.map(({ img, email, text }) => (
						<Comment key={`${email} - ${text}`} img={img} email={email} text={text} />
					))}
				</S.CommentsList>
			</S.CommentArea>
		</S.Wrapper>
	);
};
