import React from 'react';
import { Route, Link } from 'react-router-dom';
import Search from './Search';


const Header = ({ history }) => {
    return (
        <div className='flex flex-col w-full fixed md:grid md:grid-cols-3 py-6 bg-zinc-100 shadow-sm mb-12'>


            <div className='md:col-span-1'>
                <Link to="/" className='hover:no-underline'>
                    <h1 className='ml-12 cursor-pointer text-orange-500 font-bold text-3xl md:text-5xl'>Clinic<span className='text-green-700' >Support</span></h1>
                </Link>
            </div>
            <div className='md:col-span-2 md:items-center ml-12 md:ml-20'>

                <Route render={({ history }) => <Search history={history} />} />

            </div>

        </div>

    )
};

export default Header;
