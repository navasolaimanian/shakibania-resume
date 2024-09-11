'use client';
import DateText from './DateText';
import { useState } from 'react';
import rectangle54 from '../../public/images/design/Rectangle 54.png';
import rectangle65 from '../../public/images/design/Rectangle 65.png';
import Image from 'next/image';


const HonorsAwards = (props) => {
  const [showAllAwards, setShowAllAwards] = useState(false);

  return (
    <div className="pl-5 lg:pl-10 xl:pl-20 2xl:pl-28 3xl:pl-44 py-12 3xl:pt-8 bg-[#F7F2EA] relative">
      <Image src={rectangle54} className="absolute right-0 -top-44" />
      <p className="text-gray-dark text-2xl 2xl:text-3xl">Honors & Awards</p>
      <DateText showAll={showAllAwards} data={props.data.awards} button={'see all Honors & Awards'} />
      {!showAllAwards && <button className="text-[#748595] mx-auto flex" onClick={() => setShowAllAwards(!showAllAwards)}>
        see all Honors & Awards
      </button>}
      <Image src={rectangle65} className="absolute right-56" />
    </div>

  );
};

export default HonorsAwards;
