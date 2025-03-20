import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Bewell Technology",
      duration: "July 2024 - Aug 2024",
      details: [
        "Developed an Object Detection Model using YOLO, achieving 83% mAP@0.5 in detecting damaged buildings and extracting geolocation from drone imagery.",
        "Conducted performance benchmarks on YOLO models (V5-V8-V10) using Colab with GPU, optimizing for speed and accuracy trade-offs.",
        "Monitored and compared model performance metrics using CometML to identify the most effective architecture.",
        "Hosted an end-to-end demo website on HuggingFace Spaces, providing users with real-time access to building detection outputs.",
        "Managed code versioning and collaborated with teammates using GitLab, ensuring smooth project workflow and delivery.",
      ],
    },
    {
      title: "Anadolu University Computer Research and Application Center",
      duration: "September 2023 – October 2023",
      details: [
        "Developed and designed an end-to-end Web based Survey Application on Web Platform for Anadolu University by using .NET Framework and Angular.",
        "Utilized PostgreSQL for the database.",
        "GitHub and Microsoft Azure used for version control and task scheduling."
      ],
    },
    {
      title: "Hergele Mobility",
      duration: "March 2022 – October 2023",
      details: [
        "Developed Web based Admin Dashboard for Electrical Scooters by using .NET Framework with MVC pattern",
        "Utilized MongoDB for the database",
        "Used Jira and GitHub for task scheduling and version control."
      ],
    },
    // Add other experiences here...
  ];

  return (
    <section id="work-experience" className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16 text-center">Work Experience</h2>
        
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
          
          <div className="flex flex-col space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot - hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-md z-20"></div>
                
                {/* Mobile dot */}
                <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-md z-20"></div>
                
                {/* Content container with responsive layout */}
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  {/* Mobile timeline line */}
                  <div className="md:hidden absolute left-2 top-4 bottom-0 w-0.5 bg-gray-300 -z-10"></div>
                  
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-8 md:pl-0`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
                      <div className="flex flex-col">
                        <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-2">{exp.title}</h3>
                        <span className="text-gray-600 font-medium mb-4 text-sm md:text-base">{exp.duration}</span>
                        <ul className="list-none space-y-3">
                          {exp.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-700 text-sm md:text-base">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;