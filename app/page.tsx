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
                    <div className='p-4 rounded-lg absolute top-[200px] left-[300px] -rotate-12 w-1/2'>
                        <div className='text-2xl font-bold'>... HUMAN I.T.</div>
                        <div className='text-2xl font-bold'>NOW!!!!</div>
                        {/* <div className='text-2xl font-bold'>NOW!!!!</div> */}
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
            <Contact />
        </div>
    );
}
