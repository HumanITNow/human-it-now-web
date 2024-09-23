'use client';
import React from 'react';
import Image from 'next/image';

class Contact extends React.Component {
    render() {
        return (
            <div className='relative py-12'>
                <div className='absolute inset-0 w-full h-full'>
                    <Image
                        src='/media/humanitnow!/pic4.jpg'
                        alt='Background'
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                <div className='relative bg-white bg-opacity-90 p-10 rounded-md w-3/4 mx-auto'>
                    <h3 className='text-center'>Contact Us Today!</h3>
                    <div className='my-6'>Name</div>
                    <div className='my-6'>Email</div>
                    <div className='my-6'>Message</div>
                </div>
            </div>
        );
    }
}

export default Contact;
