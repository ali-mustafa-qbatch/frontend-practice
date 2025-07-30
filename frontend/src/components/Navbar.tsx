import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Qbatch_logo.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <nav className="bg-white border-b shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="inline-flex">
                        <Link to="/">
                            <img src={logo} alt="Qbatch Logo" className="h-8 w-auto" />
                        </Link>
                        <div className="hidden md:flex space-x-6">
                            <Link to="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Pricing</Link>
                            <Link to="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">About</Link>
                            <Link to="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Blog</Link>
                            <Link to="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Wall of Love</Link>
                            <div className="relative inline-block text-left">
                                <button
                                    onClick={toggleDropdown}
                                    className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium inline-flex items-center"
                                    type="button"
                                >
                                    Resources
                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>

                                <div className={`absolute right-0 mt-2 w-44 z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700`}>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="hidden md:flex space-x-6">
                        <Link to="/sign-in" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Sign in</Link>
                        <Link to="#" className="text-black-700 hover:text-blue-600 px-3 py-2 text-sm font-medium inline-flex gap-1">
                            Request a Demo <p style={{ color: "blue" }}>→</p>
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button type="button" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded={isOpen} aria-label="Toggle navigation menu" >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-b shadow-sm">
                    <Link to="#" className="block text-gray-500 hover:text-blue-600 px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                        Pricing
                    </Link>
                    <Link to="#" className="block text-gray-500 hover:text-blue-600 px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link to="#" className="block text-gray-500 hover:text-blue-600 px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                        Blog
                    </Link>
                    <Link to="#" className="block text-gray-500 hover:text-blue-600 px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                        Wall of Love
                    </Link>

                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="w-full text-left text-gray-500 hover:text-blue-600 px-3 py-2 text-base font-medium inline-flex items-center justify-between"
                            type="button"
                        >
                            Resources
                            <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-sm">
                                <ul className="py-2 text-sm text-gray-700">
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Sign out</a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <hr />
                    <Link to="/sign-in" className="block text-gray-500 hover:text-blue-600 px-3 py-2 text-base font-medium">
                        Sign in
                    </Link>
                    <Link to="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium inline-flex items-center gap-1">
                        Request a Demo <span className="text-blue-600">→</span>
                    </Link>
                </div>
            </div>

        </nav >
    );
}

export default Navbar