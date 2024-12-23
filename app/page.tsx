import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import AboutYou from './components/AboutYou';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Services from './components/Services';
import Questionnaire from './components/Questionnaire';
import LandingPage from './components/Landing';

export default function Home() {
    return (
        <div className='flex min-h-screen w-full flex-col m-0 p-0 bg-primary-text text-primary-dark dark:bg-primary-dark dark:text-primary-text'>
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
