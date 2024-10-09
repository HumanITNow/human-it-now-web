import React from 'react';

const services = [
    {
        name: 'Human Support',
        text: 'Look, we understand what it is like to be a human. We are humans too. We will support you in your human endeavors.',
        image: '/media/humanitnow!/human.png',
    },
    {
        name: 'Web Dev',
        text: 'A business without a website is like a fish without water. We can help you with that.',
        image: '/media/humanitnow!/web.png',
    },
    {
        name: 'Manufacturing Solutions',
        text: 'Needing help with manufacturing solutions? We have a variety of products, from safety systems to QA solutions.',
        image: '/media/humanitnow!/factory.jpg',
    },
    {
        name: 'Quickbooks Integration',
        text: 'Wanting to start using Quickbooks and link it to your website? We have a variety of options for your business.',
        image: '/media/humanitnow!/dollar.png',
    },
    // Add more services as needed
];

const Services = () => {
    return (
        <div className='bg-gray-100 py-12'>
            <h2 className='text-3xl font-bold text-center mb-8'>Services</h2>
            <div className='max-w-8xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-2'>
                {services.map((service, index) => (
                    <div key={index} className='bg-white p-6 rounded-lg shadow-lg'>
                        <div className='flex items-center mb-4'>
                            <img
                                src={service.image}
                                alt={service.name}
                                className='w-12 h-12 rounded-full mr-4'
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