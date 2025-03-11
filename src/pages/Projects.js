
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const Projects = () => (
//     <div className="p-6">
//         <h2 className="text-3xl font-bold">Projects</h2>
//         <p className="mt-4">I will update soon !</p>
//     </div>
// );
// export default Projects
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from "react-icons/fi";
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: 'DeFi(DSC)',
            description: 'A decentralized finance where u can swap coins ',
            technologies: ['Solidity', 'React', 'Web3.js', 'Hardhat'],
            githubUrl: 'https://github.com/BLOCK-PROGRAMR/DSC',
            imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832',
        },
        {
            title: 'NFT Marketplace',
            description: 'we can design your own nft based on requirements',
            technologies: ['Solidity', 'React', 'Ethers.js', 'IPFS', 'Foundry'],
            githubUrl: 'https://github.com/BLOCK-PROGRAMR/Emotion-NFT',
            imageUrl: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=2832',
        },
        // {
        //     title: 'Smart Contract Audit Tool',
        //     description: 'An automated tool for analyzing smart contracts and detecting common vulnerabilities.',
        //     technologies: ['Python', 'Solidity', 'React', 'Node.js'],
        //     githubUrl: 'https://github.com/BLOCK-PROGRAMR/smart-contract-auditor',
        //     imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=2832',
        // },
        // {
        //     title: 'Layer 2 Bridge',
        //     description: 'A bridge protocol for transferring assets between Ethereum and Layer 2 networks.',
        //     technologies: ['Solidity', 'React', 'Web3.js', 'Foundry'],
        //     githubUrl: 'https://github.com/BLOCK-PROGRAMR/l2-bridge',
        //     imageUrl: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=2832',
        // }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-12"
        >
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Projects</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore my blockchain development projects, from DeFi protocols to Layer 2 solutions.
                    Each project represents a step forward in decentralized technology.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    href="https://github.com/BLOCK-PROGRAMR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                >
                    <FiGithub className="w-5 h-5" />
                    View More on GitHub
                </a>
            </div>
        </motion.div>
    );
};

export default Projects;