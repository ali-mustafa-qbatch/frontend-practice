import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<><Navbar /><HeroSection /></>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
