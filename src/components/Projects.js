import React, { useState } from 'react';
import BloodSugarDisplay from "./BloodSugarDisplay";

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const projects = [
        {
            title: "Nightscout CGM Monitoring",
            description: "Nightscout is an open-source project. I hosted my own website using a remote server for my own needs. If you wonder the numbers in the middle of the navbar, it shows my current blood glucose level and trend direction via api.",
            image: "/portfolio/assets/images/nightscout.jpeg",
            category: "healthcare",
            techStack: ["Node.js", "MongoDB", "REST API"],
            liveDemo: "https://t1dcow.mooo.com/",
            github: null,
            hasBloodSugar: true
        },
        {
            title: "Rescuenet Damaged Building Detection",
            description: "Developed an object detection model to identify damaged buildings using drone imagery.",
            image: "/portfolio/assets/images/dbd-thumbnail.jpeg",
            category: "ai",
            techStack: ["YOLO", "Python", "Computer Vision"],
            liveDemo: "https://huggingface.co/spaces/dolphinium/rescuenet-damaged-building-detection",
            github: "https://github.com/dolphinium/rescuenet-damaged-building-detection"
        },
        {
            title: "ETL Pipeline for Linkedin and Reddit",
            description: "A complete ETL pipeline project which actively extracts data from Linkedin and Reddit. Used technologies: apache-airflow, AWS S3, celery, redis, sqlite, docker, pandas, numpy.",
            image: "/portfolio/assets/images/airflow.jpeg",
            category: "data",
            techStack: ["Apache Airflow", "AWS S3", "Docker", "Python"],
            liveDemo: "http://airflow-test.mooo.com/",
            github: "https://github.com/dolphinium/data-eng-practises",
            credentials: {username: "test-user", password: "test"}
        },
        {
            title: "UAV Building Detection",
            description: "Developed an object detection model to identify buildings with YOLOv10 using UAVOD-10 dataset",
            image: "/portfolio/assets/images/uavod-comparison.jpeg",
            category: "ai",
            techStack: ["YOLOv10", "Python", "Deep Learning"],
            github: "https://github.com/dolphinium/uav-building-detection"
        },
        {
            title: "Archery Score Prediction using EEG Signals",
            description: "A regression project for predicting the scores of archery shootings using EEG Signals. SVR RF and LSTM models has been used for this task.",
            image: "/portfolio/assets/images/archery-eeg.jpg",
            category: "ai",
            techStack: ["PyTorch", "Scikit-learn", "Signal Processing"],
            github: "https://github.com/dolphinium/archery-eeg-signals"
        },
        {
            title: "Odometer Classification using TRODO dataset",
            description: "This project aims to classify odometer types and extract mileage information using the TRODO dataset",
            image: "/portfolio/assets/images/trodo.jpg",
            category: "ai",
            techStack: ["Computer Vision", "Deep Learning", "Python"],
            github: "https://github.com/dolphinium/trodo-odometer-classification"
        },
        {
            title: "Auto-Readme",
            description: "Auto readme generator is a simple readme generator. GPT-4 model API is used to create a readme according to existing codebase",
            image: "/portfolio/assets/images/auto-readme.jpg",
            category: "tools",
            techStack: ["OpenAI API", "Python", "NLP"],
            github: "https://github.com/dolphinium/auto-readme"
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'ai', label: 'AI & ML' },
        { id: 'data', label: 'Data Engineering' },
        { id: 'healthcare', label: 'Healthcare' },
        { id: 'tools', label: 'Tools' }
    ];

    const filteredProjects = selectedCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-gray-100 to-white">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">Projects</h2>
                <p className="text-xl text-gray-600 text-center mb-12">Explore my latest work and side projects</p>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-2 rounded-full transition-all duration-300 ${
                                selectedCategory === category.id
                                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {project.hasBloodSugar && <BloodSugarDisplay />}
                                
                                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 mt-auto">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-center"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {project.liveDemo && (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-center"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                                
                                {project.credentials && (
                                    <div className="mt-3 text-sm text-gray-500 text-center">
                                        Demo credentials: {project.credentials.username} / {project.credentials.password}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
