'use client';
import Image from 'next/image';
import { FaQuoteRight } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { useState } from 'react';

const Cart = (props) => {
  const [isHover, setIsHover] = useState(false);
  console.log(props.publication.links);
  return (
    <div className="shadow-md grid self-center sm:grid-cols-5 lg:grid-cols-4 mb-8 w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[55%] bg-[#F4F7FA] sm:bg-white p-4 xl:p-6 rounded-lg lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-110">
      <div className="w-full sm:col-span-2 lg:col-span-1">
        <Image src={props.publication.image} className="p-1 h-full m-auto" alt="alt" width={300} height={200} />
      </div>
      <div className="px-5 sm:col-span-3 flex flex-col">
        <div>
          <h1 className="xl:text-lg 2xl:text-xl text-[#7C7D81]">{props.publication.title}</h1>
          <p className="text-xs text-[#C27E63] mt-2 inline py-1 font-bold">{props.publication.journal}</p>
          <p className="text-[#A8AFB4] text-xs mt-2">{props.publication.author}</p>
        </div>
        <div className="mt-4 flex [&>*]:mr-2">
          {props.publication.bibtex &&
            <button className="w-fit py-1 px-2 font-bold border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <FaQuoteRight />
              <span className="text-xs ml-1">BibTeX</span>
            </button>
          }
          {props.publication.pdf &&
            <button className="w-fit py-1 px-2 font-bold border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <FaFilePdf />
              <span className="text-xs ml-1">Pdf</span>
            </button>
          }
          {props.publication.code &&
            <button className="w-fit py-1 px-2 font-bold border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <FaCode />
              <span className="text-xs ml-1">Code</span>
            </button>
          }
          {props.publication.website &&
            <button className="w-fit py-1 px-2 font-bold border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <IoEarthSharp />
              <span className="text-xs ml-1">Website</span>
            </button>
          }
          {props.publication.youtube &&
            <button className="w-fit py-1 px-2 font-bold border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
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
