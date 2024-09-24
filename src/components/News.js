'use client';
import Image from 'next/image';
import newsRectangle from '../../public/images/design/newsRectangle.svg';
import { useState } from 'react';
import DateText from './DateText';
import { useRef } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';

const News = (props) => {
    const [showAllNews, setShowAllNews] = useState(false);
    const [hasReachedElement, setHasReachedElement] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const targetElement = document.getElementById('endOfNews'); // Select the element by its id

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top; // Get the element's position relative to viewport
                const offset = window.innerHeight; // Height of the viewport

                if (elementPosition <= offset && showAllNews) {
                    console.log('yay')
                    setHasReachedElement(true);
                    // setShowAllNews(false)
                    console.log('You have reached the target element!');
                } else {
                    setHasReachedElement(false);
                    // setShowAllNews(true)

                }
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up listener on component unmount
        };
    }, []);
    console.log(hasReachedElement, showAllNews)
    return (
        <div id="newsSection" className="bg-primary1 relative pb-10 scroll-mt-40">
            <Image src={newsRectangle} className="absolute right-0 bottom-3 lg:bottom-20 h-36 lg:h-[250px] w-28 lg:w-[300px]" />
            <div className="container m-auto">
                <div className="px-7 lg:px-10 xl:px-20 2xl:px-28 3xl:px-44 pt-7 3xl:pt-8">
                    <h1 className="text-gray-dark text-xl xl:text-2xl 2xl:text-3xl">News</h1>
                    <DateText showLess={hasReachedElement} showAll={showAllNews} data={props.data.news} button={'see all News'} />
                </div>
                {!showAllNews && <Link href="#newsSection">
                    <button className="text-xs md:text-sm xl:text-base text-[#748595] mx-auto flex mt-7" onClick={() => setShowAllNews(!showAllNews)}>
                        see all News
                    </button>
                </Link>
                }
            </div>
            <span id="endOfNews"></span>
        </div>
    );
};

export default News;