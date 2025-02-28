import {
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { contactInfo } from "../data/contacts";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-transparent dark:bg-gray-900 px-6 py-12"
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        📞 Let's Connect!
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        Feel free to reach out to me via any of the channels below.
      </p>

      {/* 📌 Contact Info Card */}
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg border border-white/20 mt-6 w-full max-w-lg">
        <div className="space-y-6 text-lg text-gray-800 dark:text-white">
          {/* 📧 Email */}
          <div className="flex items-center space-x-3 hover:scale-105 transition">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-blue-500 transition"
            >
              {contactInfo.email}
            </a>
          </div>

          {/* 📞 Phone */}
          <div className="flex items-center space-x-3 hover:scale-105 transition">
            <FaPhone className="text-green-500 text-2xl" />
            <span>{contactInfo.phone}</span>
          </div>

          {/* 📍 Location */}
          <div className="flex items-center space-x-3 hover:scale-105 transition">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            <span>{contactInfo.location}</span>
          </div>
        </div>
      </div>

      {/* 🔗 Social Media Icons */}
      <div className="flex space-x-6 mt-6">
        {contactInfo.socialLinks.map((social, index) => {
          const IconComponent = {
            FaGithub,
            FaLinkedin,
            FaEnvelope,
          }[social.icon];

          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-gray-700 dark:text-white hover:text-blue-500 hover:scale-110 transition"
            >
              <IconComponent />
            </a>
          );
        })}
      </div>
    </section>
  );
}
