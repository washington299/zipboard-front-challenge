import React from "react";

export const Post = ({ img, email, text }) => {
	return (
		<>
			<img src={img} />
			<div>{email}</div>
			<div>{text}</div>
		</>
	);
};
