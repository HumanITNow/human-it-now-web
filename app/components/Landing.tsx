import Image from 'next/image';

const promises = [
    `We're not a faceless corporation, we're a team of real people who care about your project`,
    `No automated phone systems. We'd be okay never talking to another "agent" again `,
    `No AI chatbots, turns out they're pretty dumb and unintuitive`,
    `Everyone at HumanITNow is U.S. based, and English is our first language`,
];
export default function LandingPage() {
    return (
        <div className='w-full min-h-[90vh] relative'>
            {/* <Image
                src='/media/humanitnow!/pic3.jpg'
                alt='HumanITNow!'
                fill
                className='object-cover object-center'
                priority
            /> */}
            <div className='flex flex-col md:flex-row w-full py-10 p-3 sm:pr-8 md:pr-16'>
                <Welcome />
                <Promises />
            </div>
        </div>
    );
}

const Welcome = () => (
    <div className='p-6'>
        <h1 className='text-5xl relative font-extrabold w-fit'>Welcome to HumanITNow!</h1>
        <h2 className='relative top-[-0.3rem] font-semibold text-left text-secondary-main italic'>
            The tech guys who hate where tech has lead us
        </h2>
    </div>
);

const Promises = () => (
    <div className='relative p-6'>
        <p className='text-white text-xl font-semibold'>Who are we?</p>
        <ol className='max-w-2/3 flex flex-col items-center'>
            {promises.map((p, i) => (
                <li key={i} className='py-2 text-xl w-full'>
                    {p}
                </li>
            ))}
        </ol>
    </div>
);
