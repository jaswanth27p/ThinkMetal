"use client";
import Logo from '@/assets/Logo';
import { useState } from 'react';
import Link from 'next/link';
import NavIcon from '@/assets/NavIcon';
import DownArrow from '@/assets/DownArrow';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            <div className="px-4 max-w-[1440px] md:px-10 lg:px-16 text-[14px] leading-[24px] font-semibold space-x-4 mx-auto flex items-center justify-between py-4">
                <div className="flex gap-4 lg:gap-10">
                    <div className="flex items-center space-x-2">
                        <Logo />
                    </div>
                    <nav className="hidden md:flex md:space-x-3 lg:space-x-6 text-[#282828] relative">
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsProductMenuOpen(true)}
                            onMouseLeave={() => setIsProductMenuOpen(false)}>
                            <div className="hover:text-black flex gap-[6px] justify-center items-center">
                                Product <div className='relative top-[2px]'><DownArrow /></div>
                            </div>
                            {isProductMenuOpen && (
                                <div className="absolute pt-[50%] top-0 left-0">
                                    <div className='bg-white shadow border border-gray-200'>
                                        <Link href="#" className="block text-nowrap px-4 py-2 hover:bg-gray-100">Submenu 1</Link>
                                        <Link href="#" className="block text-nowrap px-4 py-2 hover:bg-gray-100">Submenu 2</Link>
                                        <Link href="#" className="block text-nowrap px-4 py-2 hover:bg-gray-100">Submenu 3</Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link href="#" className="hover:text-black">Home</Link>
                        <Link href="#" className="hover:text-black">Shop</Link>
                        <Link href="#" className="hover:text-black">Pages</Link>
                        <Link href="#" className="hover:text-black">Integrations</Link>
                        <Link href="#" className="hover:text-black">Developers</Link>
                    </nav>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <button className="hover:text-black">Login</button>
                    <button className="bg-gradient-to-r flex-shrink-0  transform transition duration-500 from-[#FB432C] to-[#FB432C] text-white border py-2 px-4 rounded-[39px] hover:bg-none hover:bg-white hover:border-[#FB432C] hover:text-[#FB432C]">
                        Start for free
                    </button>
                </div>
                <button
                    className="md:hidden hover:text-black"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <NavIcon />
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden absolute z-50 w-full top-[50px] bg-white shadow">
                    <nav className="flex flex-col space-y-2 px-4 py-2">
                        <div>
                            <button
                                onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
                                className="flex justify-between items-center w-full hover:text-black">
                                Product
                                <span>{isProductMenuOpen ? "▲" : "▼"}</span>
                            </button>
                            {isProductMenuOpen && (
                                <div className="pl-4 mt-2 space-y-2">
                                    <Link href="#" className="block hover:text-black">Submenu 1</Link>
                                    <Link href="#" className="block hover:text-black">Submenu 2</Link>
                                    <Link href="#" className="block hover:text-black">Submenu 3</Link>
                                </div>
                            )}
                        </div>
                        <Link href="#" className="hover:text-black">Home</Link>
                        <Link href="#" className="hover:text-black">Shop</Link>
                        <Link href="#" className="hover:text-black">Pages</Link>
                        <Link href="#" className="hover:text-black">Integrations</Link>
                        <Link href="#" className="hover:text-black">Developers</Link>
                        <button className="hover:text-black">Login</button>
                        <button className="bg-gradient-to-r from-[#FB432C] to-[#FB432C] text-white py-2 px-4 rounded hover:bg-orange-600">
                            Start for free
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
