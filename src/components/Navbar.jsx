import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

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
        <link
          href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap"
          rel="stylesheet"
        />
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-blue-400 transition duration-300"
          style={{ fontFamily: "'UnifrakturMaguntia', cursive" }}
        >
          Dalima Sahu
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"} {/* Toggle between close (✖) and menu (☰) */}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-white">
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
      </div>

      {/* Mobile Menu (Hidden by default) */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-900 text-white space-y-4 py-4">
          {[
            { path: "/", title: "Home" },
            { path: "/about", title: "About" },
            { path: "/projects", title: "Projects" },
            { path: "/contact", title: "Contact" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="block py-2 px-4 text-lg hover:bg-gray-700 w-full text-center"
                onClick={() => setMenuOpen(false)} // Close menu after clicking a link
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
