'use client';
import Image from 'next/image';
import React from 'react';
import towRectangle from '../../public/images/2Rectangle.png';
import { useState } from 'react';

const News = (props) => {
    const [showAllNews, setShowAllNews] = useState(false);
    console.log(showAllNews);
    return (
        <div className="bg-primary1 relative py-12">
            <Image src={towRectangle} className="absolute right-0" />
            <div className="pl-28 3xl:pl-44 pt-8">
                <h1 className="text-gray-dark text-3xl">News</h1>
                <div className="my-12 mx-14">
                    {props.data.news.slice(0, 3).map(n =>
                        <div className="text-gray-dark flex items-start">
                            <p className="w-36">{n.date}</p>
                            <div className="mt-[0.7rem]">
                                <div className="w-2 h-2 mx-7 bg-[#BCC0C2] rounded-full"></div>
                                <div className="w-1 h-12 mx-[1.85rem] rounded-lg mt-1 bg-[#D7E1EB]"></div>
                            </div>
                            <p className="text-lg 3xl:text-xl">{n.news}</p>
                        </div>)}
                    {props.data.news.slice(3, 4).map(n =>
                        <div className={`${showAllNews ? 'text-gray-dark' : 'text-gray'} flex items-start`}>
                            <p className="w-36">{n.date}</p>
                            <div className="mt-1">
                                <div className="w-2 h-2 mx-7 bg-[#BCC0C2] rounded-full"></div>
                                {showAllNews && <div className="w-1 h-14 mx-[1.85rem] rounded-lg mt-1 bg-[#D7E1EB]"></div>}
                            </div>
                            <p className="text-lg 3xl:text-xl">{n.news}</p>
                        </div>)}
                    <div className={`${showAllNews ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in duration-700`}>
                        {showAllNews && props.data.news.slice(4).map((n, index) =>
                            <div key={index} className={`text-gray-dark flex items-start`}>
                                <p className="w-36">{n.date}</p>
                                <div className="mt-1">
                                    <div className="w-2 h-2 mx-7 bg-[#BCC0C2] rounded-full"></div>
                                    {console.log(props.data.news.length, index)}
                                    {props.data.news.length !== index + 5 && <div className="w-1 h-14 mx-[1.85rem] rounded-lg mt-1 bg-[#D7E1EB]"></div>}
                                </div>
                                <p className="text-lg 3xl:text-xl">{n.news}</p>
                            </div>)}
                    </div>
                </div>
            </div>
            {!showAllNews && <button className="text-[#748595] mx-auto flex" onClick={() => setShowAllNews(!showAllNews)}>
                see all News
            </button>}


        </div>
    );
};

export default News;