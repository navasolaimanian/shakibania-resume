import React from 'react'
import { getData } from '../../lib/getData';

const Research = () => {
    const research = getData('Research.json');
    console.log('reasearch')
    console.log(research)
    return (
        <div id="researchSection" className="pb-10 scroll-mt-40">
            <div className="container m-auto">
                <div className="px-7 lg:px-10 xl:px-20 2xl:px-28 3xl:px-44 pt-8 md:pt-16">
                    <h1 className="text-gray-dark text-xl xl:text-2xl 2xl:text-3xl">Research interests</h1>
                    <div className="text-gray-dark ml-7 my-6 md:my-12 pl-1 xl:pl-10 2xl:pl-14 pr-2">
                        {research.researchs.map((research, index) =>
                            <div className="flex sm:items-center my-5 text-xs sm:text-sm md:text-base">
                                <span className="w-2 h-2 mt-1 sm:mt-0 mr-3 sm:mx-5 bg-gray-dark rounded-full"></span>
                                <p className="w-[90%] md:w-full md:w-full"><span className="font-bold mr-1">{`${research.title}:`}</span>{research.text}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Research