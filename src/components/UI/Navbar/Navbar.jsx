import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context/indexContext";

const Navbar = () => {
      const {isAuth, setIsAuth} = useContext(AuthContext)
	  const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth')
	}

	return (
		<div className="navbar">
			<MyButton onClick={logout}>Log Out</MyButton>
			<div className="navbar__links">
				<Link className="link" to="/about">About site</Link>
				<Link className="link" to="/posts">Posts</Link>
			</div>
		</div>
	);
};

export default Navbar;
