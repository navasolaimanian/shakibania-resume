'use client'
import React from 'react'
import Image from 'next/image'
import EducationButton from './EducationButton'
import Educations from './Educations'
import rectangle32 from '../../public/images/Rectangle 32.png'
import { useState } from 'react'

const DetaiIntroduction = (props) => {
    const [showEducation, setShowEducation] = useState(false)
    return (
        <div className="relative">
            <Image src={rectangle32} className="absolute -top-32 -z-10" />
            <div className="ml-28 2xl:ml-40 mb-32 3xl:mb-40 mt-[3rem] 3xl:mt-[17rem]">
                <p className="text-gray text-3xl 2xl:text-4xl 3xl:text-5xl font-medium mb-4">Hello! I’m</p>
                <h1 className="text-gray-dark text-4xl 2xl:text-5xl 3xl:text-6xl font-black">Hossein  Shakibania</h1>
                <p className="text-gray-dark 2xl:text-lg 3xl:text-xl text-justify mt-6 3xl:mt-10">
                    I am an MS student in Computer Science at Georgia Tech, working in the Computer Vision Lab under the supervision of Prof. H. Shi. I completed my BS in Computer Engineering in 2024 at Bu-Ali Sina University, where I was supervised by Prof. Hassan Khotanlou (RIV Lab) and Prof. Muharram Mansoorizadeh.
                </p>
                <p className=" text-gray-dark 2xl:text-lg 3xl:text-xl text-justify mt-3 3xl:mt-5">
                    My research focuses on <span className="font-bold">Computer Vision</span>, with a particular passion for <span className="font-bold">Generative AI</span>, especially its applications in <span className="font-bold">Image Synthesis</span>, <span className="font-bold">Controllable Editing</span>, and <span className="font-bold">Enhancement</span>. I aim to build AI systems with super-human visual abilities that are <span className="font-bold">Efficient</span>, <span className="font-bold">Trustworthy</span>, and <span className="font-bold">Creative</span>.
                </p>
                <p className="text-gray-dark 2xl:text-lg 3xl:text-xl text-justify mt-3 3xl:mt-5">
                    Feel free to reach out. Let’s chat over a virtual coffee! ☕
                </p>

                <p className="text-gray-dark 2xl:text-lg 3xl:text-xl text-justify mt-3 3xl:mt-5">
                    IThis place is for a possible news or something
                </p>
                <EducationButton showEducation={showEducation} setShowEducation={setShowEducation} />
                <div className={`${showEducation ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in duration-700`}>
                    {props.educationData.educations.map(education =>
                        <Educations educationData={education} showEducation={showEducation} setShowEducation={setShowEducation} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default DetaiIntroduction