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
      <div className="container mx-auto px-4 ">
      <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center">Work Experience</h2>
        <div className="flex flex-col space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="text-gray-600">{exp.duration}</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;