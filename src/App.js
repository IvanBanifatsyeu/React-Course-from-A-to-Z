import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";

import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "Dog", body: "Barking" },
		{ id: 2, title: "Parrot", body: "Speaking" },
		{ id: 3, title: "Cat", body: "Purring" },
		{ id: 4, title: "Bear", body: "Power" },
		{ id: 5, title: "Cow", body: "Chewing" },
	]);

	const [selectedSort, setSelectedSort] = useState("");

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((item) => item.id !== post.id));
	};

	const sortPosts = (sort) => {
		setSelectedSort(sort);
		setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
	}

	return (
		<div className="App">
			<PostForm create={createPost} />
			<hr style={{ margin: "15px" }} />
			<MySelect
				value={selectedSort}
				onChangeHandler={sortPosts}
				defaultValue="sorting by"
				options={[
					{ value: "title", name: "by name" },
					{ value: "body", name: "by description" },
				]}
			/>
			<PostList remove={removePost} posts={posts} title={"List of posts JS"} />
			{posts.length !== 0 || (
				<h2 style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
					There are no posts
				</h2>
			)}
		</div>
	);
}

export default App;
