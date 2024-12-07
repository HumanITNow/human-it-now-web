import Image from 'next/image';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import AboutYou from './components/AboutYou';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Services from './components/Services';

export default function Home() {
    return (
        <div className='flex min-h-screen w-screen flex-col'>
            <div className='flex'>
                <div className='w-full h-[75vh] relative'>
                    <Image
                        src='/media/humanitnow!/pic3.jpg'
                        alt='HumanITNow!'
                        fill
                        objectFit='cover'
                        priority
                    />
                    {/* Text overlay */}
                    <div className='absolute inset-0 flex flex-col items-center justify-start px-4 my-32'>
                        <h1 className='text-white text-4xl md:text-7xl font-extrabold'>Welcome to HumanITNow!</h1>
                        <p className='text-white text-xl md:text-3xl mt-4 font-semibold'>
                            Your trusted partner in IT solutions
                        </p>
                    </div>
                </div>
                <div className='flex-1 mt-24 text-3xl'>
                    {/* <ul>
                        <li className='py-2'>No automated phone systems</li>
                        <li className='py-2'>No being passed around like a bottle of crown</li>
                        <li className='py-2'>No AI chatbots</li>
                        <li className='py-2 font-bold text-primary-main'>Just a dedicated software engineering team of your own</li>
                    </ul> */}
                </div>
            </div>
            <Services />
            <Testimonials />
            <Projects />
            <AboutYou />
            <AboutUs />
            <Contact />
        </div>
    );
}
