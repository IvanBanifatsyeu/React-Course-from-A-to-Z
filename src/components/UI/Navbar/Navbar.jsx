import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__links">
				<Link className="link" to="/about">About site</Link>
				<Link className="link" to="/posts">Posts</Link>
			</div>
		</div>
	);
};

export default Navbar;
