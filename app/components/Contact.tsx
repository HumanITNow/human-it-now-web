'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/emailer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('API response:', data);
            } else {
                console.error('Error calling API');
            }
        } catch (error) {
            console.error('Error calling API', error);
        }
    };

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
                <h3 className='text-center text-2xl font-bold mb-6'>Contact Us Today!</h3>
                <form onSubmit={handleSubmit}>
                    <div className='my-6'>
                        <label htmlFor='name' className='block text-lg font-medium text-gray-700'>Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                    </div>
                    <div className='my-6'>
                        <label htmlFor='email' className='block text-lg font-medium text-gray-700'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                    </div>
                    <div className='my-6'>
                        <label htmlFor='phone' className='block text-lg font-medium text-gray-700'>Phone</label>
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                    </div>
                    <div className='my-6'>
                        <label htmlFor='message' className='block text-lg font-medium text-gray-700'>Message</label>
                        <textarea
                            id='message'
                            name='message'
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        ></textarea>
                    </div>
                    <div className='text-center'>
                        <button
                            type='submit'
                            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;