import React from 'react';

const LinkedInProfile = () => {
    return (
        <div className='bg-white p-6 rounded-lg shadow-lg'>
            <img
                src='https://via.placeholder.com/150' // Replace with your LinkedIn profile image URL
                alt='LinkedIn Profile'
                className='w-32 h-32 rounded-full mx-auto mb-4'
            />
            <h3 className='text-xl font-bold text-center mb-2'>Your Name</h3>
            <p className='text-gray-700 text-center'>
                Your bio from LinkedIn goes here. You can include a brief description of your professional background, skills, and interests.
            </p>
            <div className='text-center mt-4'>
                <a
                    href='https://www.linkedin.com/in/jaredheitzman/' // Replace with your LinkedIn profile URL
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:underline'
                >
                    View LinkedIn Profile
                </a>
            </div>
        </div>
    );
};

export default LinkedInProfile;