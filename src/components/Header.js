import React from 'react'

const Header = () => {
    return (
        <div className='bg-black flex justify-between px-32 pt-6 pb-4'>
            <div className='text-3xl 2xl:text-4xl'>
                H o s s
            </div>
            <ul className='flex [&>*]:pl-8'>
                <li>About</li>
                <li>News</li>
                <li>Publications</li>
                <li>Experience</li>
            </ul>
        </div>
    )
}

export default Header