import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-gray-50"
    >
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-6">
          <Briefcase size={24} className="text-blue-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Looking for Opportunities
        </h2>
        <p className="text-gray-600 text-lg">
          I am a fresher passionate about frontend development and web design. 
          Skilled in HTML, CSS, JavaScript, Bootstrap, React.js, and learning Redux. 
          I am eager to contribute to innovative projects and grow as a frontend developer. 
          Actively seeking job opportunities where I can apply my skills and learn new technologies.
        </p>
      </div>
    </section>
  );
};

export default Experience;