import React from 'react'
import { getData } from '../../lib/getData'

const News = () => {
    const data = getData('news.json')
    return (
        <div className="bg-primary1 pl-36 xl:pl-44 py-8">
            <h1 className="text-gray-dark text-3xl">News</h1>
            <div className="my-12 mx-20">
                {data.news.slice(0, -1).map(n =>
                    <div className="text-gray-dark flex items-start">
                        <p className="w-36">{n.date}</p>
                        <div className="mt-1">
                            <div className="w-2 h-2 mx-7 bg-[#BCC0C2] rounded-full"></div>
                            <div className="w-1 h-16 mx-[1.85rem] rounded-lg mt-1 bg-[#D7E1EB]"></div>
                        </div>
                        <p className="text-xl">{n.news}</p>
                    </div>)}
                {data.news.slice(-1).map(n =>
                    <div className="text-gray-dark mt-8 flex items-center">
                        <p className="w-36">{n.date}</p>
                        <span className="w-2 h-2 mx-7 bg-gray rounded-full"></span>
                        <p className="text-xl text-gray">{n.news}</p>
                    </div>)}
            </div>
        </div>
    )
}

export default News