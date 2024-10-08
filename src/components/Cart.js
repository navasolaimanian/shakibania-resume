'use client';
import Image from 'next/image';
import { FaQuoteRight } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { SiGoogleslides } from "react-icons/si";
import Link from 'next/link';

const Cart = (props) => {

  return (
    <div className="shadow-4xl md:hover:shadow-3xl cursor-pointer grid self-center sm:grid-cols-3 mb-4 md:mb-8 w-full md:w-[90%] lg:w-[80%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[70%] bg-[#F4F7FA] sm:bg-white p-5 lg:p-4 rounded-lg lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-[1.01]">
      <div className="w-full col-span-1 sm:col-span-1 p-1 ld:p-0 flex items-center justify-center">
        <Image src={props.data.image} className="h-full m-auto rounded-lg" alt="alt"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="sm:col-span-2 flex flex-col justify-between sm:ml-2">
        <div>
          <div className="flex flex-col sm:flex-col-reverse">
            <p className={`text-xs ${!props.author ? "text-[#E3898B]" :"text-[#C27E63]"} mt-2 sm:mt-1 inline py-1 font-bold`}>{props.data.journal}</p>
            <h1 className="font-bold text-sm md:text-base xl:text-lg 2xl:text-xl text-[#7C7D81]">{props.data.title}</h1>
          </div>
          {props.author && <div className="text-[#A8AFB4] text-[9px] md:text-xs mt-2">
            {props.data.authors.map((author, index) => <Link className="hover:text-gray-dark" key={index} href={author.link}> {author.name}{author.co ? "*" : ""} {index + 1 !== props.data.authors.length && <span className="text-[#A8AFB4]"> | </span>}</Link>)}
          </div>}
        </div>
        <div className="[&>*]:mt-2 md:[&>*]:mt-4 flex flex-wrap [&>*]:mr-2">
          {props.data.bibtex &&
            <button onClick={() => {
              props.setShowModal(true)
              props.setModalData(props.data.bibtex.data)
              props.setCartTitle(props.data.title)
            }} className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <FaQuoteRight />
              <span className="text-xs ml-1">BibTeX</span>
            </button>
          }
          {props.data.pdf &&
            <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <FaFilePdf />
              <span className="text-xs ml-1">Pdf</span>
            </button>
          }
          {props.data.code &&
            <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <FaCode />
              <span className="text-xs ml-1">Code</span>
            </button>
          }
          {props.data.website &&
            <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <IoEarthSharp />
              <span className="text-xs ml-1">Website</span>
            </button>
          }
          {props.data.youtube &&
            <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <FaYoutube />
              <span className="text-xs ml-1">YouTube</span>
            </button>
          }
          {props.data.slides &&
            <button className="w-fit py-1 px-2 font-bold text-xs sm:text-sm md:text-base border hover:fill-[#59697a] border-[#8CA7C3] hover:border-[#59697a] text-[#8CA7C3] hover:text-[#59697a] rounded flex items-center">
              <SiGoogleslides />
              <span className="text-xs ml-1">slides</span>
            </button>
          }


        </div>
      </div>
    </div>
  );
};

export default Cart;
