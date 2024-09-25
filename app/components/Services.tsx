import React from 'react';

const testimonials = [
    {
        name: 'Web Dev',
        text: 'A business without a website is like a fish without water. We can help you with that.',
        image: '/path/to/image1.jpg',
    },
    {
        name: 'Manufacturing Solutions',
        text: 'Needing help with manufacturing solutions? We have a variety of products, from safety systems to QA solutions.',
        image: '/path/to/image2.jpg',
    },
    {
        name: 'Quickbooks Integration',
        text: 'Wanting to start using Quickbooks and link it to your website? We have a variety of options for your business.',
        image: '/path/to/image2.jpg',
    },
    {
        name: 'Human Support',
        text: 'Look, we understand what it is like to be a human. We are humans too. We will support you in your human endeavors.',
        image: '/path/to/image2.jpg',
    },
    // Add more testimonials as needed
];

const Services = () => {
    return (
        <div className='bg-gray-100 py-12'>
            <h2 className='text-3xl font-bold text-center mb-8'>Services</h2>
            <div className='max-w-8xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-2'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='bg-white p-6 rounded-lg shadow-lg'>
                        <div className='flex items-center mb-4'>
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className='w-12 h-12 rounded-full mr-4'
                            />
                            <div>
                                <h3 className='text-xl font-bold'>{testimonial.name}</h3>
                            </div>
                        </div>
                        <p className='text-gray-700'>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;