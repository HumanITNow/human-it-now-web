import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='flex items-center justify-between w-full p-3 bg-secondary-main text-primary-light'>
            <div className='flex items-center gap-4'>
                <Link href='/' className='flex items-center'>
                    <Image src='/logos/small-sq.png' alt='GiftGitr Logo' width={45} height={45} priority />
                    <span className={`text-4xl pl-5`}>HumanITNow</span>
                </Link>
            </div>
            <div className={`flex gap-4 text-3xl mr-4 font-bold`}>
                <a href='/' className='hover:text-gray-300'>
                    Home
                </a>
                {/* <a href='/about' className=' hover:text-gray-300'>
            About
        </a> */}
            </div>
        </nav>
    );
}
