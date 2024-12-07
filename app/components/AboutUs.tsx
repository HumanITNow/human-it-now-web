import React from 'react';
import LinkedInProfile from './LinkedInProfile';

const AboutUs = () => {
    return (
        <div className='bg-gray-100 text-black dark:bg-secondary-main dark:text-secondary-text py-12'>
            <div className='max-w-6xl mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-8'>About Us</h2>
                <div className='grid grid-cols-1 gap-8'>
                    <div className='text-gray-900 text-lg leading-relaxed break-words'>
                        We are a team of dedicated professionals who are passionate about helping businesses succeed. Our team has years of experience in software development, web design, and digital marketing. We have worked with clients from a variety of industries and have helped them achieve their goals. Our team is committed to providing high-quality solutions that meet your specific needs and exceed your expectations.
                    </div>
                    <div className='text-gray-900 text-lg leading-relaxed break-words'>
                        At HumanITNow, we understand your needs and are here to provide the support and expertise you require. Our team is dedicated to delivering high-quality solutions that meet your specific requirements. We are committed to helping you achieve your goals and ensuring your success.
                    </div>
                    <div className='text-gray-900 text-lg leading-relaxed break-words'>
                        Join us and experience the difference of working with a team that truly cares about your success. We are here to help you every step of the way.
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                    <LinkedInProfile
                        name='Cary Conklin'
                        description='Founder & CEO'
                        photo='https://media.licdn.com/dms/image/v2/C5603AQECxrJEEskS6Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1656420777840?e=1738800000&v=beta&t=I-vA17swbbqCF--Djj-xAsIJx6IkiCFsZWBYApeR7SA'
                        link='https://www.linkedin.com/in/caryconklin/'
                    />
                    <LinkedInProfile
                        name='Jared Heitzman'
                        description='Senior Software Engineer'
                        photo='https://media.licdn.com/dms/image/v2/C4E03AQGHWYf_Iuyi8Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1575439522350?e=1738800000&v=beta&t=HVJMbWOrPeTyqKbwUA1Oo47NTaGhRdA-xJU0DKsh2QM'
                        link='https://www.linkedin.com/in/jaredheitzman/'
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;