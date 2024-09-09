import React from 'react';
import rectangle27 from '../../../public/images/design/Rectangle 27.png';
import person from '../../../public/images/person.png';
import Image from 'next/image';
import Link from 'next/link';
import { getData } from '../../../lib/getData';
const ImageIntroduction = () => {
    const data = getData('socialMedia.json');
    return (
        <div className="relative hidden md:block">
            <Image src={rectangle27} className="absolute right-0 w-[90%] h-[35rem] xl:w-[70%] xl:h-[40rem] 3xl:w-full 3xl:h-full" />
            <div className="absolute top-[3rem] lg:top-[5rem] 3xl:top-[13rem] 2xl:bg-cover right-[5%] xl:right-[10%] 2xl:right-[15%] 3xl:right-[10%] flex flex-col items-center">
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
