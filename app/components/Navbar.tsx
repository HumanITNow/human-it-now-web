import Image from 'next/image';
import Link from 'next/link';

/**
 * Navbar component
 */
export default function Navbar() {
    return (
        <nav className='flex items-center justify-between bg-primary-light dark:bg-transparent'>
            <div className='flex items-center justify-between w-full p-4'>
                <div className='flex items-center justify-between w-full'>
                    <Link href='/' className='flex items-center justify-between'>
                        <div className='flex items-center justify-between'>
                            <div className='relative w-12 h-12'>
                                <Image
                                    src='/media/humanitnow!/HumanITNow.png'
                                    alt='HumanITNow!'
                                    width={36}
                                    height={36}
                                    priority
                                    className='rounded-full pt-1'
                                />
                            </div>
                            <div className='flex'>
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
                    </Link>
                    <div>
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
                    </div>
                </div>
                {/* <div className='flex items-center justify-between'>
                    <button className='p-2 text-xl font-bold'>🌙</button>
                </div> */}
            </div>
        </nav>
    );
}

const Spacer = () => <span className='text-secondary-dark font-bold'>|</span>;
