import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
