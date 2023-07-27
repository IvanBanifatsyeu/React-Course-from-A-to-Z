import React, { useEffect, useRef, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";

function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: "sorting by", query: "" });
	const [modal, setModal] = useState(false);
	const [limit] = useState(10);
	const [totalPages, setTotalPages] = useState(0);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const lastElement = useRef()
	

	const [fetchPosts, isPostsLoading, postError] = useFetching(
		async (limit, page) => {
			const response = await PostService.getAll(limit, page);
			setPosts([...posts, ...response.data]);
			const totalCount = response.headers["x-total-count"];
			setTotalPages(getPageCount(totalCount, limit));
		}
	);

	useObserver(lastElement, page < totalPages, isPostsLoading, () => {
		setPage(page + 1)
	} )

	// useEffect(() => {
	// 	if (isPostsLoading) return;
	// 	if (observer.current) observer.current.disconnect()
	
	// 	// функция обратного вызова
	// 	let callback = function(entries, observer){
	// 		if (entries[0].isIntersecting && page < totalPages) {
	// 			console.log('yyyy')
	// 			console.log(page)
	// 			setPage(page+1)
	// 		}
		
	// 	}
		
	// 	// наблюдатель
	// 	observer.current = new IntersectionObserver(callback)
	// 	observer.current.observe(lastElement.current)

	// }, [isPostsLoading])

	useEffect(() => {
		fetchPosts(limit, page);
	}, [page]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	};

	const removePost = (post) => {
		setPosts(posts.filter((item) => item.id !== post.id));
	};

	const ChangePage = (page) => {
		setPage(page);
		
	};

	return (
		<div className="App">
			<MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
				Create Post
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{ margin: "15px" }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			{postError && <h1>A error has occurred - {postError}</h1>}
			{isPostsLoading && (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "50px",
					}}
				>
					<Loader />
				</div>
			)}
			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title={"List of posts JS"}
			/>
			<div ref={lastElement} style={{height: '20px' , backgroundColor: 'red'}}></div>

			<Pagination page={page} ChangePage={ChangePage} totalPages={totalPages} />
		</div>
	);
}

export default Posts;
