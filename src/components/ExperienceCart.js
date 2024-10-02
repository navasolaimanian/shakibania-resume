'use client'
import { useState } from 'react'
import robot from '../../public/images/experience/robot.svg'
import Image from 'next/image'

const ExperienceCart = (props) => {
    const [showAll, setShowAll] = useState(false)
    return (
        <div className="relative flex bg-[#F3F6F9] hover:shadow-4xl cursor-pointer mb-8 md:mb-11 w-[90%] lg:w-[70%] xl:w-[75%] 2xl:w-[65%] p-5 lg:p-4 rounded-lg lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-[1.01]">
            <Image src={robot} className="absolute w-9 md:w-16 h-auto" />
            <div className="text-[#313C44] ml-20">
                <p className="lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">{props.data.position}</p>
                <div className="text-xs sm:text-sm md:text-base">
                    <p className="">{props.data.laboratory}</p>
                    <p>{props.data.type}</p>
                    <p className="text-[#787F85]">{props.data.date}</p>
                </div>
                <div className="mt-2">
                    {props.data.information.slice(0, 2).map((info, index) =>
                        <div key={index} className="flex mb-1 text-xs sm:text-sm text-[#4D4D4D]">
                            <span className="w-2 h-2 mt-1 sm:mt-2 mr-3 sm:mx-5 bg-[#4D4D4D] rounded-full"></span>
                            <p className="w-[90%] md:w-full">{info}</p>
                        </div>
                    )}
                </div>
                <div className={`${showAll ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-out`}>
                    {showAll &&
                        <div className={`${showAll ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-out`}>
                            {props.data.information.slice(2).map((info, index) =>
                                <div key={index} className="flex mb-1 text-xs sm:text-sm text-[#4D4D4D]">
                                    <span className="w-2 h-2 mt-1 sm:mt-2 mr-3 sm:mx-5 bg-[#4D4D4D] rounded-full"></span>
                                    <p className="w-[90%] md:w-full">{info}</p>
                                </div>
                            )}
                        </div>}
                </div>
                {props.data.information.length > 2  && <button className="flex m-auto text-[#959595] mt-5" onClick={() => setShowAll(!showAll)}>
                {showAll ? 'show less' : 'see more'}
            </button>}
        </div>
        </div >
    )
}

export default ExperienceCart