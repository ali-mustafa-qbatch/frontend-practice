import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import RequestDemoSection from "./components/RequestDemoSection";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Navbar />
								<HeroSection />
								<ServicesSection />
								<FeaturesSection />
								<RequestDemoSection />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
