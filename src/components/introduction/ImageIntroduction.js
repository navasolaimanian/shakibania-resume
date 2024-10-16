import introductionRectangle2 from '../../../public/images/design/Rectangle 27 (8).svg';
import introductionRectangle3 from '../../../public/images/design/introductionRectangle2.svg';
import person from '../../../public/images/person.png';
import Image from 'next/image';
import Link from 'next/link';
import { getData } from '../../../lib/getData';

const ImageIntroduction = () => {
    const data = getData('socialMedia.json');
    
    return (
        <div className="hidden md:block">
            <Image alt="" src={introductionRectangle2} className="absolute right-0 -top-4 lg:-top-2 xl:-top-20 hidden xl:block xl:w-[43%] 2xl:w-[40%] 3xl:w-[55rem] h-[53rem] lg:h-[55rem] xl:h-[60rem] 2xl:h-[58rem] 3xl:h-[57rem]" />
            <Image alt="" src={introductionRectangle3} className="absolute right-0 -top-4 lg:-top-2 xl:-top-20 xl:hidden w-[22rem] lg:w-[30rem] h-[47rem] lg:h-[40rem]" />
            <div className="absolute top-[9rem] lg:top-[9rem] xl:top-[10rem] 3xl:top-[11rem] 2xl:bg-cover right-[2%] lg:right-[10%] xl:right-[16%] 2xl:right-[19%] 3xl:right-[18%] flex flex-col items-center">
                <Image alt="" src={person} className="w-[20rem] h-[20rem] 3xl:w-[25rem] 3xl:h-[25rem]" />
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
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
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
