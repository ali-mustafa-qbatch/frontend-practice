import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HeroSection />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
