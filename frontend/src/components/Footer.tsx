import logo from '../assets/footer_logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="text-center lg:text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
                        <div className="sm:justify-start">
                            <Link to="/">
                                <img src={logo} alt="Qbatch Logo" className="h-14 w-auto sm:mx-0 md:mx-0 mx-auto" />
                            </Link>
                            <h6 className="mb-4 flex items-center justify-center font-semibold md:justify-start">
                                The smarter way to start your new idea.
                            </h6>
                        </div>

                        <div className="">
                            <h6
                                className="mb-4 flex justify-center font-semibold md:justify-start">
                                How it works
                            </h6>
                            <p className="mb-4">
                                <a className="text-[#6b737d] cursor-pointer hover:text-[#5997ee]">Overview</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-[#6b737d] cursor-pointer hover:text-[#5997ee]">Pricing</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-[#6b737d] cursor-pointer hover:text-[#5997ee]">Service Areas</a>
                            </p>
                        </div>

                        <div className="">
                            <h6
                                className="mb-4 flex justify-center font-semibold md:justify-start">
                                Resources
                            </h6>
                            <p className="mb-4">
                                <a className="text-[#6b737d] cursor-pointer hover:text-[#5997ee]">Customer Stories</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-[#6b737d] cursor-pointer hover:text-[#5997ee]">Knowledge Base</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-[#6b737d] cursor-pointer hover:text-[#5997ee]">Contact Us</a>
                            </p>
                        </div>

                        <div className="">
                            <h6
                                className="mb-4 flex justify-center font-semibold md:justify-start">
                                Products
                            </h6>
                            <p className="mb-4">
                                <a className="text-[#6b737d] cursor-pointer hover:text-[#5997ee]">Corporate Partners</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-[#6b737d] cursor-pointer hover:text-[#5997ee]">Secure Identity</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-[#6b737d] cursor-pointer hover:text-[#5997ee]">Legal Help</a>
                            </p>
                            <p>
                                <a className="text-[#6b737d] cursor-pointer hover:text-[#5997ee]">First Capital</a>
                            </p>
                        </div>

                        <div className="">
                            <h6
                                className="mb-4 flex justify-center font-semibold md:justify-start">
                                Company
                            </h6>
                            <p className="mb-4">
                                <a className="text-[#6b737d] cursor-pointer hover:text-[#5997ee]">About Us</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-[#6b737d] cursor-pointer hover:text-[#5997ee]">Careers</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-[#6b737d] cursor-pointer hover:text-[#5997ee]">Terms of Use</a>
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="border-t border-[#6b737d]" />
            </div>

            <div className="p-6 flex justify-between">
                <span className="text-[#6b737d]">Cruip uses cookies to ensure you get the best experience on our website.</span>
                <a className="font-semibold text-[#7779eb] hover:text-[#4f52e9]" href="#">I agree</a>
            </div>
        </footer>
    )
}

export default Footer