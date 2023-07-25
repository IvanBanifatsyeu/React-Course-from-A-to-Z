import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from "../pages/About";
import Posts from "../pages/Posts";
import SinglePage from '../pages/SinglePage';

const AppRouter = () => {
    return (
        <div>
          <Routes>
				<Route path="/about" element={<About />}></Route>
				<Route path="/posts" element={<Posts />}></Route>
				<Route path="/posts/:id" element={<SinglePage />}></Route>

				<Route path="*" element={<Posts />}></Route>
			</Routes>  
        </div>
    );
};

export default AppRouter;