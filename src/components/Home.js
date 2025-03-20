import React from 'react';

const Home = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/yunus-emre-korkmaz-1ba287208/",
      icon: "/portfolio/assets/icons/linkedin.svg",
      alt: "LinkedIn"
    },
    {
      href: "https://github.com/dolphinium",
      icon: "/portfolio/assets/icons/github.svg",
      alt: "Github"
    },
    {
      href: "https://huggingface.co/dolphinium",
      icon: "/portfolio/assets/icons/huggingface.svg",
      alt: "Huggingface"
    },
    {
      href: "mailto:official.yunusemrekorkmaz@gmail.com",
      icon: "/portfolio/assets/icons/gmail.svg",
      alt: "mail"
    }
  ];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in">
              <span className="block mb-2">Hi, I'm Yunus Emre Korkmaz</span>
              <span className="block text-blue-300">Fresh Graduate Computer Engineer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mt-6 animate-fade-in-delay">
              Specializing in the field of <span className="font-semibold text-blue-300">AI & Machine Learning</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <img
                  src={link.icon}
                  alt={link.alt}
                  className="w-8 h-8 hover:opacity-80 transition-opacity duration-200"
                />
              </a>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl w-48 text-center"
            >
              View Projects
            </a>
            <a
              href="/portfolio/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-200 w-48 text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Add some custom styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.5s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Home;
