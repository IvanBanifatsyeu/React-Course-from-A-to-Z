import React, { useState } from "react";
import PostItems from "./PostItems";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
  const [isDelay, setIsDelay] = useState(true)

   setTimeout(() => setIsDelay(false), 0)

	return (
		<div>
			{isDelay || <h1 style={{ textAlign: "center", 
			fontFamily: `'Lumanosimo', cursive` 
			}}>{title}</h1> } 
			<TransitionGroup>
				{posts.map((post, index) => (
					<CSSTransition key={post.id} timeout={500} classNames="post">
						<PostItems remove={remove} post={post} />
					</CSSTransition>
				))}
			</TransitionGroup>

			{(posts.length !== 0 || isDelay  ) || (
				<h2 style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
					"There are no posts"
				</h2>
			)}
		</div>
	);
};

export default PostList;
