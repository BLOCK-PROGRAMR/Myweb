// import React from "react";
// import CLI from "../components/CLI";

// const Home = () => {
//     return (
//         <div className="home flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
//             {/* Hero Section */}
//             <header className="flex flex-col items-center text-center px-4 py-8">
//                 <h1 className="text-6xl font-extrabold leading-tight tracking-wide font-sans">
//                     <span className="text-black">@0xscater</span>
//                 </h1>
//                 <h2 className="mt-4 text-2xl font-semibold text-gray-700">
//                     Blockchain Innovator | Layer 2 Architect | Smart Contract Specialist
//                 </h2>

//                 <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
//                     Welcome to my digital portfolio. Dive into my journey of{" "}
//                     <span className="text-green-600 font-semibold">blockchain innovation</span>,
//                     specializing in <span className="italic text-green-800">Layer 2 scaling solutions</span> and{" "}
//                     <span className="font-bold text-black">secure smart contract development</span>.
//                     Together, let's redefine the future of decentralized technology.
//                 </p>
//             </header>

//             {/* CLI Component */}
//             <section className="w-full max-w-4xl mt-12 p-8 bg-white shadow-lg rounded-xl border border-gray-200">
//                 <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
//                     Explore My Portfolio via CLI
//                 </h2>
//                 <p className="text-center text-gray-500 mb-4">
//                     Interact with my portfolio using the command line interface below.
//                     Type commands to uncover my skills, projects, and experiences.
//                 </p>
//                 <CLI />
//             </section>

//         </div>
//     );
// };

// export default Home;
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Shield } from 'lucide-react';
import { Link } from "react-router-dom";

const Home = () => {
    const features = [
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Smart Contract Development",
            description: "Specialized in writing secure and efficient smart contracts for DeFi protocols and NFT platforms."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Security Auditing",
            description: "Expert in identifying vulnerabilities and ensuring robust security measures in blockchain applications."
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Layer 2 Solutions",
            description: "Building scalable Layer 2 solutions to enhance blockchain performance and reduce costs."
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
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Blockchain Innovation
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
                            Transforming ideas into secure, scalable blockchain solutions.
                            Specializing in DeFi protocols, Layer 2 scaling, and smart contract security.
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
                    </motion.div>
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "20+", label: "Projects Completed" },
                            { number: "50+", label: "Smart Contracts Audited" },
                            { number: "15+", label: "DeFi Protocols" },
                            { number: "100%", label: "Client Satisfaction" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="text-4xl font-bold text-purple-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;