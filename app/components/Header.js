"use client";

import { BsSearch } from 'react-icons/bs';
import { FaGithub, FaMusic, FaHeart } from 'react-icons/fa';
import { memo } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

function Header() {

  const pathname = usePathname();

  return (
    <header>
      <div className='search hidden md:flex'>
        <BsSearch className="absolute top-3 left-3 text-lg select-none pointer-events-none" color='gray' />
        <input type='text' placeholder='Search' />
      </div>
      <div className='flex md:hidden'>
      <Link href="/" className={`menu-item ${pathname === "/" && "active" }`}><FaMusic color="#333" /> Explore</Link>
      <Link href="/favourites"  className={`menu-item ${pathname === "/favourites" && "active" }`}><FaHeart color="#333" />Favourites</Link>
      </div>
      <Link href="https://github.com/beerkayaslan/" target="_blank" className='right-info'>
        <FaGithub color='gray' size={24} />
      </Link>
    </header>
  )
}

export default memo(Header)