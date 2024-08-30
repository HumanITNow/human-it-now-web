'use client';
import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className='bg-white my-24 mx-48 text-primary-dark rounded-md flex-col p-10'>
                <h3 className='text-center'>Contact Us Today!</h3>
                <div className='my-6'>Name</div>
                <div className='my-6'>Email</div>
                <div className='my-6'>Message</div>
            </div>
        );
    }
}

export default Contact;
