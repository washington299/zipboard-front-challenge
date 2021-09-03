import React from "react";

import * as S from "./styles";

export const Post = ({ img, email, text, comments }) => {
	return (
		<S.Wrapper>
			<S.Content>
				<S.Image src={img} />
				<div>
					<S.Email>Email: {email}</S.Email>
					<S.Line />
					<S.Description>{text}</S.Description>
				</div>
			</S.Content>
			<S.Line />

			<S.CommentArea>
				<S.MyComment>
					<img src={img} width={40} height={40} />
					<textarea placeholder="Type a comment..." />
				</S.MyComment>

				<S.CommentsList>
					{comments.map(({ img, email, text }) => (
						<S.Comment key={`${email} - ${text}`}>
							<img src={img} width={40} height={40} />
							<S.Ballon>
								<S.Email>{email}</S.Email>
								<S.Description>{text}</S.Description>
							</S.Ballon>
						</S.Comment>
					))}
				</S.CommentsList>
			</S.CommentArea>
		</S.Wrapper>
	);
};
