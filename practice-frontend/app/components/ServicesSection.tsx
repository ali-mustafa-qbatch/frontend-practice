export function ServicesSection() {
    const services = [
        {
            id: 1,
            heading: "Robust Workflow",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla neque omnis dolore explicabo, voluptatem quo.",
            icon: "📄"
        },
        {
            id: 2,
            heading: "Robust Workflow",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla neque omnis dolore explicabo, voluptatem quo.",
            icon: "🚀"
        },
        {
            id: 3,
            heading: "Robust Workflow",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla neque omnis dolore explicabo, voluptatem quo.",
            icon: "💡"
        },
        {
            id: 4,
            heading: "Robust Workflow",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla neque omnis dolore explicabo, voluptatem quo.",
            icon: "🛠️"
        },
        {
            id: 5,
            heading: "Robust Workflow",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla neque omnis dolore explicabo, voluptatem quo.",
            icon: "🔒"
        },
        {
            id: 6,
            heading: "Robust Workflow",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla neque omnis dolore explicabo, voluptatem quo.",
            icon: "📈"
        }
    ]
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center relative z-10">
                {
                    services.map((service) => (
                        <div key={service.id}>
                            <button className="w-18 h-18 bg-[#2274ea] rounded-full flex items-center justify-center mb-5">
                                <span role="img" aria-label="document" className="text-2xl">{service.icon}</span>
                            </button>
                            <h1 className="text-[#2b3546] text-2xl md:text-2xl font-bold leading-tight my-2 font-playfair">
                                <b>{service.heading}</b>
                            </h1>
                            <p className="text-[#7d818a] mb-8 max-w-md font-roboto text-lg">
                                {service.text}
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    )
};