import React from 'react';
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className='w-full h-24 fixed  bg-zinc-100 shadow-sm flex items-center justify-start'>
            <Link to={`/test`}>
                <h1 className='ml-12 cursor-pointer text-orange-500 font-bold text-5xl'>Clinic<span className='text-green-700' >Support</span></h1>
            </Link>
        </div>

    )
};

export default Header;
