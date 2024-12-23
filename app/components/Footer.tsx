export default function Footer() {
    return (
        <footer className='flex items-center justify-center w-full dark:bg-black dark:text-primary-light h-24'>
            <p>&copy; {process.env.COPYRIGHT_YEAR} C2 Software, LLC DBA HumanITNow!</p>
        </footer>
    );
}
