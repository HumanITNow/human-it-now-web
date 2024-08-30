import Image from 'next/image';

export default function Home() {
    return (
        <div className='flex min-h-screen min-w-full'>
            <div className='flex-1 relative'>
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
                    <div className='text-2xl font-bold'>...  HUMAN</div>
                    <div className='text-2xl font-bold'>IT NOW!!!!</div>
                    {/* <div className='text-2xl font-bold'>NOW!!!!</div> */}
                </div>
            </div>
            <div className='flex-1 p-28 line-clamp-1'>
                Sorry, please hold while we get you connected to the next available representative... hi im
                nskjfbweifcbewifb.. wait I dont quite get that, let me pass you onto my supervisor. doahfgwepqucb, Hi
                can i please have all of the information you gave our last representative?
            </div>
        </div>
    );
}
