import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { useFontsLoad } from "./hooks/useFontsLoad";



function App() {
	 useFontsLoad('Droid Sans', 'Chilanka', 'VT323');

	return (
		<BrowserRouter>
			<Navbar />
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
