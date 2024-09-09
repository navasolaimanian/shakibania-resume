'use client';
import React from 'react';
import PublicationCart from './PublicationCart';
import Image from 'next/image';
import rectangle55 from '../../public/images/design/Rectangle 55.png';
import { useState, useEffect } from 'react';


const Publications = (props) => {
  const [showAllPublications, setShowAllPublications] = useState(false);
  const [numberOfPublications, setNumberOfPublications] = useState(false);
  useEffect(() => {
    showAllPublications ? setNumberOfPublications(0) : setNumberOfPublications(4);
  }, [showAllPublications]);

  return (
    <div className="relative">
      <Image src={rectangle55} className="absolute left-0 top-[50%] -z-10" />
      <div className="">
        <div className="pl-10 xl:pl-20 2xl:pl-28 3xl:pl-44 pt-8">
          <p className="text-gray-dark text-2xl xl:text-3xl mb-3">Publications</p>
          <p className="text-[#606060]">For a complete list of my research works, please look up my google scholar.</p>
        </div>
        <div className="flex flex-col items-center justify-center pt-8 xl:pt-16">
          {props.data.publications.slice(0, 2).map(publication =>
            <PublicationCart publication={publication} />
          )}
        </div>
        <div className={`${showAllPublications ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in duration-700 flex flex-col items-center justify-center` }>
          {showAllPublications && props.data.publications.slice(3).map(publication =>
            <PublicationCart publication={publication} />
          )}
        </div>
        <button className="text-[#748595] bg-primary1 py-2 px-4 rounded-lg mx-auto flex mb-10"
          onClick={() => setShowAllPublications(!showAllPublications)}
        >
          see all Publications
        </button>
      </div>
    </div>
  );
};

export default Publications;
