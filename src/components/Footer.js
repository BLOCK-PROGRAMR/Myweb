
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-8">
            <div className="container mx-auto flex flex-col items-center space-y-4">
                {/* Social Media Links */}
                <div className="flex space-x-6">
                    <a
                        href="https://www.instagram.com/the_lpun/?next=%2F__lpun__%2F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nithinkumar-pedda-865a1826a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://x.com/0x_Scater"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                        aria-label="Twitter"
                    >
                        <FaTwitter size={24} />
                    </a>
                </div>

                {/* Quote */}
                <p className="text-center text-sm text-gray-300 italic">
                    "Thinking is more powerful than knowledge. Tackle small problems, and try to find solutions in unique ways."
                </p>

                {/* Divider */}
                <div className="w-1/2 border-t border-gray-600"></div>

                {/* Footer Text */}
                <div className="text-center">
                    <p>© {new Date().getFullYear()} Nithin Kumar. All Rights Reserved.</p>
                    <p className="text-xs text-gray-400 mt-2">
                        Built with <span className="text-green-400">React</span>, <span className="text-blue-400">Tailwind CSS</span>, and <span className="text-purple-400">Parcel</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

// import React from "react";
// import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// const Footer = () => {
//     return (
//         <footer className="bg-gray-900 text-white py-6 mt-8">
//             <div className="container mx-auto flex flex-col items-center space-y-4">
//                 {/* Social Media Links */}
//                 <div className="flex space-x-6">
//                     <a
//                         href="https://www.instagram.com/the_lpun/?next=%2F__lpun__%2F"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
//                         aria-label="Instagram"
//                     >
//                         <FaInstagram size={24} />
//                     </a>
//                     <a
//                         href="https://www.linkedin.com/in/nithinkumar-pedda-865a1826a/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
//                         aria-label="LinkedIn"
//                     >
//                         <FaLinkedin size={24} />
//                     </a>
//                     <a
//                         href="https://x.com/0x_Scater"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//                         aria-label="Twitter"
//                     >
//                         <FaTwitter size={24} />
//                     </a>
//                 </div>

//                 {/* Quote */}
//                 <p className="text-center text-sm text-gray-300 italic">
//                     "Thinking is more powerful than knowledge. Tackle small problems, and try to find solutions in unique ways."
//                 </p>

//                 {/* Divider */}
//                 <div className="w-1/2 border-t border-gray-600"></div>

//                 {/* Footer Text */}
//                 <div className="text-center">
//                     <p>© {new Date().getFullYear()} Nithin Kumar. All Rights Reserved.</p>
//                     <p className="text-xs text-gray-400 mt-2">
//                         Built with <span className="text-green-400">React</span>, <span className="text-blue-400">Tailwind CSS</span>, and <span className="text-purple-400">Parcel</span>.
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

