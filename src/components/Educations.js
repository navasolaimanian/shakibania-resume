import Image from 'next/image'
import React from 'react'
import buali from '../../public/images/buali.png'

const Educations = (props) => {
    console.log(props.index, props.length)
    return (
        <div>
            {props.showEducation &&
                <div className="my-3 md:ml-5 lg:ml-10 xl:ml-20 flex">
                    <Image width={100} height={100} className="w-16 h-16 lg:mr-5" src={props.educationData.image} />
                    {/* <span className="w-10 h-10 bg-white rounded-full"></span> */}
                    <div className="text-gray-dark flex">
                        <div className="pt-3">
                            <div className="w-2 h-2 mx-3 lg:mx-7 bg-[#BCC0C2] rounded-full"></div>
                            {props.index + 1 !== props.length &&
                                <div className="w-1 h-28 mx-[0.9rem] lg:mx-[1.85rem] rounded-lg bg-[#D7E1EB]"></div>
                            }
                        </div>
                        <div className="lg:w-72">
                            <p className="text-lg lg:text-xl">{props.educationData.university}</p>
                            <p>{props.educationData.degree}</p>
                            <p>{props.educationData.date}</p>
                            <ul className="list-disc ml-8">
                                {props.educationData.details.map((detail, index) =>
                                    <li key={index}>{detail}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            }
            {/* <div id="endOfEducations"></div> */}
        </div>
    )
}

export default Educations