'use client';
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
            <ul className="hidden md:flex space-x-8">
                <Link href="#aboutSection">
                    <li className={activeSection === 'aboutSection' ? 'text-[#B1C7DE]' : 'text-white hover:text-[#B1C7DE] transition-all duration-700'}>About</li>
                    <div className={`w-full h-[3px] rounded-lg transition-all duration-700 ${activeSection === 'aboutSection' ? 'bg-[#B1C7DE]' : 'bg-transparent' }`}></div>
                </Link>
                <Link href="#newsSection">
                    <li className={activeSection === 'newsSection' ? 'text-[#B1C7DE]' : 'text-white hover:text-[#B1C7DE] transition-all duration-700'}>News</li>
                    <div className={`w-full h-[3px] rounded-lg transition-all duration-700 ${activeSection === 'newsSection' ? 'bg-[#B1C7DE]' : 'bg-transparent' }`}></div>
                </Link>
                <Link href="#publicationSection">
                    <li className={activeSection === 'publicationSection' ? 'text-[#B1C7DE] ' : 'text-white hover:text-[#B1C7DE] transition-all duration-700'}>Publications</li>
                    <div className={`w-full h-[3px] rounded-lg transition-all duration-700 ${activeSection === 'publicationSection' ? 'bg-[#B1C7DE]' : 'bg-transparent' }`}></div>
                </Link>
                <Link href="#experienceSection">
                    <li className={activeSection === 'experienceSection' ? 'text-[#B1C7DE]' : 'text-white hover:text-[#B1C7DE] transition-all duration-700'}>Experience</li>
                    <div className={`w-full h-[3px] rounded-lg transition-all duration-700 ${activeSection === 'experienceSection' ? 'bg-[#B1C7DE]' : 'bg-transparent' }`}></div>
                </Link>
                <Link href="#HonorseSection">
                    <li className={activeSection === 'HonorseSection' ? 'text-[#B1C7DE]' : 'text-white hover:text-[#B1C7DE] transition-all duration-700'}>Honors</li>
                    <div className={`w-full h-[3px] rounded-lg transition-all duration-700 ${activeSection === 'HonorseSection' ? 'bg-[#B1C7DE]' : 'bg-transparent' }`}></div>
                </Link>
                <Link href="#TalkseSection">
                    <li className={activeSection === 'TalkseSection' ? 'text-[#B1C7DE]' : 'text-white hover:text-[#B1C7DE] transition-all duration-700'}>Talks</li>
                    <div className={`w-full h-[3px] rounded-lg transition-all duration-700 ${activeSection === 'TalkseSection' ? 'bg-[#B1C7DE]' : 'bg-transparent' }`}></div>
                </Link>
                <Link href="#AcademicServiceSection">
                    <li className={activeSection === 'AcademicServiceSection' ? 'text-[#B1C7DE]' : 'text-white hover:text-[#B1C7DE] transition-all duration-700'}>Academic Service</li>
                    <div className={`w-full h-[3px] rounded-lg transition-all duration-700 ${activeSection === 'AcademicServiceSection' ? 'bg-[#B1C7DE]' : 'bg-transparent' }`}></div>
                </Link>
            </ul>
            <button className="md:hidden" onClick={() => setShowLeftBar(!showLeftBar)}>
                <Image alt="menu" src={menu} />
            </button>
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
