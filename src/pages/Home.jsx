import { Link } from "react-router-dom";
import profileimage from "../assets/profileimage.jpeg";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6 bg-transparent relative z-10"
    >
      <img
        src={profileimage}
        alt="Profile"
        className="w-50 h-50 rounded-full border-4 border-blue-500 shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold">
        Hi, I am <span className="text-blue-500">Dalima Sahu</span> 👋
      </h1>

      <TypeAnimation
        sequence={[
          "Android Developer",
          2000,
          "React & Firebase Enthusiast",
          2000,
          "Problem Solver",
          2000,
          "Tech Enthusiast",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl text-blue-600 mt-2"
      />

      <p className="text-black-900 mt-4 max-w-lg">
        A passionate Android developer with a passion for crafting innovative
        applications and solving complex real-world challenges
      </p>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <a href="#projects">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-400 transition">
            View Projects
          </button>
        </a>
        <a href="#contact">
          <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition">
            Contact Me
          </button>
        </a>
      </div>
    </section>
  );
}
