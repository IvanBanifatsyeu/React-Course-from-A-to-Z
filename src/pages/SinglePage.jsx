import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { Link } from "react-router-dom";

const SinglePage = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [fetchPostById, isLoading] = useFetching(async (id) => {
		const response = await PostService.getById(id);
		setPost(response.data);
	});

	const [fetchCommentsById] = useFetching(
		async (id) => {
			const response = await PostService.getByIdComments(id);
			setComments(response.data);
		}
	);

	useEffect(() => {
		fetchPostById(id);
	}, []);

	useEffect(() => {
		fetchCommentsById(id);
	}, []);



	return (
		<>
			<h1>You opened page of post c ID = {id}</h1>
			{isLoading ? (
				<Loader />
			) : (
				<div className="postById">
					{post.id}, {post.title}
				</div>
			)}
			<h1>Comments</h1>
			{isLoading ? (
				<Loader />
			) : (
				<div className="block">
					{comments.map((user) => (
						<div key={user.id}>
							<h3>name - {user.name}</h3>
							<p>email - {user.email} </p>
							<p className="paragraph">comment --- {user.body}</p>
						</div>
					))}
					<Link className="link link__return" to="/posts">
						Return
					</Link>
				</div>
			)}
		</>
	);
};

export default SinglePage;
