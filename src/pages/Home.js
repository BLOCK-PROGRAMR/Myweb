import React from "react";
import { motion } from "framer-motion";
import CLI from "../components/CLI";

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="home flex flex-col items-center justify-center h-screen bg-gradient-animated text-white"
        >
            <h1 className="text-5xl font-bold text-center">Welcome to My Innovative Portfolio</h1>
            <p className="mt-4 text-lg text-center">
                Explore my work, blog, and more through a CLI interface or navigation.
            </p>
            <CLI />
        </motion.div>
    );
};

export default Home;
