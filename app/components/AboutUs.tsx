import React from 'react';
import LinkedInProfile from './LinkedInProfile';

const AboutUs = () => {
    return (
        <div className='bg-gray-100 py-12'>
            <div className='max-w-6xl mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-8'>About Us</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='text-gray-900 text-lg leading-relaxed break-words'>
                        We are a team of dedicated professionals who are passionate about helping businesses grow. We specialize in web development, manufacturing solutions, and Quickbooks integration. Our team is committed to providing the best service possible to our clients. We are always looking for new ways to improve our services and help our clients succeed. Contact us today to learn more about how we can help your business grow.
                    </div>
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