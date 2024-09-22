'use client';
import Image from 'next/image';

const DateText = (props) => {

    return (
        <div className="my-12 xl:pl-10 2xl:pl-14 pt-4 pr-2 3:pt-10">
            {props.data.slice(0, 3).map(n =>
                <div className="text-gray-dark flex items-start">
                    <p className="text-xs sm:text-sm md:text-base min-w-[27%] lg:min-w-[10%] w-[19rem] sm:w-36 pt-2 text-right mr-3 sm:mr-6">{n.date}</p>
                    <div className="mt-[0.7rem]">
                        <div className="w-2 h-2 mx-3 sm:mx-7 bg-[#BCC0C2] rounded-full"></div>
                        <div className="w-1 h-16 sm:h-14 mx-[0.9rem] sm:mx-[1.85rem] rounded-lg mt-1 bg-[#D7E1EB]"></div>
                    </div>
                    <p className="text-sm xl:text-lg 3xl:text-xl min-w-[60%] sm:min-w-[60%] ml-3 sm:ml-6">{n.text}</p>
                </div>)}
            {props.data.slice(3, 4).map(n =>
                <div className={`${props.showAll ? 'text-gray-dark' : 'text-gray'} flex items-start`}>
                    <p className="text-xs sm:text-sm md:text-base min-w-[27%] lg:min-w-[10%] w-[19rem] sm:w-36 pt-2 text-right mr-3 sm:mr-6">{n.date}</p>
                    <div className="mt-1">
                        <div className="w-2 h-2 mx-3 sm:mx-7 bg-[#BCC0C2] rounded-full"></div>
                        {props.showAll && <div className="w-1 h-16 sm:h-14 mx-[0.9rem] sm:mx-[1.85rem] rounded-lg mt-1 bg-[#D7E1EB]"></div>}
                    </div>
                    <p className="text-sm xl:text-lg 3xl:text-xl min-w-[60%] sm:min-w-[60%] ml-3 sm:ml-6">{n.text}</p>
                </div>)}
            <div className={`${props.showAll ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in duration-700`}>
                {props.showAll && props.data.slice(4).map((n, index) =>
                    <div key={index} className={`text-gray-dark flex items-start`}>
                        <p className="text-xs sm:text-sm md:text-base min-w-[27%] lg:min-w-[10%] w-[19rem] sm:w-36 pt-2 text-right mr-3 sm:mr-6">{n.date}</p>
                        <div className="mt-1">
                            <div className="w-2 h-2 mx-3 sm:mx-7 bg-[#BCC0C2] rounded-full"></div>
                            {props.data.length !== index + 5 && <div className="w-1 h-16 sm:h-14 mx-[0.9rem] sm:mx-[1.85rem] rounded-lg mt-1 bg-[#D7E1EB]"></div>}
                        </div>
                        <p className="text-sm xl:text-lg 3xl:text-xl min-w-[60%] sm:min-w-[60%] ml-3 sm:ml-6">{n.text}</p>
                    </div>)}
            </div>
        </div>
    );
};

export default DateText;
