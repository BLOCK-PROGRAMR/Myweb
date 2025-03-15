
// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Code2, Cpu, Shield } from 'lucide-react';
// import { Link } from "react-router-dom";

// const Home = () => {
//     const features = [
//         {
//             icon: <Code2 className="w-6 h-6" />,
//             title: "Smart Contract Development",
//             description: "Specialized in writing secure and efficient smart contracts for DeFi protocols and NFT platforms."
//         },
//         {
//             icon: <Shield className="w-6 h-6" />,
//             title: "Security Auditing",
//             description: "Expert in identifying vulnerabilities and ensuring robust security measures in blockchain applications."
//         },
//         {
//             icon: <Cpu className="w-6 h-6" />,
//             title: "Layer 2 Solutions",
//             description: "Building scalable Layer 2 solutions to enhance blockchain performance and reduce costs."
//         }
//     ];

//     return (
//         <div className="min-h-screen">
//             {/* Hero Section */}
//             <section className="pt-32 pb-16 px-4">
//                 <div className="container mx-auto max-w-6xl">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center"
//                     >
//                         <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
//                             My self Nithinkumar
//                         </h1>
//                         <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
//                             Transforming ideas into secure, scalable blockchain solutions.
//                             Specializing in DeFi protocols, Layer 2 scaling, and smart contract security.
//                         </p>
//                         <div className="flex flex-col sm:flex-row justify-center gap-4">
//                             <Link
//                                 to="/projects"
//                                 className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
//                             >
//                                 View Projects
//                                 <ArrowRight className="w-5 h-5" />
//                             </Link>
//                             <Link
//                                 to="/contact"
//                                 className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-3 rounded-full hover:border-purple-500 transition-all duration-300"
//                             >
//                                 Get in Touch
//                             </Link>
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section className="py-20 bg-gray-50">
//                 <div className="container mx-auto max-w-6xl px-4">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {features.map((feature, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                                 className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
//                             >
//                                 <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
//                                     {feature.icon}
//                                 </div>
//                                 <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
//                                 <p className="text-gray-600">{feature.description}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Stats Section */}
//             <section className="py-20">
//                 <div className="container mx-auto max-w-6xl px-4">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//                         {[
//                             { number: "5+", label: "Projects Completed" },
//                             { number: "6+", label: "Smart Contracts Audited" },
//                             { number: "8+", label: "DeFi Protocols" },
//                             { number: "100%", label: "Client Satisfaction" }
//                         ].map((stat, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                             >
//                                 <div className="text-4xl font-bold text-purple-600 mb-2">
//                                     {stat.number}
//                                 </div>
//                                 <div className="text-gray-600">{stat.label}</div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Home;


// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Code2, Lock, BookOpen, Target } from 'lucide-react';
// import { Link } from "react-router-dom";

// const Home = () => {
//     const features = [
//         {
//             icon: <Target className="w-6 h-6" />,
//             title: "CTFs & Challenges",
//             description: "Sharpening security skills by solving real-world smart contract security challenges.",
//             link: "/ctfs"
//         },
//         {
//             icon: <BookOpen className="w-6 h-6" />,
//             title: "Security Blog",
//             description: "Sharing insights on blockchain security, audits, and best practices.",
//             link: "/blog"
//         },
//         {
//             icon: <Lock className="w-6 h-6" />,
//             title: "Smart Contract Auditing",
//             description: "Providing in-depth security analysis and audits for DeFi protocols and DApps.",
//             link: "/auditings"
//         }
//     ];

//     return (
//         <div className="min-h-screen">
//             {/* Hero Section */}
//             <section className="pt-32 pb-16 px-4">
//                 <div className="container mx-auto max-w-6xl">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center"
//                     >
//                         <h1 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
//                             Nithinkumar Pedda
//                         </h1>
//                         <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
//                             Blockchain Security Researcher | Smart Contract Auditor | Web3 Developer
//                         </p>
//                         <div className="flex flex-col sm:flex-row justify-center gap-4">
//                             <Link
//                                 to="/projects"
//                                 className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
//                             >
//                                 View Projects
//                                 <ArrowRight className="w-5 h-5" />
//                             </Link>
//                             <Link
//                                 to="/contact"
//                                 className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-3 rounded-full hover:border-purple-500 transition-all duration-300"
//                             >
//                                 Get in Touch
//                             </Link>
//                             <div>
//                                 I am perfect in{" "}
//                                 <h2 className="text-purple-600">{".sol, .rs, .py, .js, .ts"}</h2>
//                             </div>

//                         </div>
//                     </motion.div>
//                 </div>
//             </section>
//             <section>
//                 <div className="container mx-auto max-w-6xl px-4">

//                     <h2>What i do every day u dont know if u know then u can see below </h2>
//                 </div>
//             </section>
//             {/* Features Section */}
//             <section className="py-20 bg-gray-50">
//                 <div className="container mx-auto max-w-6xl px-4">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {features.map((feature, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                                 className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
//                             >
//                                 <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
//                                     {feature.icon}
//                                 </div>
//                                 <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
//                                 <p className="text-gray-600">{feature.description}</p>
//                                 <Link to={feature.link} className="text-purple-600 mt-4 inline-block hover:underline">
//                                     Learn More →
//                                 </Link>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Home;


import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Lock, BookOpen, Target } from 'lucide-react';
import { Link } from "react-router-dom";

const Home = () => {
    const features = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "CTFs & Challenges",
            description: "Sharpening security skills by solving real-world smart contract security challenges.",
            link: "/ctfs"
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Security Blog",
            description: "Sharing insights on blockchain security, audits, and best practices.",
            link: "/blog"
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Smart Contract Auditing",
            description: "Providing in-depth security analysis and audits for DeFi protocols and DApps.",
            link: "/auditings"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Nithinkumar Pedda
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
                            Blockchain Security Researcher | Smart Contract Auditor | Web3 Developer
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/projects"
                                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                View Projects
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/contact"
                                className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-3 rounded-full hover:border-purple-500 transition-all duration-300"
                            >
                                Get in Touch
                            </Link>
                        </div>
                        <p className="mt-6 text-lg">
                            I am proficient in{" "}
                            <span className="text-purple-600 font-semibold">{".sol, .rs, .py, .js, .ts"}</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-10">
                <div className="container mx-auto max-w-6xl px-4 text-center">
                    <h2 className="text-2xl font-semibold">Explore my daily work and contributions below.</h2>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                                <Link to={feature.link} className="text-purple-600 mt-4 inline-block hover:underline">
                                    Click to see →
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
