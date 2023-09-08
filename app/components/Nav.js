"use client";

import Link from "next/link"
import { FaMusic, FaHeart, FaClock } from 'react-icons/fa';
import { MdLibraryMusic } from "react-icons/md";
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import { usePathname } from "next/navigation";

export default function Nav() {

    const pathname = usePathname();

    return (
        <nav>
            <div className="logo">
                ...
            </div>
            <div className="menu">
                <span className="text-xs pl-3 text-gray-500">MENU</span>
                <div className="flex flex-col gap-2">
                    <Link href="/" className={`menu-item ${pathname === "/" && "active" }`}><FaMusic color="#333" /> Explore</Link>
                    {/* <Link href="/" className="menu-item"><MdLibraryMusic color="#333" />Albums</Link>
                    <Link href="/" className="menu-item"><BiSolidMicrophoneAlt color="#333" />Artists</Link> */}
                </div>
            </div>
            <div className="menu">
                <span className="text-xs pl-3 text-gray-500">LIBRARY</span>
                <div className="flex flex-col gap-2">
                    <Link href="/favourites"  className={`menu-item ${pathname === "/favourites" && "active" }`}><FaHeart color="#333" />Favourites</Link>
                    {/* <Link href="/" className="menu-item"><FaClock color="#333" />Recent</Link> */}
                </div>
            </div>
        </nav>
    )
}
