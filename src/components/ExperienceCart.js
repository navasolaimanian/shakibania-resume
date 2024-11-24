'use client'
import { useState } from 'react'
import robot from '../../public/images/experience/robot.svg'
import Image from 'next/image'

const ExperienceCart = (props) => {
    const [showAll, setShowAll] = useState(false);
    
    return (
        <div className={`relative bg-[#F3F6F9] hover:shadow-4xl cursor-pointer mb-8 md:mb-11 w-full lg:w-[70%] xl:w-[75%] 2xl:w-[65%] ${props.data.information.length <= 2 ? 'pb-5 md:pb-8 px-3 md:px-5 lg:px-4 pt-3 md:pt-5 lg:pt-4' : 'p-3 md:p-5 lg:p-4'} rounded-lg lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-[1.01]`}>
            <div className="flex">
                <Image alt="" src={robot} className="absolute w-9 md:w-16 h-auto" />
                <div className="text-[#313C44] ml-12 sm:ml-14 md:ml-20">
                    <p className="lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">{props.data.position}</p>
                    <div className="text-xs sm:text-sm md:text-base">
                        <p className="">{props.data.laboratory}</p>
                        <p>{props.data.type}</p>
                        <p className="text-[#787F85]">{props.data.date}</p>
                    </div>
                    <div className="mt-2">
                        {props.data.information.slice(0, 2).map((info, index) =>
                            <div key={index} className="flex mb-1 text-xs sm:text-sm text-[#4D4D4D]">
                                <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 mt-[7px] sm:mt-2 mr-3 sm:mx-5 bg-[#4D4D4D] rounded-full"></span>
                                <p className="w-[90%] md:w-full">{info}</p>
                            </div>
                        )}
                    </div>
                    <div className={`${showAll ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-out`}>
                        {showAll &&
                            <div>
                                {props.data.information.slice(2).map((info, index) =>
                                    <div key={index} className="flex mb-1 text-xs sm:text-sm text-[#4D4D4D]">
                                        <span className="w-1.5 h-1.5 mt-1.5 sm:mt-2 mr-3 sm:mx-5 bg-[#4D4D4D] rounded-full"></span>
                                        <p className="w-[90%] md:w-full">{info}</p>
                                    </div>
                                )}
                            </div>}
                    </div>
                </div>
            </div >
            {props.data.information.length > 2 && <button className="flex text-xs md:text-sm xl:text-base m-auto text-[#959595] my-2 md:my-5" onClick={() => setShowAll(!showAll)}>
                {showAll ? 'show less' : 'show more'}
            </button>}
        </div>
    )
}

export default ExperienceCart