// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Header = () => {
//     const [nameIndex, setNameIndex] = useState(0);
//     const names = ["MyPortfolio"];

//     // Switch between names every 5 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setNameIndex((prevIndex) => (prevIndex + 1) % names.length);
//         }, 2000); // 2 seconds
//         return () => clearInterval(interval); // Clean up interval on unmount
//     }, []);

//     return (
//         <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
//             <nav className="container mx-auto flex justify-between items-center p-4">
//                 {/* Logo Section */}
//                 <motion.div
//                     className="flex items-center space-x-2"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     {/* Dynamic name switching with fade animation */}
//                     <h1 className="text-2xl font-extrabold text-green-400 tracking-wider">
//                         <motion.span
//                             key={names[nameIndex]}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             {names[nameIndex]}
//                         </motion.span>
//                     </h1>
//                 </motion.div>

//                 {/* Navigation Links */}
//                 <motion.ul
//                     className="flex space-x-6 text-sm font-medium"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <li>
//                         <Link
//                             to="/"
//                             className="hover:text-green-400 transition-colors duration-300"
//                         >
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="/resume"
//                             className="hover:text-green-400 transition-colors duration-300"
//                         >
//                             Resume
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="/projects"
//                             className="hover:text-green-400 transition-colors duration-300"
//                         >
//                             Projects
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="/blog"
//                             className="hover:text-green-400 transition-colors duration-300"
//                         >
//                             Blog
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="/contact"
//                             className="hover:text-green-400 transition-colors duration-300"
//                         >
//                             Contact
//                         </Link>
//                     </li>
//                 </motion.ul>

//                 {/* Call-to-Action Button */}
//                 <motion.div
//                     className="hidden md:block"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <Link
//                         to="/contact"
//                         className="bg-green-400 text-gray-900 px-4 py-2 rounded-md shadow-md hover:bg-green-500 transition-all duration-300"
//                     >
//                         Get in Touch
//                     </Link>
//                 </motion.div>
//             </nav>
//         </header>
//     );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Github, ExternalLink } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link
                        to="/"
                        className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                    >
                        @0xscater
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-8">
                            {[
                                { path: '/', label: 'Home' },
                                { path: '/projects', label: 'Projects' },
                                { path: '/resume', label: 'Resume' },
                                { path: '/blog', label: 'Blog' },
                            ].map(({ path, label }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`relative py-2 ${isActive(path)
                                            ? 'text-purple-600 font-medium'
                                            : 'text-gray-600 hover:text-purple-600'
                                        } transition-colors duration-300`}
                                >
                                    {label}
                                    {isActive(path) && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            <a
                                href="https://github.com/BLOCK-PROGRAMR"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <Link
                                to="/contact"
                                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden pt-4"
                    >
                        <div className="flex flex-col space-y-4">
                            {[
                                { path: '/', label: 'Home' },
                                { path: '/projects', label: 'Projects' },
                                { path: '/resume', label: 'Resume' },
                                { path: '/blog', label: 'Blog' },
                            ].map(({ path, label }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`${isActive(path)
                                            ? 'text-purple-600 font-medium'
                                            : 'text-gray-600'
                                        } py-2 block`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                )}
            </nav>
        </header>
    );
};

export default Header;