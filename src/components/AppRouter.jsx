import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/indexRouter";
import { AuthContext } from "../context/indexContext";

const AppRouter = () => {
 const {isAuth, setIsAuth} = useContext(AuthContext)

	return ( 
		 isAuth  ? <Routes>
		 {privateRoutes.map((route, index) => {
			 return (
				 <Route key={index} path={route.path} element={<route.component />}></Route>
			 );
		 })};
		
	 </Routes>  : 
			<Routes>
			{publicRoutes.map((route, index) => {
				return (
					<Route key={index} path={route.path} element={<route.component />}></Route>
				);
			})};
		   
		</Routes>
		
	);
};

export default AppRouter;
