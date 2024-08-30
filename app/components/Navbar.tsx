import Image from 'next/image';
import Link from 'next/link';

/**
 * Navbar component
 * The navbar will be comrpised of 2 main sections:
 * 1. Logo
 *  - Custom logo with a div wrapper
 *    - HI
 *    - TN
 * 2. Theme Toggle
 */
export default function Navbar() {
    return (
        <nav className='flex items-center justify-between w-full dark:bg-slate-900 bg-slate-50'>
            <div className='flex items-center justify-between w-full p-4'>
                <div className='flex items-center justify-between'>
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
                                    <span className='border-b-2 ml-2'>HI</span>
                                </div>
                                <div className='text-xl font-bold mt-[8px] ml-1'>
                                    <span className='border-t-2 mr-2'>TN</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='p-2 text-xl font-bold'>🌙</button>
                </div>
            </div>
        </nav>
    );
}
