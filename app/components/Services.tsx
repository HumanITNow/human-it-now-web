import React from 'react';

const testimonials = [
    {
        name: 'Web Dev',
        text: 'picturespictures',
        image: '/path/to/image1.jpg',
    },
    {
        name: 'Manufacturing Solutions',
        text: 'picturespictures',
        image: '/path/to/image2.jpg',
    },
    {
        name: 'Quickbooks Integration',
        text: 'picturespictures',
        image: '/path/to/image2.jpg',
    },
    {
        name: 'Your mom. I service your mom',
        text: 'picturespictures',
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