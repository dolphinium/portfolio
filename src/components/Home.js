import React from 'react';

const Home = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-blue-900 text-white p-0">
      <h1 className="text-5xl font-bold">Hi, I'm Yunus Emre Korkmaz, </h1> 
      <h1 className="text-5xl font-bold">a Fresh Graduate Computer Engineer</h1>
      <p className="mt-4 text-xl">Specializing in the field of <b>AI & Machine Learning</b></p>
      
      <div className="flex mt-8 space-x-4">
        <a href="https://www.linkedin.com/in/yunus-emre-korkmaz-1ba287208/" target="_blank" rel="noopener noreferrer">
        <img src="%PUBLIC_URL%/assets/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8 hover:opacity-50 transition-opacity duration-200" />
        </a>
        <a href="https://github.com/dolphinium" target="_blank" rel="noopener noreferrer">
        <img src="/assets/icons/github.svg" alt="Github" className="w-8 h-8 hover:opacity-50 transition-opacity duration-200" />
        </a>
        <a href="https://huggingface.co/dolphinium" target="_blank" rel="noopener noreferrer">
        <img src="/assets/icons/huggingface.svg" alt="Huggingface" className="w-8 h-8 hover:opacity-50 transition-opacity duration-200" />
        </a>
        <a href="mailto:official.yunusemrekorkmaz@gmail.com">
        <img src="/assets/icons/gmail.svg" alt="mail" className="w-8 h-8 hover:opacity-50 transition-opacity duration-200" />
        </a>
      </div>

      <div className="mt-8">
        <a href="#projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Discover My Projects</a>
      </div>
      <div className="flex flex-col items-center mb-10">
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Resume
          </a>
        </div>
    </section>
  );
};

export default Home;
