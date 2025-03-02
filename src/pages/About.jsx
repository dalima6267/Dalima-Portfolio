export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-2 bg-transparent "
    >
      {/* Name and Title */}
      <h2 className="text-3xl font-bold text-gray-900 ">Dalima Sahu</h2>
      <p className="text-blue-500 text-base font-medium mt-1">
        Android & Web Developer
      </p>

      {/* Summary Section */}
      <div className="max-w-3xl mt-4 text-black-9 leading-relaxed text-sm sm:text-base">
        <p>
          I am a final-year student passionate about programming, specializing
          in Android development with skills in Java, Kotlin, and Python.
          Additionally, I have experience with web technologies, including HTML,
          CSS, JavaScript, and React. My major project involves building a
          grammar error detection tool using machine learning, which is
          integrated into an Android app.
        </p>
        <p className="mt-2">
          I thrive on challenges and continuously explore emerging technologies
          to deliver impactful solutions.
        </p>
      </div>

      {/* Skills & Technologies */}
      <div className="mt-6 w-full">
        <h3 className="text-xl font-bold text-gray-800">
          💡 Skills & Technologies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-3 max-w-4xl mx-auto">
          {[
            { name: "Kotlin", img: "/images/kotlin.png" },
            { name: "Java", img: "/images/java.png" },
            { name: "Python", img: "/images/python.png" },
            { name: "React", img: "/images/react.png" },
            { name: "Firebase", img: "/images/firebase.png" },
            { name: "SQL", img: "/images/database.png" },
            { name: "HTML & CSS", img: "/images/html.png" },
            { name: "Android Studio", img: "/images/android.png" },
            { name: "Tailwind CSS", img: "/images/tailwind-css.png" },
            { name: "Git/GitHub", img: "/images/github.png" },
            { name: "REST API", img: "/images/api.png" },
            { name: "JavaScript", img: "/images/javascript.png" },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-blue-500 text-white px-2 py-1 rounded-md shadow-md 
                         text-xs sm:text-sm font-medium transform hover:scale-105 transition"
            >
              <img src={skill.img} alt={skill.name} className="w-5 h-5 mb-1" />
              <span className="text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="mt-6">
        <a
          href="https://drive.google.com/drive/folders/1bRZeT08mDFBswkNYdfYXPUSs8HZiY4GN?usp=sharing"
          download="Dalima_Sahu_Resume.pdf"
          className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition transform hover:scale-105 text-sm"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}
