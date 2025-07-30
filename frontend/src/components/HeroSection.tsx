import Navbar from './Navbar'

const HeroSection = () => {
	return (
		<>
			<Navbar />
			<section className="relative bg-[#121d2d] text-white overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
					<div>
						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
							Create stunning <br /> web experiences
						</h1>
						<p className="text-gray-300 mb-8 max-w-md">
							Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<a href="#" className="bg-[#2173ea] hover:bg-blue-700 text-white text-sm font-medium py-3 px-6 inline-flex items-center justify-center">
								Request Demo <span className="ml-2">→</span>
							</a>
							<a href="#" className="bg-[#334155] bg-opacity-10 hover:bg-opacity-20 text-white text-sm font-medium py-3 px-6 text-center">
								Explore Product
							</a>
						</div>
					</div>

					<div className="relative">
						<img
							src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
							alt="a girl"
							className="rounded-md shadow-lg"
						/>
						<div className="absolute inset-0 flex items-center justify-center opacity-70">
							<button className="w-14 h-14 rounded-full bg-white bg-opacity-90 flex items-center justify-center shadow-md">
								<svg
									className="w-5 h-5 text-blue-600"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M6 4l10 6-10 6V4z" />
								</svg>
							</button>
						</div>
						{/* <div className="absolute top-4 right-4 bottom-4 left-4 border border-gray-500 opacity-30"></div> */}
					</div>
				</div>

				<svg
					className="absolute bottom-0 left-0 w-full h-16"
					viewBox="0 0 1440 100"
					preserveAspectRatio="none"
				>
					<path d="M1440,0 L0,100 L0,100 L1440,100 Z" fill="white" />
				</svg>
			</section>
		</>
	);
};

export default HeroSection;
