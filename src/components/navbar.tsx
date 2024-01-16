import Link from "next/link"

export const Navbar = () => {
    return (
        <nav>
            <ul className="flex p-4 space-x-2">
                <li>
                    <Link href="/" className="p-1 hover:bg-blue hover:text-white">Home</Link>
                </li>
                <li>
                    <Link href="/movies" className="p-1 hover:bg-blue hover:text-white">Movies</Link>
                </li>
            </ul>
        </nav>
    )
}