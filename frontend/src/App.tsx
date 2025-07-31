import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import RequestDemoSection from "./components/RequestDemoSection";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";

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
								<Footer />
							</>
						}
					/>
					<Route
						path="/sign-in"
						element={
							<>
								<Navbar />
								<SignInForm />
								<Footer />
							</>
						}
					/>
					<Route
						path="/sign-up"
						element={
							<>
								<Navbar />
								<SignUpForm />
								<Footer />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
