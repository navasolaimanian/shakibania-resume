'use client'
import { useState } from 'react';
import Image from 'next/image';
import Cart from './Cart';
import talksRectangle1 from '../../public/images/design/talksRectangle1.svg';
import talksRectangle2 from '../../public/images/design/talksRectangle2.svg';
import talksRectangle3 from '../../public/images/design/talksRectangle3.svg';



const TalksPresentations = (props) => {
  const [showAllTalksPresentations, setShowAllTalksPresentations] = useState(false);

  return (
    <div id="publicationSection" className="relative scroll-mt-48 px-7 lg:px-10 xl:px-20 2xl:px-28 3xl:px-44 pt-6 3xl:pt-8">
      <Image src={talksRectangle1} className="absolute left-0 top-[20%] -z-10 hidden lg:block" />
      <Image src={talksRectangle2} className="absolute right-0 top-[50%] -z-10 hidden lg:block" />
      <Image src={talksRectangle3} className="absolute right-8 top-[70%] -z-10 hidden lg:block" />
      <div className="container m-auto">
        <div className="">
          <p className="text-gray-dark  text-xl xl:text-2xl 2xl:text-3xl mb-3">Talks & Presentations</p>
        </div>
        <div className="flex flex-col items-center justify-center pt-8 xl:pt-16">
          {props.data.TalksPresentations.slice(0, 2).map(publication =>
            <Cart author={false} publication={publication} />
          )}
        </div>
        <div className={`${showAllTalksPresentations ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in duration-700 flex flex-col items-center justify-center`}>
          {showAllTalksPresentations && props.data.TalksPresentations.slice(3).map(publication =>
            <Cart author={false} publication={publication} />
          )}
        </div>
        <button className="text-[#748595] text-xs md:text-sm xl:text-base bg-primary1 mt-6 py-2 px-4 rounded-lg mx-auto flex mb-10"
          onClick={() => setShowAllTalksPresentations(!showAllTalksPresentations)}
        >
          see all Talks & Presentations
        </button>
      </div>
    </div>
  )
}

export default TalksPresentations
