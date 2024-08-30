export default function Footer() {
    return (
        <footer className='flex items-center justify-center w-full bg-secondary-dark text-primary-light h-24'>
            <p>&copy; {new Date().getFullYear()} C2 Software, LLC DBA HumanITNow!</p>
        </footer>
    );
}
