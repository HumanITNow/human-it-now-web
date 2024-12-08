'use client';
import React from 'react';
import Image from 'next/image';

const projects = [
    {
        name: 'StakeStats.net',
        text: 'How many times do you think “It’s RIGGED” when using a betting site? Would you like to see that the games you play are truly fair (the Return to Player values are faithfully enforced)? Use the tools on this site to help you to determine that the games you play on Stake are fair*',
        beforeImage: '/media/humanitnow!/stakeold.png',
        afterImage: '/media/humanitnow!/stakenew.png',
        link: 'https://stakestats.net',
        useSlider: true,
    },
    {
        name: 'EHS',
        text: 'A plug and play environmental health and safety solution for all businesses.',
        beforeImage: '/media/humanitnow!/incident1.png',
        afterImage: '/media/humanitnow!/incident-after.png',
        link: '',
        useSlider: false, // Set to false to use a static image
    },
    {
        name: 'Ballisics',
        text: 'Collecting and reporting on important ballistics data for three of the largest ammunition manufacturers in the world.',
        beforeImage: '/media/humanitnow!/pic5.jpg',
        afterImage: '/media/humanitnow!/pic6.jpg',
        link: '',
        useSlider: false,
    },
    {
        name: 'Survently',
        text: 'A subscription-based survey platform that allows you to create and send surveys to your employees or customers. Initally designed to promot servant-leadership.',
        beforeImage: '/media/humanitnow!/survey-before.png',
        afterImage: '/media/humanitnow!/survey-after.png',
        link: '',
        useSlider: true,
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <div className='bg-gray-100 text-black dark:bg-secondary-main dark:text-secondary-text py-12'>
            <h2 className='text-3xl font-bold text-center mb-8'>Latest Projects</h2>
            <div className='max-w-8xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-2'>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

interface Project {
    name: string;
    text: string;
    beforeImage: string;
    afterImage: string;
    link: string;
    useSlider: boolean;
}

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className='relative p-6 rounded-lg shadow-lg dark:bg-secondary-light dark:text-black'>
            <div className='relative w-full h-96 overflow-hidden rounded-lg'>
                {/* Increased height */}
                {!project.useSlider ? (
                    <Image
                        src={project.afterImage}
                        alt={project.name}
                        height={150}
                        width={150}
                        className='absolute inset-0 w-full h-full object-cover object-top'
                    />
                ) : (
                    <>
                        <Image
                            src={project.afterImage}
                            alt={`${project.name} after`}
                            height={150}
                            width={150}
                            className='absolute inset-0 w-full h-full object-cover object-top'
                        />
                        <div className='absolute inset-0 w-full h-full'>
                            <div className='relative h-full'>
                                <Image
                                    src={project.beforeImage}
                                    alt={`${project.name} before`}
                                    height={150}
                                    width={150}
                                    className='absolute inset-0 w-full h-full object-cover object-top transition-all duration-[4s] ease-in-out animate-slide'
                                />
                                <div className='absolute inset-0 flex justify-between items-center px-4'>
                                    <span className='text-white text-lg font-bold bg-black bg-opacity-50 px-2 py-1 rounded'>
                                        Before
                                    </span>
                                    <span className='text-white text-lg font-bold bg-black bg-opacity-50 px-2 py-1 rounded'>
                                        After
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className='bg-white  bg-opacity-75 p-4 rounded-lg mt-4'>
                <div className='flex items-center mb-4'>
                    <div>
                        {project.link ? (
                            <a href={project.link} className='text-xl font-bold text-gray-900 hover:underline'>
                                {project.name}
                            </a>
                        ) : (
                            <h3 className='text-xl font-bold'>{project.name}</h3>
                        )}
                    </div>
                </div>
                <p className='text-gray-700'>{project.text}</p>
            </div>
        </div>
    );
};

export default Projects;
