import React from 'react';
import PublicationCart from './PublicationCart';

const Publications = (props) => {
  return (
      <div className="pl-10 xl:pl-20 2xl:pl-28 3xl:pl-44 pt-8">
        <p className="text-gray-dark text-2xl xl:text-3xl mb-3">Publications</p>
        <p className="text-[#606060]">For a complete list of my research works, please look up my google scholar.</p>
        <div className="xl:pl-10 2xl:pl-14 pt-10 xl:pt-20">
          {props.data.publications.map(publication => 
          <PublicationCart publication={publication} />
          )}
        </div>
      </div>
  );
};

export default Publications;
