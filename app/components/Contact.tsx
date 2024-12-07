'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ContactMessage from '@/types/ContactMessage';

const defaultFormData: ContactMessage = {
    name: '',
    email: '',
    phone: '',
    preferredContact: '',
    aboutYou: '',
    message: '',
};

const Contact = () => {
    const [formData, setFormData] = useState<ContactMessage>(defaultFormData);

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
                alert('Message sent successfully!');
                setFormData(defaultFormData);
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
                <Image src='/media/humanitnow!/pic4.jpg' alt='Background' fill objectFit='cover' />
            </div>
            <div className='relative bg-white text-black dark:bg-secondary-main dark:text-secondary-text bg-opacity-90 dark:bg-opacity-90 p-10 rounded-md w-3/4 mx-auto'>
                <h3 className='text-center text-2xl font-bold mb-6'>Contact Us Today!</h3>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-between flex-nowrap sm:flex-wrap'>
                        <div className='my-4  flex flex-col flex-grow'>
                            <label
                                htmlFor='name'
                                className='text-lg font-medium text-gray-700 dark:text-secondary-text'
                            >
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className='mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <div className='m-4 mx-8 flex flex-col flex-grow'>
                            <label
                                htmlFor='email'
                                className='text-lg font-medium text-gray-700 dark:text-secondary-text'
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className='mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <div className='my-4  flex flex-col flex-grow'>
                            <label
                                htmlFor='phone'
                                className='text-lg font-medium text-gray-700 dark:text-secondary-text'
                            >
                                Phone
                            </label>
                            <input
                                type='tel'
                                id='phone'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                className='mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                    </div>
                    <div className='my-4'>
                        <div className='my-4'>
                            <label
                                htmlFor='preferredContact'
                                className='block text-lg font-medium text-gray-700 dark:text-secondary-text'
                            >
                                Preferred Contact Method
                            </label>
                            {/* Button Group with options Email, Phone, Text */}
                            <div className='mt-1 flex rounded-md'>
                                <button
                                    type='button'
                                    className={`${
                                        formData.preferredContact === 'email'
                                            ? 'bg-secondary-dark text-white'
                                            : 'bg-white text-gray-700 dark:text-black'
                                    } 'mt-1 w-1/12 h-10 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'`}
                                    onClick={() => setFormData({ ...formData, preferredContact: 'email' })}
                                >
                                    Email
                                </button>
                                <button
                                    type='button'
                                    className={`${
                                        formData.preferredContact === 'phone'
                                            ? 'bg-secondary-dark text-white'
                                            : 'bg-white text-gray-700 dark:text-black'
                                    } 'mt-1 w-1/12 h-10 px-3 py-2 border border-x-secondary-dark shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'`}
                                    onClick={() => setFormData({ ...formData, preferredContact: 'phone' })}
                                >
                                    Phone
                                </button>
                                <button
                                    type='button'
                                    className={`${
                                        formData.preferredContact === 'text'
                                            ? 'bg-secondary-dark text-white'
                                            : 'bg-white text-gray-700 dark:text-black'
                                    } 'mt-1 w-1/12 h-10 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'`}
                                    onClick={() => setFormData({ ...formData, preferredContact: 'text' })}
                                >
                                    Text
                                </button>
                            </div>
                            {/* Hidden input field to store the selected value to check if required has been met*/}
                            <input type='hidden' name='preferredContact' value={formData.preferredContact} required />
                        </div>
                        <label
                            htmlFor='aboutYou'
                            className='block text-lg font-medium text-gray-700 dark:text-secondary-text'
                        >
                            {`Tell us a little bit about your business and what struggles you're facing when it comes to
                            web development.`}
                        </label>
                        <textarea
                            id='aboutYou'
                            name='aboutYou'
                            rows={4}
                            value={formData.aboutYou}
                            onChange={handleChange}
                            required
                            className='mt-1 block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                    </div>
                    <div className='my-4'>
                        <label
                            htmlFor='message'
                            className='block text-lg font-medium text-gray-700 dark:text-secondary-text'
                        >
                            Message
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className='mt-1 block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                    </div>
                    <div className='text-center'>
                        <button
                            type='submit'
                            className='inline-flex justify-center w-full py-2 px-4 my-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary-dark hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
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
