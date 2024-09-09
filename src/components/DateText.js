'use client';
import Image from 'next/image';

const DateText = (props) => {

    return (
        <div className="my-12 xl:pl-10 2xl:pl-14 pt-4 3:pt-10">
            {props.data.slice(0, 3).map(n =>
                <div className="text-gray-dark flex items-start">
                    <p className="w-36">{n.date}</p>
                    <div className="mt-[0.7rem]">
                        <div className="w-2 h-2 mx-7 bg-[#BCC0C2] rounded-full"></div>
                        <div className="w-1 h-12 mx-[1.85rem] rounded-lg mt-1 bg-[#D7E1EB]"></div>
                    </div>
                    <p className="text-lg 3xl:text-xl">{n.text}</p>
                </div>)}
            {props.data.slice(3, 4).map(n =>
                <div className={`${props.showAll ? 'text-gray-dark' : 'text-gray'} flex items-start`}>
                    <p className="w-36">{n.date}</p>
                    <div className="mt-1">
                        <div className="w-2 h-2 mx-7 bg-[#BCC0C2] rounded-full"></div>
                        {props.showAll && <div className="w-1 h-14 mx-[1.85rem] rounded-lg mt-1 bg-[#D7E1EB]"></div>}
                    </div>
                    <p className="text-lg 3xl:text-xl">{n.text}</p>
                </div>)}
            <div className={`${props.showAll ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in duration-700`}>
                {props.showAll && props.data.slice(4).map((n, index) =>
                    <div key={index} className={`text-gray-dark flex items-start`}>
                        <p className="w-36">{n.date}</p>
                        <div className="mt-1">
                            <div className="w-2 h-2 mx-7 bg-[#BCC0C2] rounded-full"></div>
                            {console.log(props.data.length, index)}
                            {props.data.length !== index + 5 && <div className="w-1 h-14 mx-[1.85rem] rounded-lg mt-1 bg-[#D7E1EB]"></div>}
                        </div>
                        <p className="text-lg 3xl:text-xl">{n.text}</p>
                    </div>)}
            </div>
        </div>
    );
};

export default DateText;
