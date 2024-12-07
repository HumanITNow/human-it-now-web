import Image from 'next/image';
import React from 'react';

interface LinkedInProfileProps {
    name: string;
    description: string;
    photo: string;
    link: string;
}

const LinkedInProfile: React.FC<LinkedInProfileProps> = ({ name, description, photo, link }) => {
    return (
        <div className='bg-white p-6 rounded-lg shadow-lg'>
            <Image
                src={photo}
                alt={`${name}'s LinkedIn Profile`}
                width={128}
                height={128}
                className='rounded-full mx-auto mb-4'
            />
            <h3 className='text-xl font-bold text-center mb-2'>{name}</h3>
            <p className='text-gray-700 text-center'>
                {description}
            </p>
            <div className='text-center mt-4'>
                <a
                    href={link}
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