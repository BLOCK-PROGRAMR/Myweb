import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div
            className="p-6 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-bold text-center mb-6">Contact Information</h2>

            <p className="text-center text-lg mb-10">
                Feel free to reach out to me for any blockchain-related inquiries or professional opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email */}
                <div className="flex items-center space-x-4">
                    <span className="w-6 h-6 text-green-400 font-bold">📧</span>
                    <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-gray-700">
                            <a href="mailto:0xscater@gmail.com" className="hover:underline">0xscater@gmail.com</a>
                        </p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                    <span className="w-6 h-6 text-green-400 font-bold">📞</span>
                    <div>
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p className="text-gray-700">+91 8328026105</p>
                    </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-4">
                    <span className="w-6 h-6 text-green-400 font-bold">🔗</span>
                    <div>
                        <h3 className="text-lg font-semibold">LinkedIn</h3>
                        <p className="text-gray-700">
                            <a href="https://www.linkedin.com/in/nithinkumar-pedda-865a1826a" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Nithinkumar Pedda
                            </a>
                        </p>
                    </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center space-x-4">
                    <span className="w-6 h-6 text-green-400 font-bold">🐙</span>
                    <div>
                        <h3 className="text-lg font-semibold">GitHub</h3>
                        <p className="text-gray-700">
                            <a href="https://github.com/BLOCK-PROGRAMR" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                BLOCK-PROGRAMR
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
