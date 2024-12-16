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
        <div className='flex min-h-screen w-screen flex-col'>
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
