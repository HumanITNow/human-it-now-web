import React from 'react';

const testimonials = [
    {
        name: 'Jason Gesser',
        text: 'HumanITNow provided excellent service and support. Highly recommend!',
        image: '/path/to/image1.jpg',
    },
    {
        name: 'Deangelo Casto',
        text: 'The team at HumanITNow is fantastic. They delivered on time and exceeded expectations.',
        image: '/path/to/image2.jpg',
    },
    {
        name: 'Devard Darling',
        text: 'Man, these dudes fuckin rule',
        image: '/path/to/image2.jpg',
    },
    {
        name: 'Jason Hill',
        text: 'Great stuff from the boys at HumanITnow',
        image: '/path/to/image2.jpg',
    },
    {
        name: 'Aaron Baynes',
        text: 'Crikey, I will never hire another software firm',
        image: '/path/to/image2.jpg',
    },
    {
        name: 'Chris Ivory',
        text: 'If you are looking for some saints with a reasonable bill, these are your guys',
        image: '/path/to/image2.jpg',
    },
    // Add more testimonials as needed
];

const Testimonials: React.FC = () => {
    return (
        <div className='bg-gray-100 py-12'>
            <h2 className='text-3xl font-bold text-center mb-8'>Testimonials</h2>
            <div className='max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
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

export default Testimonials;