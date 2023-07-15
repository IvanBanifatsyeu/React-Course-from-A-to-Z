import React from "react";
import PostItems from "./PostItems";

const PostList = ({posts, title, remove}) => {




	return (
		<div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
			{posts.map((post, index) => <PostItems remove={remove} key={post.id} post={post} index={index}/>)}
			{posts.length !== 0 || (
				<h2 style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
					There are no posts
				</h2>
			)}
        </div>
	);
};

export default PostList;
