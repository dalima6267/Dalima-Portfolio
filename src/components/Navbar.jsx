import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 shadow-md ${
        scrolling ? "bg-gray-900/90 backdrop-blur-md" : "bg-gray-800"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">𝔇𝔞𝔩𝔦𝔪𝔞 𝔖𝔞𝔥𝔲</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-10 text-white absolute left-1/2 transform -translate-x-1/2">
          {[
            { path: "/", title: "Home" },
            { path: "/about", title: "About" },
            { path: "/projects", title: "Projects" },
            { path: "/contact", title: "Contact" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="relative hover:text-blue-400 transition duration-300"
              >
                {item.title}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl text-white"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
