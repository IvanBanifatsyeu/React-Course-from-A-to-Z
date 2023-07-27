import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { useFontsLoad } from "./hooks/useFontsLoad";
import { AuthContext } from "./context/indexContext";
import { useEffect, useState } from "react";

function App() {
	useFontsLoad("Droid Sans", "Chilanka", "VT323");
	const [isAuth, setIsAuth] = useState(false)

	useEffect(() => {
		if (localStorage.getItem('auth') === 'true') {
			setIsAuth(true)
		}
	}, [])

	return (
		<AuthContext.Provider value={{isAuth, setIsAuth}}>
			<BrowserRouter>
				<Navbar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
