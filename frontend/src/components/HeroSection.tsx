import { useEffect, useRef, useState } from 'react';
import heroVideo from '../assets/video.mp4';

const HeroSection = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const handleTogglePlay = () => {
		const video = videoRef.current;
		if (!video) return;

		if (video.paused || video.ended) {
			video.play();
		} else {
			video.pause();
		}
	};

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const handlePlay = () => setIsPlaying(true);
		const handlePause = () => setIsPlaying(false);

		video.addEventListener('play', handlePlay);
		video.addEventListener('pause', handlePause);

		return () => {
			video.removeEventListener('play', handlePlay);
			video.removeEventListener('pause', handlePause);
		};
	}, []);

	return (
		<section className="relative bg-[#121d2d] text-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-['Playfair_Display']">
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

				<div className="relative w-full max-w-[464px] aspect-video mx-auto">
					<div className="absolute top-4 left-4 w-full h-full border border-gray-400 opacity-30 z-0"></div>

					<video
						ref={videoRef}
						onClick={handleTogglePlay}
						className="relative z-10 w-full h-full object-cover cursor-pointer"
						muted
						loop
						playsInline
						controls={false}
					>
						<source src={heroVideo} type="video/mp4" />
						Your browser does not support the video tag.
					</video>

					{!isPlaying && (
						<div className="absolute inset-0 flex items-center justify-center z-20">
							<button
								onClick={handleTogglePlay}
								className="w-20 h-20 rounded-full bg-white bg-opacity-80 flex items-center justify-center shadow-md transition-opacity duration-700"
							>
								<svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
									<path d="M6 4l10 6-10 6V4z" />
								</svg>
							</button>
						</div>
					)}
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
	);
};

export default HeroSection;
