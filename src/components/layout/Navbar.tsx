import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <Link href="/">Home</Link>
                <Link href="/courses/add">Add Course</Link>
            </div>
        </nav>
    );
};

export default Navbar;
