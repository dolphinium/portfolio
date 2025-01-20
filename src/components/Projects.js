import React from 'react';
import BloodSugarDisplay from "./BloodSugarDisplay";

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-100 text-black">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-5xl md:text-6xl font-bold mb-10">Projects</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
                    <div className="bg-white p-6 rounded shadow-md flex flex-col h-full">
                        {/* Title */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-2xl md:text-3xl font-semibold text-center">Nightscout CGM Monitoring</h3>
                        </div>
                        <div>
                        <BloodSugarDisplay />
                        </div>

                        {/* Description */}
                        <div className="mt-4">
                            <p className="text-gray-700 text-xl line-clamp-6">
                                <a class='text-sky-400/100' href="https://github.com/nightscout/cgm-remote-monitor/"
                                    target="_blank"
                                    rel="noopener noreferrer">Nightscout</a> is an open-source project. I hosted my own website using a remote server for my own needs.
                                If you wonder the numbers in the middle of the navbar, it shows my current blood glucose level and trend direction via api.
                            </p>
                        </div>
                        

                        {/* Image */}
                        <div className="mt-4">
                            <img
                                src="/assets/images/nightscout.jpeg"
                                alt="Rescuenet Damaged Building Detection"
                                className="w-full h-auto object-contain rounded"
                            />
                        </div>
                        {/* GitHub Link */}
                        <div className="mt-auto pt-4">
                            <a
                                href="https://t1dcow.mooo.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Check my live metrics :)
                            </a>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md flex flex-col h-full">
                        {/* Title */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-2xl md:text-3xl font-semibold text-center">Rescuenet Damaged Building Detection</h3>
                        </div>

                        {/* Description */}
                        <div className="mt-4">
                            <p className="text-gray-700 text-xl line-clamp-3">Developed an object detection model to identify damaged buildings using drone imagery.</p>
                        </div>

                        {/* Image */}
                        <div className="mt-4">
                            <img
                                src="/assets/images/dbd-thumbnail.jpeg"
                                alt="Rescuenet Damaged Building Detection"
                                className="w-full h-auto object-contain rounded"
                            />
                        </div>
                        {/* GitHub Link */}
                        <div className="mt-auto pt-4">
                            <a
                                href="https://github.com/dolphinium/rescuenet-damaged-building-detection"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                View on GitHub
                            </a>
                            <a
                                href="https://huggingface.co/spaces/dolphinium/rescuenet-damaged-building-detection"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md flex flex-col h-full">
                        {/* Title */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-2xl md:text-3xl font-semibold text-center">ETL Pipeline for Linkedin and Reddit</h3>
                        </div>

                        {/* Description */}
                        <div className="mt-4">
                            <p className="text-gray-700 text-xl line-clamp-8">
                                A complete ETL pipeline project which actively extracts data from Linkedin and Reddit.
                                You can visit website login as a viewer and inspect the DAGs. <br></br>
                                Used technologies: apache-airflow, AWS S3, celery, redis, sqlite, docker, pandas, numpy.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="mt-4">
                            <img
                                src="/assets/images/airflow.jpeg"
                                alt="airflow"
                                className="w-full h-auto object-contain rounded"
                            />
                        </div>
                        {/* GitHub Link */}
                        <div className="mt-auto pt-4">
                            <a
                                href="https://github.com/dolphinium/data-eng-practises"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                View on GitHub
                            </a>
                            <a
                                href="http://airflow-test.mooo.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Check the live results (username: 'test-user' : pw: 'test')
                            </a>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md flex flex-col h-full">
                        {/* Title */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-2xl md:text-3xl font-semibold text-center">UAV Building Detection</h3>
                        </div>

                        {/* Description */}
                        <div className="mt-4">
                            <p className="text-gray-700 text-xl line-clamp-3">Developed an object detection model to identify buildings with YOLOv10 using UAVOD-10 dataset</p>
                        </div>

                        {/* Image */}
                        <div className="mt-4">
                            <img
                                src="/assets/images/uavod-comparison.jpeg"
                                alt="Rescuenet Damaged Building Detection"
                                className="w-full h-auto object-contain rounded"
                            />
                        </div>
                        {/* GitHub Link */}
                        <div className="mt-auto pt-4">
                            <a
                                href="https://github.com/dolphinium/uav-building-detection"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md flex flex-col h-full">
                        {/* Title */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-2xl md:text-3xl font-semibold text-center">Archery Score Prediction using EEG Signals</h3>
                        </div>

                        {/* Description */}
                        <div className="mt-4">
                            <p className="text-gray-700 text-xl line-clamp-3">A regression project for predicting the scores of archery shootings using EEG Signals. SVR RF and LSTM models has been used for this task.</p>
                        </div>

                        {/* Image */}
                        <div className="mt-4">
                            <img
                                src="/assets/images/archery-eeg.jpg"
                                alt="Rescuenet Damaged Building Detection"
                                className="w-full h-auto object-contain rounded"
                            />
                        </div>
                        {/* GitHub Link */}
                        <div className="mt-auto pt-4">
                            <a
                                href="https://github.com/dolphinium/archery-eeg-signals"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md flex flex-col h-full">
                        {/* Title */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-2xl md:text-3xl font-semibold text-center">Odometer Classification using TRODO dataset</h3>
                        </div>

                        {/* Description */}
                        <div className="mt-4">
                            <p className="text-gray-700 text-xl line-clamp-3">This project aims to classify odometer types and extract mileage information using the TRODO dataset</p>
                        </div>

                        {/* Image */}
                        <div className="mt-4">
                            <img
                                src="/assets/images/trodo.jpg"
                                alt="Rescuenet Damaged Building Detection"
                                className="w-full h-auto object-contain rounded"
                            />
                        </div>
                        {/* GitHub Link */}
                        <div className="mt-auto pt-4">
                            <a
                                href="https://github.com/dolphinium/trodo-odometer-classification"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md flex flex-col h-full">
                        {/* Title */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-2xl md:text-3xl font-semibold text-center">Auto-Readme</h3>
                        </div>

                        {/* Description */}
                        <div className="mt-4">
                            <p className="text-gray-700 text-xl line-clamp-3">Auto readme generator is a simple readme generator. GPT-4o model API is used to create a readme according to existing codebase</p>
                        </div>

                        {/* Image */}
                        <div className="mt-4">
                            <img
                                src="/assets/images/auto-readme.jpg"
                                alt="Rescuenet Damaged Building Detection"
                                className="w-full h-auto object-contain rounded"
                            />
                        </div>
                        {/* GitHub Link */}
                        <div className="mt-auto pt-4">
                            <a
                                href="https://github.com/dolphinium/auto-readme"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md flex flex-col h-full">
                        {/* Title */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-2xl md:text-3xl font-semibold text-center">MenuMapper</h3>
                        </div>

                        {/* Description */}
                        <div className="mt-4">
                            <p className="text-gray-700 text-xl line-clamp-3">MenuMapper is a simple menu exploration back-end project. Spring and MongoDB utilized for this purpose</p>
                        </div>

                        {/* Image */}
                        <div className="mt-4">
                            <img
                                src="/assets/images/menumapper.jpg"
                                alt="Rescuenet Damaged Building Detection"
                                className="w-full h-auto object-contain rounded"
                            />
                        </div>
                        {/* GitHub Link */}
                        <div className="mt-auto pt-4">
                            <a
                                href="https://github.com/dolphinium/MenuMapper"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );



};

export default Projects;
