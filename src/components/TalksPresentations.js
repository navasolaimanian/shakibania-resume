'use client'
import { useState } from 'react';
import Image from 'next/image';
import Cart from './Cart';
import towRecrangle2 from '../../public/images/design/2Recrangle 2.png';
import Recrangle66 from '../../public/images/design/Rectangle 66.png';
import Recrangle67 from '../../public/images/design/Rectangle 67.png';



const TalksPresentations = (props) => {
  const [showAllTalksPresentations, setShowAllTalksPresentations] = useState(false);
    
  return (
      <div className="relative py-12">
      <Image src={towRecrangle2} className="absolute left-0 top-[20%] -z-10" />
      <Image src={Recrangle66} className="absolute right-0 top-[50%] -z-10" />
      <Image src={Recrangle67} className="absolute right-8 top-[63%] -z-10" />
      <div className="">
        <div className="pl-10 xl:pl-20 2xl:pl-28 3xl:pl-44 pt-8">
          <p className="text-gray-dark text-2xl xl:text-3xl mb-3">Talks & Presentations</p>
        </div>
        <div className="flex flex-col items-center justify-center pt-8 xl:pt-16">
          {props.data.TalksPresentations.slice(0, 2).map(publication =>
            <Cart publication={publication} />
          )}
        </div>
        <div className={`${showAllTalksPresentations ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in duration-700 flex flex-col items-center justify-center` }>
          {showAllTalksPresentations && props.data.TalksPresentations.slice(3).map(publication =>
            <Cart publication={publication} />
          )}
        </div>
        <button className="text-[#748595] bg-primary1 py-2 px-4 rounded-lg mx-auto flex mb-10"
          onClick={() => setShowAllTalksPresentations(!showAllTalksPresentations)}
        >
          see all TalksPresentations
        </button>
      </div>
    </div>
  )
}

export default TalksPresentations
