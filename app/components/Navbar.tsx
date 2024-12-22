'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/**
 * Navbar component
 */
export default function Navbar() {
    const [showMenu, setShowMenu] = React.useState(false);
    return (
        <nav
            className={`sticky max-h-[9vh] py-4 font-extrabold flex items-center justify-between w-full bg-white dark:bg-black border-b-slate-800 border-b-2 dark:text-slate-300`}
        >
            <div className='flex flex-0 align-middle'>
                <Link href='/' className='flex items-center'>
                    <Image
                        src='/media/humanitnow!/HumanITNow.png'
                        alt='HumanITNow!'
                        width={36}
                        height={36}
                        priority
                        className='rounded-full p-[0.4] mx-2'
                    />
                </Link>
                <div className='flex px-2 align-middle justify-center'>
                    <div className='text-xl font-bold'>
                        <span className='border-b-2'>H</span>
                        <span className='border-b-2 font-extrabold'>I</span>
                    </div>
                    <div className='text-xl font-bold mt-[8px] ml-[0.1rem]'>
                        <span className='border-t-2 font-extrabold'>T</span>
                        <span className='border-t-2'>N</span>
                    </div>
                </div>
            </div>
            <div
                id='links'
                className='peer hidden sm:hidden md:hidden lg:flex flex-1 justify-end items-center uppercase font-semibold'
            >
                <Links />
            </div>
            <div
                id='toggleMenu'
                // onClick={() => setShowMenu(!showMenu)}
                className={`lg:hidden grid place-content-center w-20 h-20 cursor-pointer ${
                    showMenu ? 'hamburger-toggle' : ''
                }`}
            >
                <div
                    className={`w-10 h-1.5 bg-secondary-main rounded-full transition-all duration-150
                    before:content-[''] before:absolute before:w-10 before:h-1.5 before:bg-secondary-main before:rounded-full before:-translate-y-4 before:transition-all before:duration-150
                    after:content-[''] after:absolute after:w-10 after:h-1.5 after:bg-secondary-main after:rounded-full after:translate-y-4 after:transition-all after:duration-150`}
                />
            </div>
            {showMenu && (
                <div
                    id='mobile-wrapper'
                    className=' w-auto absolute flex flex-col-reverse right-0 top-[9vh] bg-primary-main dark:bg-secondary-main text-secondary-main dark:text-primary-dark'
                >
                    <div className='absolute flex flex-col cursor-pointer top-4 left-[-8rem] bg-primary-dark'>
                        <Links />
                    </div>
                </div>
            )}
        </nav>
        // <nav className='flex items-center justify-between bg-primary-light dark:bg-transparent'>
        //     <div className='flex items-center justify-between w-full p-4'>
        //         <div className='flex items-center justify-between w-full'>
        //             <Link href='/' className='flex items-center justify-between'>
        //                 <div className='flex items-center justify-between'>
        //                     <div className='relative w-12 h-12'>
        // <Image
        //     src='/media/humanitnow!/HumanITNow.png'
        //     alt='HumanITNow!'
        //     width={36}
        //     height={36}
        //     priority
        //     className='rounded-full pt-1'
        // />
        //                     </div>
        //                     <div className='flex'>
        //                         <div className='text-xl font-bold'>
        //                             <span className='border-b-2'>H</span>
        //                             <span className='border-b-2 font-extrabold'>I</span>
        //                         </div>
        //                         <div className='text-xl font-bold mt-[8px] ml-[0.1rem]'>
        //                             <span className='border-t-2 font-extrabold'>T</span>
        //                             <span className='border-t-2'>N</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </Link>
        //             <div className='sm:hidden flex items-center justify-between'>
        // <Link className='p-2' href='/services'>
        //     Services
        // </Link>
        // <Spacer />
        // <Link className='p-2' href='/testimonials'>
        //     Testimonials
        // </Link>
        // <Spacer />
        // <Link className='p-2' href='/projects'>
        //     Projects
        // </Link>
        // <Spacer />
        // <Link className='p-2' href='/about-you'>
        //     About You
        // </Link>
        // <Spacer />
        // <Link className='p-2' href='/about-us'>
        //     About Us
        // </Link>
        // <Spacer />
        // <Link className='p-2' href='/questionnaire'>
        //     Questionnaire
        // </Link>
        // <Spacer />
        // <Link className='pl-2' href='/contact'>
        //     Contact
        // </Link>
        //             </div>
        //         </div>
        //         {/* <div className='flex items-center justify-between'>
        //             <button className='p-2 text-xl font-bold'>🌙</button>
        //         </div> */}
        //     </div>
        // </nav>
    );
}

const Links = () => (
    <>
        <Link className='p-2' href='/services'>
            Services
        </Link>
        <Spacer />
        <Link className='p-2' href='/testimonials'>
            Testimonials
        </Link>
        <Spacer />
        <Link className='p-2' href='/projects'>
            Projects
        </Link>
        <Spacer />
        <Link className='p-2' href='/about-you'>
            About You
        </Link>
        <Spacer />
        <Link className='p-2' href='/about-us'>
            About Us
        </Link>
        <Spacer />
        <Link className='p-2' href='/questionnaire'>
            Questionnaire
        </Link>
        <Spacer />
        <Link className='pl-2' href='/contact'>
            Contact
        </Link>
    </>
);

const Spacer = () => <span className='text-secondary-dark font-bold'>|</span>;
