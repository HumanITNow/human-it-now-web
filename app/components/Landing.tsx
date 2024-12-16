import Image from 'next/image';

const promises = [
    `We're not a faceless corporation, we're a team of real people who care about your project`,
    `No automated phone systems. Have you ever found yourself screaming HUMAN into an automated phone system to no avail? Not applicable here, when you call, text or email you'll be reaching us personally. If we can't respond right away give us a moment `,
    `No AI chatbots, turns out they're pretty dumb and unintuitive`,
    `Everyone at HumanITNow is U.S. based, and English is our first language`,
];
export default function LandingPage() {
    return (
        <div className='w-full min-h-[90vh] relative py-10'>
            <Image
                src='/media/humanitnow!/pic3.jpg'
                alt='HumanITNow!'
                fill
                className='object-cover object-center'
                priority
            />
            <div className='flex w-full'>
                <Welcome />
                <Promises />
            </div>
        </div>
    );
}

const Welcome = () => (
    <div className='p-6'>
        <h1 className='text-6xl relative font-extrabold text-left w-fit'>Welcome to HumanITNow!</h1>
        <h2 className='relative top-[-0.6rem] font-semibold text-left text-secondary-main italic'>
            The tech guys who hate where tech has lead us
        </h2>
    </div>
);

const Promises = () => (
    <div className='relative'>
        <p className='text-white text-xl md:text-2xl mt-4 font-semibold'>Our Promise To You:</p>
        <ol className='max-w-2/3 flex flex-col items-center pr-16'>
            {promises.map((p, i) => (
                <li key={i} className='py-2 text-xl max-w-screen-md w-full text-justify'>
                    {p}
                </li>
            ))}
        </ol>
    </div>
);
