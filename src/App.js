// import React from "react";
// import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Resume from "./pages/Resume";
// import Projects from "./pages/Projects";
// import BlogPortal from "./pages/Blog/BlogPortal";
// import Contact from "./pages/Contact";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import CtfMain from "./pages/CTF/CtfMain";
// import Pchallenges from "./pages/CTF/picoCTF/Pchallenges";
// import Crypto1 from "./pages/CTF/picoCTF/cryptography/Crypto1";


// const App = () => {
//     return (
//         <Router>
//             <div className="flex flex-col min-h-screen">
//                 <Header />
//                 <main className="flex-grow container mx-auto p-4">
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/resume" element={<Resume />} />
//                         <Route path="/projects" element={<Projects />} />
//                         <Route path="/blog" element={<BlogPortal />} />
//                         <Route path="/contact" element={<Contact />} />
//                         <Route path="/ctfs" element={<CtfMain />} />
//                         <Route path="/ctfs/picoctf" element={<Pchallenges />} />
//                     </Routes>
//                 </main>
//                 <Footer />
//                 <Route path="/ctfs/picoctf/crypto/challenge1" element={<Crypto1 />}
//                 <Route path="/404" element={<h1>404 Not Found</h1>} />
//             </div>
//         </Router>
//     );
// };

// export default App;
import React from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import BlogPortal from "./pages/Blog/BlogPortal";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CtfMain from "./pages/CTF/CtfMain";
import Pchallenges from "./pages/CTF/picoCTF/Pchallenges";
import Crypto1 from "./pages/CTF/picoCTF/cryptography/Crypto1";
import CryptoMain from "./pages/CTF/picoCTF/cryptography/CryptoMain";

const App = () => {
    const location = useLocation();

    // Define routes where Header & Footer should NOT be displayed
    const noHeaderFooterRoutes = ["/ctfs/picoctf/crypto/challenge1"];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Conditionally Render Header */}
            {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}

            <main className="flex-grow container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<BlogPortal />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/ctfs" element={<CtfMain />} />
                    <Route path="/ctfs/picoctf" element={<Pchallenges />} />
                    <Route path="/ctfs/picoctf/crypto/challenge1" element={<Crypto1 />} />
                    <Route path="/ctfs/picoctf/crypto" element={<CryptoMain />} />
                    <Route path="*" element={<h1 className="text-center text-3xl font-bold mt-10">404 Not Found</h1>} />
                </Routes>
            </main>

            {/* Conditionally Render Footer */}
            {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
