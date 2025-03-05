import { useState } from "react";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to open modal with images of selected project
  const openModal = (project) => {
    setCurrentProject(project);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
    setCurrentProject(null);
    setCurrentImageIndex(0);
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    );
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-transparent px-6 py-12"
    >
      <h2 className="text-4xl font-bold text-gray-900">🚀 My Projects</h2>
      <p className="text-black-900 mt-2">
        Some of the projects I have worked on.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            {/* Project Title */}
            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            <p className="text-black-900 mt-2">{project.description}</p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex mt-4 space-x-4">
              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>

              {/* Live Demo (Only if available) */}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
              )}

              {/* Show Images Button (Only if images exist) */}
              {project.images && project.images.length > 0 && (
                <button
                  onClick={() => openModal(project)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400 transition"
                >
                  Show Images
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {showModal && currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 overflow-y-auto">
          {/* Modal Container (Now Scrollable & Fully Visible) */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%] max-w-[600px] max-h-[90vh] overflow-auto">
            {/* Close Button (Always Visible & Fixed at the Top-Right) */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-gray-700 text-white p-2 rounded-full hover:bg-red-500 transition z-10"
            >
              ✖
            </button>

            {/* Image Display (Ensure It's Not Cut Off) */}
            <div className="w-full flex items-center justify-center mt-10">
              <img
                src={currentProject.images[currentImageIndex]}
                alt="Project Screenshot"
                className="max-w-full max-h-[70vh] rounded-lg object-contain"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center w-full mt-4">
              <button
                onClick={prevImage}
                className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
              >
                ◀
              </button>

              <span className="text-gray-700">
                {currentImageIndex + 1} / {currentProject.images.length}
              </span>

              <button
                onClick={nextImage}
                className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
