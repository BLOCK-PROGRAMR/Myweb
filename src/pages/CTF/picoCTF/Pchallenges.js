import React from "react";
import { Link } from "react-router-dom";

const Pchallenges = () => {
    return (
        <div className="p-6 text-red-500 rounded-lg  my-24">
            <h1 className="text-3xl font-bold mb-4">PicoCTF</h1>
            <div className="space-y-2">
                <Link to="/ctfs/picoctf/crypto" className="block text-xl font-semibold text-red-400 hover:underline">⚡Cryptography</Link>
                <h2 className="text-xl font-semibold ">⚡Binary Exploitation</h2>
                <h2 className="text-xl font-semibold "> ⚡Web Exploitation</h2>
                <h2 className="text-xl font-semibold  ">⚡Forensics</h2>
                <h2 className="text-xl font-semibold ">⚡Cryptography</h2>
                <h2 className="text-xl font-semibold ">⚡Reverse Engineering</h2>
                <h2 className="text-xl font-semibold">⚡General Skills</h2>
            </div>
        </div>
    );
};

export default Pchallenges;
