'use client';
import Image from 'next/image';
import towRectangle from '../../public/images/design/2Rectangle.png';
import { useState } from 'react';
import DateText from './DateText';

const News = (props) => {
    const [showAllNews, setShowAllNews] = useState(false);
    return (
        <div className="bg-primary1 relative py-12">
            <Image src={towRectangle} className="absolute right-0" />
            <div className="pl-10 xl:pl-20 2xl:pl-28 3xl:pl-44 pt-6 3xl:pt-8">
                <h1 className="text-gray-dark text-2xl 2xl:text-3xl">News</h1>
                <DateText showAll={showAllNews} data={props.data.news} button={'see all News'} />
            </div>
            {!showAllNews && <button className="text-[#748595] mx-auto flex" onClick={() => setShowAllNews(!showAllNews)}>
                see all News
            </button>}
        </div>
    );
};

export default News;