import React from 'react';

const About = () => {
  const education = [
    {
      school: "Eskisehir Technical University",
      degree: "B.Sc. in Computer Engineering",
      period: "2019-2024",
      location: "Eskişehir, Türkiye",
      gpa: "GPA: 3.37/4"
    },
    {
      school: "Eyüp Aygar Science High School",
      degree: "High School Diploma",
      period: "2014-2018",
      location: "Mersin, Türkiye",
      gpa: "GPA: 91.06/100"
    }
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["Python (primary)", "C#", "Java"]
    },
    {
      category: "Python Libraries",
      items: ["Numpy", "Pandas", "Matplotlib", "Seaborn", "Pytorch", "Scikit-learn", "OpenCV", "Keras", "Gradio"]
    },
    {
      category: "Other Technologies",
      items: ["SQL (PostgreSQL, MySQL)", "MongoDB", "Git"]
    },
    {
      category: "Areas of Expertise",
      items: [
        "Data mining, Data analysis, Predictive modeling",
        "Natural Language Processing (NLP), Large Language Models (LLMs)",
        "Generative AI models, Computer Vision, Object Detection",
        "YOLO, Hugging Face Spaces, Gradio"
      ]
    },
    {
      category: "Languages",
      items: ["Native Turkish speaker", "Advanced in English"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center text-gray-900">About Me</h2>
          
          {/* Bio Section */}
          <div className="prose prose-lg max-w-none mb-16 text-gray-700 space-y-6">
            <p className="leading-relaxed">
              My name is Yunus Emre Korkmaz, and I am a recent graduate of Eskisehir Technical University with a B.Sc. in Computer Engineering. For the past three years, I have specialized in AI and AI-related technologies, driven by a deep passion for advancing my skills in this field. I am particularly interested in cutting-edge technologies and aspire to contribute to impactful projects on a global scale.
            </p>
            
            <p className="leading-relaxed">
              Over my career, I have worked on various AI projects, including generative AI models, chatbots, image captioning, and object detection. You can explore these projects on my Hugging Face and GitHub profiles. Alongside my AI expertise, I have hands-on experience as a back-end developer. I worked part-time for 1 year and 8 months at a start-up called "Hergele Mobility," where I gained valuable experience in software development using .NET technologies. Additionally, I completed a Software Architect internship at Anadolu University Computer Research and Application Center, where I developed web applications, including database design and front-end components using the .NET framework and Angular.
            </p>
            
            <p className="leading-relaxed">
              I am a strong believer in continuous learning and personal growth, striving to improve myself in all aspects of life.
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">{edu.school}</h4>
                  <p className="text-gray-700 font-medium">{edu.degree}</p>
                  <p className="text-gray-600">{edu.period}</p>
                  <p className="text-gray-600">{edu.location}</p>
                  <p className="text-gray-600 font-medium mt-2">{edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">{skill.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Button */}
          <div className="mt-12 text-center">
            <a
              href="/portfolio/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
