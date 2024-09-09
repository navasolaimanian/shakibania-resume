'use client';
import Image from 'next/image';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';


const Header = () => {
    const [showLeftBar, setShowLeftBar] = useState(false);
    return (
        <div className='bg-black fixed w-full z-10 flex justify-between items-center px-16 lg:px-32 pt-6 pb-4'>
            <div className='text-3xl 2xl:text-4xl'>
                H o s s
            </div>
            <ul className='hidden md:flex [&>*]:pl-8'>
                <li>About</li>
                <li>News</li>
                <li>Publications</li>
                <li>Experience</li>
            </ul>
            <button className="md:hidden" onClick={() => setShowLeftBar(!showLeftBar)}>
                <IoMenu className="h-10 w-10" />
            </button>
        </div>
    );
};

export default Header;