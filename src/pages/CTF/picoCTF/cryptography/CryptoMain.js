// import { px } from "framer-motion";
// import React from "react";
// import { Link } from "react-router-dom";

// const CryptoMain = () => {


//     return (
//         <div max-w-lg mx-auto p-8 text-white mt-24>
//             <div>

//                 <h1 className="text-4xl text-center text-red-500 mb-6">
//                     Challenges
//                 </h1>
//                 <div className="space-y-4">
//                     <h2>
//                         <Link
//                             to="/ctfs/picoctf/crypto/challenge1"
//                             className="block text-xl font-semibold text-blue-400 hover:text-blue-300 transition duration-300"
//                         >
//                             Rotaiton
//                         </Link>
//                     </h2>
//                     <h2>
//                         <Link
//                             to="/ctfs/picoctf/crypto/challenge2"
//                             className="block text-xl font-semibold text-blue-400 hover:text-blue-300 transition duration-300"
//                         >
//                             Rsa encryption
//                         </Link>
//                     </h2>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default CryptoMain


import React from "react";
import { Link } from "react-router-dom";

const CryptoMain = () => {
    return (
        <div className="max-w-lg  p-8 text-white mt-24"> {/* Increased margin-top */}
            <div>
                <h1 className="text-4xl text-center text-red-500 mb-6">
                    Crypto Challenges
                </h1>
                <div className="space-y-4">
                    <h2>
                        <Link
                            to="/ctfs/picoctf/crypto/challenge1"
                            className="block text-xl font-semibold text-blue-400 hover:text-blue-300 transition duration-300"
                        >
                            ⚡ Rotation
                        </Link>
                    </h2>
                    <h2>
                        <Link
                            to="/ctfs/picoctf/crypto/challenge2"
                            className="block text-xl font-semibold text-blue-400 hover:text-blue-300 transition duration-300"
                        >
                            ⚡RSA Encryption
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default CryptoMain;
