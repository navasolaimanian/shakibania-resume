'use client';
import Image from 'next/image';
import newsRectangle from '../../public/images/design/newsRectangle.svg';
import { useState } from 'react';
import DateText from './DateText';


const News = (props) => {
    const [showAllNews, setShowAllNews] = useState(false);
   
    return (
        <div id="newsSection" className="bg-primary1 relative pb-10 scroll-mt-32">
            <Image  alt="" src={newsRectangle} className="absolute right-0 bottom-0 lg:bottom-20 h-36 lg:h-[250px] w-28 lg:w-[300px]" />
            <div className="container m-auto">
                <div className="px-7 lg:px-10 xl:px-20 2xl:px-28 3xl:px-44 pt-8 md:pt-16">
                    <h1 className="text-gray-dark text-xl xl:text-2xl 2xl:text-3xl">News</h1>
                    <DateText showAll={showAllNews} data={props.data.news} button={'see all News'} />
                </div> 
                    <button className="text-xs md:text-sm xl:text-base text-[#748595] mx-auto flex mt-7" onClick={() => setShowAllNews(!showAllNews)}>
                        {showAllNews ? `show less` :`see all News`}
                    </button>
            </div>
        </div>
    );
};

export default News;