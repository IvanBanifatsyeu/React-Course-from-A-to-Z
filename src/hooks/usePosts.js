import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
		if (sort === "sorting by") {
			return posts;
		}
		return [...posts].sort((a, b) =>
			a[sort].localeCompare(b[sort])
		);
	}, [sort, posts]);
    return sortedPosts
}

export const usePosts = (posts, sort, query) => {

    const sortedPosts = useSortedPosts(posts, sort)
	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter((post) =>
			post.title.toLowerCase().includes(query.toLowerCase())
		);
	}, [query, sortedPosts]);
    return sortedAndSearchedPosts;
}