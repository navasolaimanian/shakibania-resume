'use client'
import React from 'react'
import rightArrow from '../../public/images/rightArrow.png'
import downArrow from '../../public/images/downArrow.png'
import Image from 'next/image'


const EducationButton = (props) => {
    return (
        <button className="flex items-center mt-6 mb-10" onClick={() => {
            console.log('yay')
            props.setShowEducation(!props.showEducation)}}>
            {props.showEducation ? <Image src={downArrow} /> : <Image src={rightArrow} />}
            <span className="text-gray-dark text-xl font-bold ml-2">
                Education
            </span>
        </button>
    )
}

export default EducationButton