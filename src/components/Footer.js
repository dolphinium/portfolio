import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Yunus Emre Korkmaz. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
        <a href="https://www.linkedin.com/in/yunus-emre-korkmaz-1ba287208/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://github.com/dolphinium" target="_blank" rel="noopener noreferrer">
        <img src="/assets/icons/github.svg" alt="Github" className="w-8 h-8" />
        </a>
        <a href="https://huggingface.co/dolphinium" target="_blank" rel="noopener noreferrer">
        <img src="/assets/icons/huggingface.svg" alt="Huggingface" className="w-8 h-8" />
        </a>
        <a href="mailto:official.yunusemrekorkmaz@gmail.com">
        <img src="/assets/icons/gmail.svg" alt="mail" className="w-8 h-8" />
        </a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
        <img src="/assets/icons/pdf.svg" alt="pdf" className="w-8 h-8" />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
