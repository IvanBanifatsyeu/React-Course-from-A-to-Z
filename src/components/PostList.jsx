import React from "react";
import PostItems from "./PostItems";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>{title}</h1>
			<TransitionGroup>
				{posts.map((post, index) => (
					<CSSTransition key={post.id} timeout={500} classNames="post">
						<PostItems remove={remove} post={post} index={index} />
					</CSSTransition>
				))}
			</TransitionGroup>

			{posts.length !== 0 || (
				<h2 style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
					There are no posts
				</h2>
			)}
		</div>
	);
};

export default PostList;
