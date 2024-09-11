import React from 'react';
import introductionRectangle2 from '../../../public/images/design/introductionRectangle2.svg';
import person from '../../../public/images/person.png';
import Image from 'next/image';
import Link from 'next/link';
import { getData } from '../../../lib/getData';
const ImageIntroduction = () => {
    const data = getData('socialMedia.json');
    return (
        <div className="relative hidden md:block">
            <Image src={introductionRectangle2} className="absolute right-0 -top-4 lg:-top-2 xl:-top-20 h-[35rem] w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] 3xl:w-[50rem] xl:h-[40rem]  3xl:h-[50rem]" />
            <div className="absolute top-[3rem] lg:top-[5rem] 3xl:top-[8rem] 2xl:bg-cover right-[5%] lg:right-[13%] xl:right-[16%] 2xl:right-[17%] 3xl:right-[19%] flex flex-col items-center">
                <Image src={person} className="w-[20rem] h-[20rem] 3xl:w-[25rem] 3xl:h-[25rem]" />
                <p className="mt-5 3xl:mt-6 text-xl 3xl:text-2xl text-center">MS in CS Student
                    <br />
                    University of X</p>
                <ul className="flex items-center [&>*]:mx-3 mt-5 3xl:mt-6">
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
    );
};

export default ImageIntroduction;
