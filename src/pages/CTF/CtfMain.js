

import React from "react";
import { Link } from "react-router-dom";

const CtfMain = () => {
    return (
        <div className="max-w-lg  p-8  text-white  my-16">
            <h1 className="text-4xl text-center text-red-500 mb-6">CTF Challenges</h1>
            <div className="space-y-4">
                <h2>
                    <Link
                        to="/CTF/CTF1"
                        className="block text-xl font-semibold text-blue-400 hover:text-blue-300 transition duration-300"
                    >
                        ⚡Ethernaut
                    </Link>
                </h2>
                <h2>
                    <Link
                        to="/ctfs/picoctf"
                        className="block text-xl font-semibold text-blue-400 hover:text-blue-300 transition duration-300"
                    >
                        ⚡PicoCTF
                    </Link>
                </h2>
            </div>
        </div>
    );
};

export default CtfMain;
