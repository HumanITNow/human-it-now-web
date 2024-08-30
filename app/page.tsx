import Image from 'next/image';

export default function Home() {
    return (
        <div className='flex min-h-screen min-w-full items-center'>
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
            </div>
            <div className='flex-1 p-28 line-clamp-1'>
                Sorry, please hold while we get you connected to the next available representative... hi im nskjfbweifcbewifb.. wait I dont quite get that, let me pass you onto my supervisor.
                doahfgwepqucb, Hi can i please have all of the information you gave our last representative?
            </div>
        </div>
    );
}
