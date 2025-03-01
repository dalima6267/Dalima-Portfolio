export default function About() {
  return (
    <section
      id="about"
      className="h-screen flex flex-col justify-center items-center text-center px-6 bg-transparent dark:bg-gray-900"
    >
      {/* Name and Title */}
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        Dalima Sahu
      </h2>
      <p className="text-blue-500 text-lg font-medium mt-1">
        Android & Web Developer
      </p>

      {/* Summary Section */}
      <div className="max-w-3xl mt-6 text-black-900 dark:text-gray-300 leading-relaxed">
        <p>
          I am a final-year student passionate about programming, specializing
          in Android development with skills in Java, Kotlin, and Python..
          Additionally, I have experience with web technologies, including HTML,
          CSS, JavaScript, and React. My major project involves building a
          grammar error detection tool using machine learning, which is
          integrated into an Android app.
        </p>
        <p className="mt-4">
          I thrive on challenges and continuously explore emerging technologies
          to deliver impactful solutions.
        </p>
      </div>

      {/* Skills & Technologies */}
      <div className="mt-8 w-full">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
          💡 Skills & Technologies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 max-w-4xl mx-auto">
          {[
            { name: "Kotlin", emoji: "📱" },
            { name: "Java", emoji: "☕" },
            { name: "Python", emoji: "🐍" },
            { name: "React", emoji: "⚛️" },
            { name: "Firebase", emoji: "🔥" },
            { name: "SQL", emoji: "💾" },
            { name: "Html Css", emoji: "🌐" },
            { name: "Android Studio", emoji: "📲" },
            { name: "Tailwind CSS", emoji: "🎨" },
            { name: "Git/GitHub", emoji: "🐙" },
            { name: "REST API", emoji: "🔗" },
            { name: "UI/UX Design", emoji: "🎭" },
          ].map((skill, index) => (
            <span
              key={index}
              className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md 
                         text-sm sm:text-base font-medium transform hover:scale-105 transition"
            >
              <span className="text-xl mr-2">{skill.emoji}</span> {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="mt-8">
        <a
          href="/Dalima_Sahu_Resume.pdf"
          download="Dalima_Sahu_Resume.pdf"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition transform hover:scale-105"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}
