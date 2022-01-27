import React from 'react';
import { Route } from 'react-router-dom';
import Search from './Search';


const Header = () => {
    return (
        <div className='w-full fixed grid grid-cols-3 py-6 bg-zinc-100 shadow-sm '>


            <div className='col-span-1'>
                <h1 className='ml-12 cursor-pointer text-orange-500 font-bold text-5xl'>Clinic<span className='text-green-700' >Support</span></h1>
            </div>
            <div className='col-span-2 items-center ml-20'>
                <Search /> 
            </div>

        </div>

    )
};

export default Header;
