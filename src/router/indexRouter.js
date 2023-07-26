import About from "../pages/About";
import Posts from "../pages/Posts";
import SinglePage from "../pages/SinglePage";
import Login from "../pages/Login";

export const privateRoutes = [
	{ path: `/about`, component: About },
	{ path: `/posts`, component: Posts },
	{ path: `/posts/:id`, component: SinglePage },
	{ path: `*`, component: Posts },
];

export const publicRoutes = [
	{ path: `/login`, component: Login },
	{ path: `*`, component: Login }
];
