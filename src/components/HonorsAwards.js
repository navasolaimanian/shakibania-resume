'use client';
import DateText from './DateText';
import { useState } from 'react';
import awardsRectangle1 from '../../public/images/design/awardsRectangle1.svg';
import awardsRectangle2 from '../../public/images/design/awardsRectangle2.svg';
import Image from 'next/image';


const HonorsAwards = (props) => {
  const [showAllAwards, setShowAllAwards] = useState(false);

  return (
    <div id="newsSection" className="bg-[#F7F2EA] relative pb-10 scroll-mt-48">
      <Image src={awardsRectangle1} className="absolute right-0 -top-44" />
      <div className="container m-auto">
        <div className="px-7 lg:px-10 xl:px-20 2xl:px-28 3xl:px-44 pt-7 3xl:pt-8">
          <h1 className="text-gray-dark text-2xl 2xl:text-3xl">Honors & Awards</h1>
          <DateText showAll={showAllAwards} data={props.data.awards} button={'see all Honors & Awards'} />
        </div>
        {!showAllAwards && <button className="text-[#748595] text-xs md:text-sm xl:text-base mx-auto mt-7 flex" onClick={() => setShowAllAwards(!showAllAwards)}>
          see all Honors & Awards
        </button>}
      </div>
      <Image src={awardsRectangle2} className="absolute right-16" />
    </div>

  );
};

export default HonorsAwards;
