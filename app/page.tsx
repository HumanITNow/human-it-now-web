import Image from 'next/image';
import Contact from './components/Contact';

export default function Home() {
    return (
        <div className='flex min-h-screen w-screen flex-col'>
            <div className='flex'>
                <div className='flex-1'>
                    <Image
                        src='/media/humanitnow!/HumanITNow.png'
                        alt='HumanITNow!'
                        width={400}
                        height={400}
                        priority
                        // className='animate-pulse'
                        className='blur-[2px] -rotate-[12deg]'
                    />
                    {/* <div className=''>... HUMAN IT NOW!!!!!</div> */}
                    {/* Mimic a call out textbox saying "HUMAN  IT NOW!!!!" */}
                    <div className='p-4 rounded-lg absolute top-[100px] left-[300px] -rotate-12 w-full'>
                        <div className='text-2xl font-bold'>... HUMAN</div>
                        <div className='text-2xl font-bold'>IT NOW!!!!</div>
                        {/* <div className='text-2xl font-bold'>NOW!!!!</div> */}
                    </div>
                </div>
                <div className='flex-1 m-24 text-justify text-6xl'>
                    We hate bull shit and want to help you cut through it
                </div>
            </div>
            <Contact />
        </div>
    );
}
