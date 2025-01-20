import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center">About Me</h2>
        
        <p className="text-lg">
          My name is Yunus Emre Korkmaz, and I am a recent graduate of Eskisehir Technical University with a B.Sc. in Computer Engineering. For the past three years, I have specialized in AI and AI-related technologies, driven by a deep passion for advancing my skills in this field. I am particularly interested in cutting-edge technologies and aspire to contribute to impactful projects on a global scale.
        </p>
        
        <p className="text-lg mt-4">
          Over my career, I have worked on various AI projects, including generative AI models, chatbots, image captioning, and object detection. You can explore these projects on my Hugging Face and GitHub profiles. Alongside my AI expertise, I have hands-on experience as a back-end developer. I worked part-time for 1 year and 8 months at a start-up called "Hergele Mobility," where I gained valuable experience in software development using .NET technologies. Additionally, I completed a Software Architect internship at Anadolu University Computer Research and Application Center, where I developed web applications, including database design and front-end components using the .NET framework and Angular.
        </p>
        
        <p className="text-lg mt-4">
          I am a strong believer in continuous learning and personal growth, striving to improve myself in all aspects of life.
        </p>

        <h3 className="text-2xl font-semibold mt-8">Education</h3>
        <div className="mt-4 space-y-6">
          <div>
            <h4 className="text-xl font-semibold">Eskisehir Technical University (2019-2024)</h4>
            <p>B.Sc. in Computer Engineering, GPA: 3.37/4, Eskişehir, Türkiye</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Eyüp Aygar Science High School (2014-2018)</h4>
            <p>High School Diploma, GPA: 91.06/100, Mersin, Türkiye</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mt-8">Skills</h3>
        <ul className="list-disc list-inside mt-4 text-left mx-auto max-w-lg">
          <li><strong>Programming Languages:</strong> Python (primary), C#, Java</li>
          <li><strong>Python Libraries:</strong> Numpy, Pandas, Matplotlib, Seaborn, Pytorch, Scikit-learn, OpenCV, Keras, os, PIL, Gradio, </li>
          {/* <li><strong>Deep Learning Frameworks:</strong> TensorFlow, PyTorch</li> */}
          <li><strong>Other Technologies:</strong> SQL (PostgreSQL, MySQL), MongoDB, Git</li>
          <li><strong>Areas of Expertise:</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Data mining, Data analysis, Predictive modeling</li>
              <li>Natural Language Processing (NLP), Large Language Models (LLMs)</li>
              <li>Generative AI models, Computer Vision, Object Detection</li>
              <li>YOLO, Hugging Face Spaces, Gradio</li>
            </ul>
          </li>
          <li><strong>Languages:</strong> Native Turkish speaker; Advanced in English</li>
        </ul>

        <div className="flex flex-col items-center mb-10">
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
