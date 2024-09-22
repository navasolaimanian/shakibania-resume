'use client';
import DateText from './DateText';
import { useState } from 'react';
import awardsRectangle1 from '../../public/images/design/awardsRectangle1.svg';
import awardsRectangle2 from '../../public/images/design/awardsRectangle2.svg';
import Image from 'next/image';


const HonorsAwards = (props) => {
  const [showAllAwards, setShowAllAwards] = useState(false);

  return (
    <div id="newsSection" className="bg-[#F7F2EA] relative py-12 scroll-mt-48">
      <Image src={awardsRectangle1} className="absolute right-0 -top-44" />
      <div className="container m-auto">
        <div className="px-5 lg:px-10 xl:px-20 2xl:px-28 3xl:px-44 pt-6 3xl:pt-8">
          <h1 className="text-gray-dark text-2xl 2xl:text-3xl">News</h1>
          <DateText showAll={showAllAwards} data={props.data.awards} button={'see all Honors & Awards'} />
        </div>
        {!showAllAwards && <button className="text-[#748595] mx-auto flex" onClick={() => setShowAllAwards(!showAllAwards)}>
          see all Honors & Awards
        </button>}
      </div>
      <Image src={awardsRectangle2} className="absolute right-56" />
    </div>

  );
};

export default HonorsAwards;
