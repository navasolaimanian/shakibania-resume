'use client';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import Link from 'next/link';
import menu from '../../public/images/icons/menu.svg'
import Image from "next/image";


const Header = () => {
    const [showLeftBar, setShowLeftBar] = useState(false);
    
    return (
        <div className='bg-black fixed w-full z-10 flex justify-between items-center px-7 sm:px-10 lg:px-32 pt-6 pb-4'>
            <div className='text-[#B1C7DE] text-2xl xl:text-3xl 2xl:text-4xl'>
                H o s s
            </div>
            <ul className='hidden md:flex [&>*]:pl-8'>
                <Link href="#aboutSection">
                    <li className="hover:text-[#B1C7DE] border-b-2 border-b-transparent hover:border-b-[#B1C7DE]">About</li>
                </Link>
                <Link href="#newsSection">
                    <li className="hover:text-[#B1C7DE] border-b-2 border-b-transparent hover:border-b-[#B1C7DE]">News</li>
                </Link>
                <Link href="#publicationSection">
                    <li className="hover:text-[#B1C7DE] border-b-2 border-b-transparent hover:border-b-[#B1C7DE]">Publications</li>
                </Link>
                <Link href="#experienceSection">
                    <li className="hover:text-[#B1C7DE] border-b-2 border-b-transparent hover:border-b-[#B1C7DE]">Experience</li>
                </Link>
            </ul>
            <button className="md:hidden" onClick={() => setShowLeftBar(!showLeftBar)}>
                <Image src={menu} />
            </button>
        </div>
    );
};

export default Header;