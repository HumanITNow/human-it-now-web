import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const font = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'HumanITNow',
    description:
        'HumanITNow is a software development company that specializes in web and mobile applications. We are a team of developers, designers, and project managers that work together to create custom software solutions for our clients.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className={`${font.className} dark hide-scrollbars`}>
            <body className='flex min-h-screen flex-col justify-between p-0 m-0'>
                <Navbar />
                <main className='flex sm:flex-col lg:flex-row grow justify-center items-start bg-primary-main dark:bg-slate-950'>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}