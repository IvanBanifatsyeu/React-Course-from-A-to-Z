import React, { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";

import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "Dog", body: "Barking" },
		{ id: 2, title: "Parrot", body: "Speaking" },
		{ id: 3, title: "Cat", body: "Purring" },
		{ id: 4, title: "Bear", body: "Power" },
		{ id: 5, title: "Cow", body: "Chewing" },
	]);

	const [filter, setFilter] = useState({ sort: "sorting by", query: "" });
	console.log(filter);

	const sortedPosts = useMemo(() => {
		if (filter.sort === "sorting by") {
			return posts;
		}
		return [...posts].sort((a, b) =>
			a[filter.sort].localeCompare(b[filter.sort])
		);
	}, [filter.sort, posts]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter((post) =>
			post.title.toLowerCase().includes(filter.query.toLowerCase())
		);
	}, [filter.query, sortedPosts]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((item) => item.id !== post.id));
	};

	return (
		<div className="App">
			<PostForm create={createPost} />
			<hr style={{ margin: "15px" }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title={"List of posts JS"}
			/>
		</div>
	);
}

export default App;
