'use client';
import React, { useState, useEffect, useRef } from 'react';

const projects = [
    {
        name: 'StakeStats.net',
        text: 'picturespictures',
        beforeImage: '/media/humanitnow!/stakeold.png',
        afterImage: '/media/humanitnow!/stakenew.png',
    },
    {
        name: 'EHS',
        text: 'picturespictures',
        beforeImage: '/media/humanitnow!/pic3.jpg',
        afterImage: '/media/humanitnow!/pic4.jpg',
    },
    {
        name: 'Ballisics',
        text: 'picturespictures',
        beforeImage: '/media/humanitnow!/pic5.jpg',
        afterImage: '/media/humanitnow!/pic6.jpg',
    },
    {
        name: 'Survently',
        text: 'picturespictures',
        beforeImage: '/media/humanitnow!/pic3.jpg',
        afterImage: '/media/humanitnow!/pic.jpg',
    },
    // Add more projects as needed
];


const Projects = () => {
    return (
        <div className='bg-gray-100 py-12'>
            <h2 className='text-3xl font-bold text-center mb-8'>Latest Projects</h2>
            <div className='max-w-8xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-2'>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

interface project {
    name: string;
    text: string;
    beforeImage: string;
    afterImage: string;
}

const ProjectCard = ({ project }: { project: project }) => {
    return (
        <div className='relative p-6 rounded-lg shadow-lg'>
            <div className='relative w-full h-80 overflow-hidden rounded-lg'>
                <img
                    src={project.afterImage}
                    alt={`${project.name} before`}
                    className='absolute inset-0 w-full h-full object-cover'
                />
                <div className='absolute inset-0 w-full h-full'>
                    <div className='relative h-full'>
                        <img
                            src={project.beforeImage}
                            alt={`${project.name} after`}
                            className='absolute inset-0 w-full h-full object-cover transition-all duration-[4s] ease-in-out animate-slide'
                        />
                        <div className='absolute inset-0 flex justify-between items-center px-4'>
                            <span className='text-white text-lg font-bold bg-black bg-opacity-50 px-2 py-1 rounded'>Before</span>
                            <span className='text-white text-lg font-bold bg-black bg-opacity-50 px-2 py-1 rounded'>After</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white bg-opacity-75 p-4 rounded-lg mt-4'>
                <div className='flex items-center mb-4'>
                    <div>
                        <h3 className='text-xl font-bold'>{project.name}</h3>
                    </div>
                </div>
                <p className='text-gray-700'>{project.text}</p>
            </div>
        </div>
    );
};

export default Projects;