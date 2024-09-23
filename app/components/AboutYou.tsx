import React from 'react';
import Image from 'next/image';

const AboutYou = () => {
    return (
        <div className='relative py-12'>
            <div className='absolute inset-0'>
                <Image
                    src='/media/humanitnow!/pic3.jpg'
                    alt='Background'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className='relative max-w-6xl mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-8 text-white'>About You</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <p className='text-gray-300 text-lg leading-relaxed'>
                        You are someone who values quality and efficiency. You understand the importance of having a reliable software engineering team that can deliver on time and exceed expectations. You are looking for a team that can help you cut through the noise and provide solutions that are tailored to your needs.
                    </p>
                    <p className='text-gray-300 text-lg leading-relaxed'>
                        At HumanITNow, we understand your needs and are here to provide the support and expertise you require. Our team is dedicated to delivering high-quality solutions that meet your specific requirements. We are committed to helping you achieve your goals and ensuring your success.
                    </p>
                    <p className='text-gray-300 text-lg leading-relaxed'>
                        Join us and experience the difference of working with a team that truly cares about your success. We are here to help you every step of the way.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutYou;