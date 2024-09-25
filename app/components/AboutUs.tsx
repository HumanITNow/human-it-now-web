import React from 'react';
import LinkedInProfile from './LinkedInProfile';

const AboutUs = () => {
    return (
        <div className='bg-gray-100 py-12'>
            <div className='max-w-6xl mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-8'>About Us</h2>
                <div className='grid grid-cols-1 gap-8'>
                    <div className='text-gray-900 text-lg leading-relaxed break-words'>
                        You are someone who values quality and efficiency. You understand the importance of having a reliable software engineering team that can deliver on time and exceed expectations. You are looking for a team that can help you cut through the noise and provide solutions that are tailored to your needs.
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
                        photo='https://media.licdn.com/dms/image/v2/C5603AQECxrJEEskS6Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1656420777840?e=1732752000&v=beta&t=8WXO7kB2TkppRf5mmY4680QMLxRbOHf7RHjObSaaJq0'
                        link='https://www.linkedin.com/in/caryconklin/' 
                    />
                    <LinkedInProfile
                        name='Jared Heitzman'
                        description='Senior Software Engineer'
                        photo='https://media.licdn.com/dms/image/v2/C4E03AQGHWYf_Iuyi8Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1575439522258?e=1732752000&v=beta&t=SVkAZVcPXDOA5MTeFMJsll1Dza4BAQjUfA4gmjjq_is' 
                        link='https://www.linkedin.com/in/jaredheitzman/' 
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;