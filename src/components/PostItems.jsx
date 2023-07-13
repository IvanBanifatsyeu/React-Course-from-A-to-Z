import React from "react";
import "../styles/PostItems.css";
import MyButton from "./UI/button/MyButton";

const PostItems = ({remove, ...props}) => {


	return (
		<div className="post">
			<div className="post__content">
				<strong>
					{props.index + 1} . {props.post.title}
				</strong>
				<div>{props.post.body}</div>
			</div>

			<div className="post__btns">
				<MyButton onClick={() => remove(props.post)}>Delete</MyButton>
			</div>
		</div>
	);
};

export default PostItems;
