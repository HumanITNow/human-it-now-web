import React from 'react';
import Image from 'next/image';

const services = [
    {
        name: 'Human Support',
        text: 'Look, we understand what it is like to be a human. We are humans too. We will support you in your human endeavors.',
        image: '/media/humanitnow!/human.png',
    },
    {
        name: 'Web Dev',
        text: 'A business without a website is like a fish without water. We can help you build your web presense, or build internal web based to to interact with you current software systems.',
        image: '/media/humanitnow!/web.png',
    },
    {
        name: 'Manufacturing Solutions',
        text: `Needing help with manufacturing solutions? We have a variety of pre-built products from safety systems to QA solutions. We can also help improve automation or data collection as we're very adept with OPC solutions.`,
        image: '/media/humanitnow!/factory.jpg',
    },
    {
        name: 'Quickbooks Integration',
        text: 'Using Quickboos? We can help improve your experience with QuickBooks to make it a little less of the dumpster fire it is.',
        image: '/media/humanitnow!/dollar.png',
    },
    // Add more services as needed
];

const Services = () => {
    return (
        <div id='services' className='bg-gray-100 text-black dark:bg-secondary-dark dark:text-secondary-text py-12'>
            <h2 className='text-3xl font-bold text-center mb-8'>Services</h2>
            <div className='max-w-8xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-2'>
                {services.map((service, index) => (
                    <div key={index} className='bg-white p-6 rounded-lg shadow-lg'>
                        <div className='flex items-center mb-4'>
                            <Image
                                src={service.image}
                                alt={service.name}
                                width={48}
                                height={48}
                                className='rounded-full mr-4'
                            />
                            <div>
                                <h3 className='text-xl font-bold'>{service.name}</h3>
                            </div>
                        </div>
                        <p className='text-gray-700'>{service.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
