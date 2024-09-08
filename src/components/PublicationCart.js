'use client';
import Image from 'next/image';
import { FaQuoteRight } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { useState } from 'react';

const PublicationCart = (props) => {
  const [isHover, setIsHover] = useState(false);
  console.log(props.publication.links);
  return (
    <div className="flex mb-8 w-[90%] xl:w-[80%] bg-white p-4 xl:p-6 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
      <Image src={props.publication.image} className="mr-4 xl:mr-6 2xl:mr-12 w-[35%] xl:w-[30%] max-h-44 h-auto" alt="alt" width={100} height={100} />
      <div>
        <h1 className="xl:text-lg 2xl:text-xl text-[#7C7D81]">{props.publication.title}</h1>
        <p className="text-xs text-[#9EA8AF] bg-[#DDEAF7] mt-2 inline py-1 px-2 rounded-lg">{props.publication.journal}</p>
        <p className="text-[#A8AFB4] text-xs mt-2">{props.publication.author}</p>
        <div className="mt-4 flex [&>*]:mr-1">
          {props.publication.bibtex &&
            <button className="w-fit py-1 px-2 font-bold border hover:fill-[#EE142C] border-[#8CA7C3] hover:border-[#EE142C] text-[#8CA7C3] hover:text-[#EE142C] rounded flex items-center">
              <FaQuoteRight />
              <span className="text-xs ml-1">BibTeX</span>
            </button>
          }
          {props.publication.pdf &&
            <button className="w-fit py-1 px-2 font-bold border hover:fill-[#EE142C] border-[#8CA7C3] hover:border-[#EE142C] text-[#8CA7C3] hover:text-[#EE142C] rounded flex items-center">
              <FaFilePdf />
              <span className="text-xs ml-1">Pdf</span>
            </button>
          }
          {props.publication.code &&
            <button className="w-fit py-1 px-2 font-bold border hover:fill-[#EE142C] border-[#8CA7C3] hover:border-[#EE142C] text-[#8CA7C3] hover:text-[#EE142C] rounded flex items-center">
              <FaCode />
              <span className="text-xs ml-1">Code</span>
            </button>
          }
          {props.publication.website &&
            <button className="w-fit py-1 px-2 font-bold border hover:fill-[#EE142C] border-[#8CA7C3] hover:border-[#EE142C] text-[#8CA7C3] hover:text-[#EE142C] rounded flex items-center">
              <IoEarthSharp />
              <span className="text-xs ml-1">Website</span>
            </button>
          }
          {props.publication.youtube &&
            <button className="w-fit py-1 px-2 font-bold border hover:fill-[#EE142C] border-[#8CA7C3] hover:border-[#EE142C] text-[#8CA7C3] hover:text-[#EE142C] rounded flex items-center">
              <FaYoutube />
              <span className="text-xs ml-1">YouTube</span>
            </button>
          }


        </div>
      </div>
    </div>
  );
};

export default PublicationCart;
