import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <div>
          <Routes>
				<Route path="/about" element={<About />}></Route>
				<Route path="/posts" element={<Posts />}></Route>
				<Route path="*" element={<Error />}></Route>
			</Routes>  
        </div>
    );
};

export default AppRouter;