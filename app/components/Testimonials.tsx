import React from 'react';
import Image from 'next/image';
import Testimonial from '@/types/Testimonial';

const testimonials: Testimonial[] = [
    {
        name: 'Ian',
        company: 'StakeStats.net',
        position: 'Owner',
        text: 'Cary and Jared helped bring my vision to life. They are professional and very dependable. Highly recommend.',
        image: 'https://media.licdn.com/dms/image/v2/C4E03AQF3bVnVH-bqvg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517354435235?e=1733961600&v=beta&t=PsMtZoCzdU9D_w325H48Zbd-VN_GvufsHYPUZf3hs34',
        project: 'Complete Website Rebuid',
    },
    {
        name: 'Bill',
        company: 'Steele Components and Ammo',
        position: 'Owner/Business Development',
        text: 'The team at HumanITNow is fantastic. They delivered on time and exceeded expectations.',
        image: 'https://media.licdn.com/dms/image/v2/C5103AQGKNHuDVeax4A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516229054331?e=1733961600&v=beta&t=CnoGin_hBXDQa4KTg_osWjQ3tu-eJLNef4DFB6BHss0',
        project: 'Complete Website Rebuid',
    },
    // {
    //     name: 'Devard Darling',
    //     text: 'Man, these dudes fuckin rule',
    //     image: 'media/humanitnow!/HumanITNow.png',
    // },
    // {
    //     name: 'Jason Hill',
    //     text: 'Great stuff from the boys at HumanITnow',
    //     image: 'media/humanitnow!/HumanITNow.png',
    // },
    // {
    //     name: 'Aaron Baynes',
    //     text: 'Crikey, I will never hire another software firm',
    //     image: 'media/humanitnow!/HumanITNow.png',
    // },
    // {
    //     name: 'Chris Ivory',
    //     text: 'If you are looking for some saints with a reasonable bill, these are your guys',
    //     image: 'media/humanitnow!/HumanITNow.png',
    // },
    // Add more testimonials as needed
];

const Testimonials = () => {
    return (
        <div className='relative py-12'>
            <div className='absolute inset-0'>
                <Image src='/media/humanitnow!/pic2.jpg' alt='Background' fill className='object-cover object-center' />
            </div>
            <div className='relative mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-8 text-white'>Testimonials</h2>
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {testimonials.map((testimonial, index) => (
                        <a
                            key={index}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer'
                        >
                            <div className='flex items-center mb-4'>
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={48}
                                    height={48}
                                    className='rounded-full mr-4'
                                />
                                <div className='text-black'>
                                    <h2 className='text-xl font-bold'>
                                        {testimonial.name} <span className='font-extrabold text-indigo-600'>|</span> {testimonial.position}
                                    </h2>
                                    <h3 className='text-lg font-semibold'>{testimonial.company}</h3>
                                    <h4 className='text-md text-gray-500'>{testimonial.project}</h4>
                                </div>
                            </div>
                            <p className='text-gray-700'>{testimonial.text}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
