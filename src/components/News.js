'use client';
import Image from 'next/image';
import newsRectangle from '../../public/images/design/newsRectangle.svg';
import { useState } from 'react';
import DateText from './DateText';

const News = (props) => {
    const [showAllNews, setShowAllNews] = useState(false);
    return (
        <div className="bg-primary1 relative py-12">
            <Image src={newsRectangle} className="absolute right-0 bottom-5 lg:bottom-20 h-36 lg:h-[250px] w-28 lg:w-[300px]" />
            <div className="px-5 lg:px-10 xl:px-20 2xl:px-28 3xl:px-44 pt-6 3xl:pt-8">
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