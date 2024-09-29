'use client';
import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import menu from '../../public/images/icons/menu.svg';

const Header = () => {
    const [showLeftBar, setShowLeftBar] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('[id*="Section"]');
          if (sections.length === 0) return;

          const scrollPosition = window.scrollY + window.innerHeight / 2;

          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              setActiveSection(section.id);
            }
           
          });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-black fixed w-full z-10 flex justify-between items-center px-7 sm:px-10 lg:px-32 py-4">
            <div className="text-[#B1C7DE] text-2xl xl:text-3xl 2xl:text-4xl">
                H o s s
            </div>
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 transition-colors duration-500">
                <Link href="#aboutSection">
                    <li className={activeSection === 'aboutSection' ? 'text-[#B1C7DE] border-b-[3px] border-b-[#B1C7DE]' : 'border-b-transparent hover:border-b-[#B1C7DE] text-white hover:text-[#B1C7DE]'}>About</li>
                </Link>
                <Link href="#newsSection">
                    <li className={activeSection === 'newsSection' ? 'text-[#B1C7DE] border-b-[3px] border-b-[#B1C7DE]' : 'border-b-transparent text-white hover:text-[#B1C7DE]'}>News</li>
                </Link>
                <Link href="#publicationSection">
                    <li className={activeSection === 'publicationSection' ? 'text-[#B1C7DE] border-b-[3px] border-b-[#B1C7DE]' : 'border-b-transparent text-white hover:text-[#B1C7DE]'}>Publications</li>
                </Link>
                <Link href="#experienceSection">
                    <li className={activeSection === 'experienceSection' ? 'text-[#B1C7DE] border-b-[3px] border-b-[#B1C7DE]' : 'border-b-transparent text-white hover:text-[#B1C7DE]'}>Experience</li>
                </Link>
            </ul>
            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setShowLeftBar(!showLeftBar)}>
                <Image alt="menu" src={menu} />
            </button>
            {/* Mobile Menu */}
            {showLeftBar && (
                <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4">
                    <Link href="#aboutSection" onClick={() => setShowLeftBar(false)}>
                        <span className={activeSection === 'aboutSection' ? 'text-[#B1C7DE]' : 'text-white'}>About</span>
                    </Link>
                    <Link href="#newsSection" onClick={() => setShowLeftBar(false)}>
                        <span className={activeSection === 'newsSection' ? 'text-[#B1C7DE]' : 'text-white'}>News</span>
                    </Link>
                    <Link href="#publicationSection" onClick={() => setShowLeftBar(false)}>
                        <span className={activeSection === 'publicationSection' ? 'text-[#B1C7DE]' : 'text-white'}>Publications</span>
                    </Link>
                    <Link href="#experienceSection" onClick={() => setShowLeftBar(false)}>
                        <span className={activeSection === 'experienceSection' ? 'text-[#B1C7DE]' : 'text-white'}>Experience</span>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Header;
