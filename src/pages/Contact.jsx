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
      className="min-h-screen flex flex-col items-center justify-center bg-transparent px-6 py-12"
    >
      <h2 className="text-4xl font-bold text-gray-900 text-center">
        📞 Let's Connect!
      </h2>
      <p className="text-gray-800 mt-2 text-center">
        Feel free to reach out to me via any of the channels below.
      </p>

      {/* Contact Info Card */}
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg border border-white/20 mt-6 w-full max-w-lg">
        <div className="space-y-6 text-lg text-gray-800">
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
            <a
              href={`tel:${contactInfo.phone}`}
              className="hover:text-green-500"
            >
              {contactInfo.phone}
            </a>
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
        {contactInfo.socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-gray-700 hover:text-blue-500 hover:scale-110 transition"
          >
            {social.icon === "FaGithub" && <FaGithub />}
            {social.icon === "FaLinkedin" && <FaLinkedin />}
            {social.icon === "FaEnvelope" && <FaEnvelope />}
          </a>
        ))}
      </div>
    </section>
  );
}
