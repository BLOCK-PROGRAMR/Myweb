import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
    const [nameIndex, setNameIndex] = useState(0);
    const names = ["Nithinkumar", "Its mee 0xscater"];

    // Switch between names every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setNameIndex((prevIndex) => (prevIndex + 1) % names.length);
        }, 2000); // 2 seconds
        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    return (
        <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto flex justify-between items-center p-4">
                {/* Logo Section */}
                <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Dynamic name switching with fade animation */}
                    <h1 className="text-2xl font-extrabold text-green-400 tracking-wider">
                        <motion.span
                            key={names[nameIndex]}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {names[nameIndex]}
                        </motion.span>
                    </h1>
                </motion.div>

                {/* Navigation Links */}
                <motion.ul
                    className="flex space-x-6 text-sm font-medium"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <li>
                        <Link
                            to="/"
                            className="hover:text-green-400 transition-colors duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/resume"
                            className="hover:text-green-400 transition-colors duration-300"
                        >
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className="hover:text-green-400 transition-colors duration-300"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            className="hover:text-green-400 transition-colors duration-300"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="hover:text-green-400 transition-colors duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                </motion.ul>

                {/* Call-to-Action Button */}
                <motion.div
                    className="hidden md:block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        to="/contact"
                        className="bg-green-400 text-gray-900 px-4 py-2 rounded-md shadow-md hover:bg-green-500 transition-all duration-300"
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </nav>
        </header>
    );
};

export default Header;
