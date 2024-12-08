import React from 'react';
import Image from 'next/image';

const AboutYou = () => {
    return (
        <div className='relative py-12'>
            <div className='absolute inset-0'>
                <Image src='/media/humanitnow!/dark-computer.jpg' alt='Background' fill className='object-cover object-center' />
            </div>
            <div className='relative max-w-6xl mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-8 text-white'>About You</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <p className='text-gray-300 text-lg leading-relaxed'>
                        You are someone who values quality and efficiency. You understand the importance of having a
                        reliable software engineering team that can deliver on time and exceed expectations. You are
                        looking for a team that can help you cut through the noise and provide solutions that are
                        tailored to your needs.
                    </p>
                    <div className='flex justify-center items-center'>
                        <Image
                            src='/media/humanitnow!/HumanITNow.png' // Replace with your image path
                            alt='Your Image Description'
                            width={400} // Adjust the width as needed
                            height={300} // Adjust the height as needed
                            className='rounded-lg shadow-lg'
                        />
                    </div>
                    <p className='text-gray-300 text-lg leading-relaxed'>
                        You want to focus on your business and not worry about the technical details. You want a team
                        that can handle all of your software engineering needs so that you can focus on what you do
                        best. You want a team that can provide you with high-quality solutions that are tailored to your
                        specific requirements. You want a team that can help you achieve your goals and ensure your
                        success.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutYou;
