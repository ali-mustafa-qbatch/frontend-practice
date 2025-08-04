import { useState } from 'react';
import logo from '../../public/navbar_logo.png'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <nav style={{backgroundColor: "#121d2d"}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="inline-flex">
                        <a href="/">
                            <img src={logo} alt="Qbatch Logo" className="h-14 w-auto" />
                        </a>
                        <div className="hidden md:flex space-x-6 items-center">
                            <a href="#" className="text-gray-400 hover:text-gray-200 px-3 py-2 text-sm font-medium">Pricing</a>
                            <a href="#" className="text-gray-400 hover:text-gray-200 px-3 py-2 text-sm font-medium">About</a>
                            <a href="#" className="text-gray-400 hover:text-gray-200 px-3 py-2 text-sm font-medium">Blog</a>
                            <a href="#" className="text-gray-400 hover:text-gray-200 px-3 py-2 text-sm font-medium">Wall of Love</a>
                            <div className="relative inline-block text-left">
                                <button
                                    onClick={toggleDropdown}
                                    className="text-gray-400 hover:text-gray-200 px-3 py-2 text-sm font-medium inline-flex items-center"
                                    type="button"
                                >
                                    Resources
                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>

                                <div className={`absolute right-0 mt-2 w-44 z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700`}>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="hidden md:flex space-x-6">
                        <a href="/sign-in" className="text-gray-400 hover:text-gray-200 px-3 py-2 text-sm font-medium">Sign in</a>
                        <a href="#" className="text-gray-200 hover:text-blue-600 px-3 py-2 text-sm font-medium inline-flex gap-1">
                            Request a Demo <span className="ml-2" style={{color:"#1b5cb7"}}>→</span>
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button type="button" onClick={toggleMenu} className="text-gray-700 hover:text-gray-100" aria-controls="mobile-menu" aria-expanded={isOpen} aria-label="Toggle navigation menu" >
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
                <div className="px-4 pt-4 pb-6 space-y-2 border-b shadow-sm" style={{backgroundColor:"#121d2d"}}>
                    <a href="#" className="block text-gray-400 hover:text-gray-200 px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                        Pricing
                    </a>
                    <a href="#" className="block text-gray-400 hover:text-gray-200 px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                        About
                    </a>
                    <a href="#" className="block text-gray-400 hover:text-gray-200 px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                        Blog
                    </a>
                    <a href="#" className="block text-gray-400 hover:text-gray-200 px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                        Wall of Love
                    </a>

                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="w-full text-left text-gray-400 hover:text-gray-200 px-3 py-2 text-base font-medium inline-flex items-center justify-between"
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
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Dashboard</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Settings</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Earnings</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Sign out</a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <hr />
                    <a href="/sign-in" className="block text-gray-400 hover:text-gray-200 px-3 py-2 text-base font-medium">
                        Sign in
                    </a>
                    <a href="#" className="text-gray-200 hover:text-blue-600 px-3 py-2 text-base font-medium inline-flex items-center gap-1">
                        Request a Demo <span className="ml-2" style={{color:"#1b5cb7"}}>→</span>
                    </a>
                </div>
            </div>

        </nav >
    );
};