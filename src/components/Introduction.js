import React from 'react'
import image from '../../public/images/bgImage.png'
import rectangle27 from '../../public/images/Rectangle 27.png'
import person from '../../public/images/person.png'
import Image from 'next/image'
import Link from 'next/link'
import { getData } from '../../lib/getData'
import DetaiIntroduction from './DetaiIntroduction'

const Introduction = async () => {
    const data = getData('socialMedia.json');
    const educationData = getData('educations.json');

    return (
        <div className="relative 3xl:bg-cover bg-no-repeat grid grid-cols-2" style={{
            "backgroundImage": `linear-gradient(rgb(255 255 255 / 92%), rgb(255 255 255 / 92%)), url(${image.src})`,
        }}>
            <DetaiIntroduction educationData={educationData} />
            <div className="relative">
                <Image src={rectangle27} className="absolute right-0" />
                <div className="absolute top-[13rem] 2xl:bg-cover right-[10%] flex flex-col items-center">
                    <Image src={person} className="" />
                    <p className="mt-6 text-2xl text-center">MS in CS Student
                        <br />
                        University of X</p>
                    <ul className="flex items-center [&>*]:mx-3 mt-6">
                        {data.socialMedias.map(socialMedia =>
                            <li>
                                <Link href={socialMedia.link}>
                                    <Image
                                        alt={socialMedia.alt}
                                        src={socialMedia.image}
                                        width={25}
                                        height={25}
                                    />
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Introduction