import React from "react";
import { FiDownload } from "react-icons/fi"; // Icon for the download button

const Resume = () => {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center">Nithinkumar Pedda</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Summary</h2>
                <p className="mt-2">
                    Passionate enthusiast of blockchain technology with a strong foundation in smart contract auditing and decentralized finance (DeFi).
                    As a second-year Computer Science Engineering student at RGUKT Nuzvid, I am committed to transforming innovative ideas into secure, efficient smart contracts.
                    Currently focused on Layer 2 solutions and engaging in competitive audits, including Sherlock and CodeHawks.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Skills</h2>
                <ul className="list-disc ml-6 mt-2">
                    <li>MERN Stack</li>
                    <li>Blockchain Integration: Ether.js, Web3.js</li>
                    <li>Development Tools: Foundry, Hardhat</li>
                    <li>Auditing Tools: Slither, Aderyn, Fuzz Testing</li>
                    <li>Understanding of Blockchain Architecture</li>
                    <li>Proficient in Writing Ethereum Smart Contracts using Solidity</li>
                    <li>Learning Rust for Solana Development</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Languages</h2>
                <ul className="list-disc ml-6 mt-2">
                    <li>English (Fluent)</li>
                    <li>Hindi (Fluent)</li>
                    <li>Telugu (Native)</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Experience</h2>
                <h3 className="mt-2 font-medium">Fullstack Developer</h3>
                <p>CodeAlpha (Remote, India) | June 6, 2024 – September 30, 2024</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Engineered and launched dynamic websites, enhancing user experiences and contributing to multiple projects.</li>
                </ul>

                <h3 className="mt-4 font-medium">Auditor</h3>
                <p>Competitive Audits | Ongoing</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Participated in competitive audits, including Sherlock and CodeHawks, applying smart contract auditing skills to ensure security and efficiency.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Education</h2>
                <p>B.Tech in Computer Science | IIIT Nuzvid, Nuzvid, Andhra Pradesh</p>
                <p>Graduation Year: 2027</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Certifications</h2>
                <p>Namaste React | NamasteDev | March 2023</p>
                <p>Web3 Bootcamp | Udemy | January 2024</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold">Contact Information</h2>
                <p>Email: 0xscater@gmail.com</p>
                <p>Phone: +918328026105</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/nithinkumar-pedda-865a1826a" target="_blank" rel="noopener noreferrer" className="text-green-400">Nithinkumar Pedda</a></p>
                <p>GitHub: <a href="https://github.com/BLOCK-PROGRAMR" target="_blank" rel="noopener noreferrer" className="text-green-400">BLOCK-PROGRAMR</a></p>
            </section>

            {/* PDF Download Section */}
            <div className="text-center mt-10">
                <a
                    href="https://drive.google.com/file/d/15gKXS-iNAU68rloA8FtCQe1q5ZujVBdN/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-400 text-gray-900 px-6 py-3 rounded-md shadow-md hover:bg-green-500 transition-all duration-300 inline-flex items-center"
                >
                    <FiDownload className="mr-2" />
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default Resume;
