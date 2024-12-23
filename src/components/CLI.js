import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CLI = () => {
    const [command, setCommand] = useState("");
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();

    const handleCommand = (e) => {
        if (e.key === "Enter") {
            let response;
            switch (command.toLowerCase()) {
                case "resume":
                    navigate("/resume");
                    response = "Navigating to Resume...";
                    break;
                case "projects":
                    navigate("/projects");
                    response = "Navigating to Projects...";
                    break;
                case "blog":
                    navigate("/blog");
                    response = "Navigating to Blog...";
                    break;
                case "contact":
                    navigate("/contact");
                    response = "Navigating to Contact...";
                    break;
                default:
                    response = "Invalid command. Try 'resume', 'projects', 'blog', or 'contact'.";
            }

            setHistory((prev) => [...prev, { command, response }]);
            setCommand("");
        }
    };

    return (
        <motion.div
            className="cli bg-gray-900 text-green-400 p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <p className="font-mono text-sm text-gray-500">
                Welcome to the CLI! Type a command: (e.g., resume, projects, blog, contact)
            </p>
            <div className="history mt-4">
                {history.map((item, index) => (
                    <motion.div
                        key={index}
                        className="font-mono text-sm text-gray-400"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <span className="text-green-500">$ {item.command}</span>
                        <br />
                        <span>{item.response}</span>
                    </motion.div>
                ))}
            </div>
            <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="Type your command here..."
                className="bg-gray-800 text-green-400 font-mono w-full mt-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
        </motion.div>
    );
};

export default CLI;
