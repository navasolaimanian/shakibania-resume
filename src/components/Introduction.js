import React from 'react'
import image from '../../public/images/bgImage.png'
import rectangle32 from '../../public/images/Rectangle 32.png'
import rectangle27 from '../../public/images/Rectangle 27.png'
import person from '../../public/images/person.png'
import Polygon from '../../public/images/Polygon.png'
import Image from 'next/image'
import Link from 'next/link'
import { getSocialMediaData } from '../../lib/getSocialMediaData'

const Introduction = async () => {
    const data = getSocialMediaData();

    return (
        <div className="relative -z-20 h-screen bg-cover bg-no-repeat grid grid-cols-2" style={{
            "backgroundImage": `linear-gradient(rgb(255 255 255 / 92%), rgb(255 255 255 / 92%)), url(${image.src})`,
        }}>
            <div className="relative">
                <Image src={rectangle32} className="absolute -top-32 -z-10" />
                <div className="m-40 mr-0">
                    <p className="text-gray text-5xl font-medium">Hello! I’m</p>
                    <h1 className="text-gray-dark text-6xl font-black">Hossein  Shakibania</h1>
                    <p className="text-gray-dark text-xl text-justify mt-10">I am an MS student in Computer Science at Georgia Tech, working in the Computer Vision Lab under the supervision of Prof. H. Shi. I completed my BS in Computer Engineering in 2024 at Bu-Ali Sina University, where I was supervised by Prof. Hassan Khotanlou (RIV Lab) and Prof. Muharram Mansoorizadeh.
                        My research focuses on <span className="font-bold">Computer Vision</span>, with a particular passion for <span className="font-bold">Generative AI</span>, especially its applications in <span className="font-bold">Image Synthesis</span>, <span className="font-bold">Controllable Editing</span>, and <span className="font-bold">Enhancement</span>. I aim to build AI systems with super-human visual abilities that are <span className="font-bold">Efficient</span>, <span className="font-bold">Trustworthy</span>, and <span className="font-bold">Creative</span>.
                        Feel free to reach out. Let’s chat over a virtual coffee! ☕
                        IThis place is for a possible news or something</p>
                    <button className="flex items-center mt-6">
                        <Image src={Polygon} />
                        <span className="text-gray-dark text-xl font-bold ml-2">
                            Education
                        </span>
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={rectangle27} className="absolute right-0" />
                <div className="absolute top-[20%] right-[20%] flex flex-col items-center">
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