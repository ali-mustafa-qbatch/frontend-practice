const FeaturesSection = () => {
    const features = [
        {
            id: 1,
            heading: 'Advanced Features',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla neque omnis dolore explicabo, voluptatem quo.',
            imageLink: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
            altText: 'a person working on a laptop'
        },
        {
            id: 2,
            heading: 'Advanced Features',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla neque omnis dolore explicabo, voluptatem quo.',
            imageLink: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
            altText: 'a creative workspace'
        },
        {
            id: 3,
            heading: 'Advanced Features',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla neque omnis dolore explicabo, voluptatem quo.',
            imageLink: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
            altText: 'a modern office setting'
        }
    ]
    return (
        <section>
            <div className="relative bg-[#121d2d] text-white overflow-hidden">
                <div className="h-150 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
                    <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Simplify operating and manage <br /> with transparency
                    </h1>
                </div>
                <svg
                    className="absolute bottom-0 left-0 w-full h-16"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                >
                    <path d="M1440,0 L0,100 L0,100 L1440,100 Z" fill="white" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center md:justify-items-stretch relative z-10">
                {features.map((feature) => (
                    <div key={feature.id} className="relative -bottom-16 transform -translate-y-2/3">
                        <div className="absolute top-45 left-4 w-full h-100 border border-gray-400 opacity-30 z-0 transform -translate-y-1/2"></div>

                        <button className="w-18 h-18 bg-[#2274ea] text-[#ecf3fc] rounded-full flex items-center justify-center mb-5 absolute top-0 left-0 transform translate-x-10 -translate-y-8 z-10 font-['Brush_Script_MT'] text-3xl">
                            <span role="img" aria-label="feature number">{feature.id}</span>
                        </button>

                        <img
                            src={feature.imageLink}
                            alt={feature.altText}
                            className="relative z-0 h-100 w-full"
                        />

                        <h1 className="text-[#2b3546] text-2xl md:text-2xl font-bold leading-tight my-2 font-playfair">
                            {feature.heading}
                        </h1>
                        <p className="text-[#7d818a] mb-8 max-w-lg font-roboto text-lg">
                            {feature.text}
                        </p>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturesSection