'use client';
import Image from 'next/image';
import { FaQuoteRight } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { useState } from 'react';
import Link from 'next/link';

const Cart = (props) => {
  const [isHover, setIsHover] = useState(false);
  console.log(props.publication);
  return (
    <div className="shadow-md grid self-center sm:grid-cols-3 mb-4 md:mb-8 w-full md:w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[55%] bg-[#F4F7FA] sm:bg-white p-5 lg:p-4 rounded-lg lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-105">
      <div className="w-full col-span-1 sm:col-span-1 p-1 ld:p-0">
        <Image src={props.publication.image} className="h-full m-auto rounded-lg" alt="alt" width={300} height={300} />
      </div>
      <div className="sm:col-span-2 flex flex-col sm:ml-2">
        <div>
          <p className="text-xs text-[#C27E63] mt-2 inline py-1 font-bold">{props.publication.journal}</p>
          <h1 className="font-bold text-sm md:text-base xl:text-lg 2xl:text-xl text-[#7C7D81]">{props.publication.title}</h1>
          {props.author && props.author && <div className="text-[#A8AFB4] text-[9px] md:text-xs mt-2">
            {props.publication.authors.map((author,index) => <Link className="hover:text-gray-dark" key={index} href={author.link}> {author.name}{author.co ? "*" : ""} {index + 1 !== props.publication.authors.length && <span className="text-[#A8AFB4]"> | </span>}</Link>)}
            </div>}
        </div>
        <div className="mt-4 flex [&>*]:mr-2">
          {props.publication.bibtex &&
            <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <FaQuoteRight />
              <span className="text-xs ml-1">BibTeX</span>
            </button>
          }
          {props.publication.pdf &&
            <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <FaFilePdf />
              <span className="text-xs ml-1">Pdf</span>
            </button>
          }
          {props.publication.code &&
            <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <FaCode />
              <span className="text-xs ml-1">Code</span>
            </button>
          }
          {props.publication.website &&
            <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <IoEarthSharp />
              <span className="text-xs ml-1">Website</span>
            </button>
          }
          {props.publication.youtube &&
            <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <FaYoutube />
              <span className="text-xs ml-1">YouTube</span>
            </button>
          }


        </div>
      </div>
    </div>
  );
};

export default Cart;
