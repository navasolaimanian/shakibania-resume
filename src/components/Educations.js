import Image from 'next/image'
import React from 'react'
import buali from '../../public/images/buali.png'

const Educations = (props) => {
    return (
        <>
            {props.showEducation &&
                <div className="my-3 ml-20 flex">
                    <Image width={100} height={100} className="w-16 h-16 mr-5" src={props.educationData.image} />
                    {/* <span className="w-10 h-10 bg-white rounded-full"></span> */}
                    <div className="text-gray-dark">
                        <p className="text-xl">{props.educationData.university}</p>
                        <p>{props.educationData.degree}</p>
                        <p>{props.educationData.date}</p>
                        <ul className="list-disc ml-8">
                            {props.educationData.details.map((detail, index) =>
                                <li key={index}>{detail}</li>
                            )}
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}

export default Educations