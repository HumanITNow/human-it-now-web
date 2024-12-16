import LandingPage from '@/components/Landing';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';
import AboutYou from '@/components/AboutYou';
import AboutUs from '@/components/AboutUs';
import Questionnaire from '@/app/components/Questionnaire';
import Contact from '@/components/Contact';
import Scroller from '@/components/Scroller';
import { Metadata, ResolvingMetadata } from 'next';
import { capitalize } from '@/Utils/stringUtils';

type Props = {
    params: Promise<{ section: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    // read route params
    const section = (await params).section;

    // fetch data

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || [];

    return {
        title: `HTN - ${capitalize(section)}`,
        description:
            'HumanITNow is a software development company that specializes in web and mobile applications. We are a team of developers, designers, and project managers that work together to create custom software solutions for our clients.',
        // openGraph: {
        //     images: ['/some-specific-page-image.jpg', ...previousImages],
        // },
    };
}

export default function Section({ params, searchParams }: Props) {
    const section = params.then(p => p.section);

    console.log(section);
    return (
        <div>
            <Scroller />
            <LandingPage />
            <Services />
            <Testimonials />
            <Projects />
            <AboutYou />
            <AboutUs />
            <Questionnaire />
            <Contact />
        </div>
    );
}
