import React, { useState } from 'react'

const Search = ({ history }) => {
    const [keyword, setKeyword] = useState('');

    const searchHandler = (e) => {
        e.preventDefault()

        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }
    return (
        <form onSubmit={searchHandler}  className="border-2 mt-2   md:flex md:items-center relative w-4/5 border-gray-300 bg-white h-full md:px-5 md:pr-16 rounded-lg text-sm md:w-1/2 focus:outline-none text-gray-600" >
            
                <input
                    className="focus:outline-none w-4/5 px-2 py-2"
                    type="search"
                    name="search"
                    placeholder="Search Here"
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button
                    type="submit"
                    className='absolute text-gray-600 border-2 mr-2 md:pb-1 md:mt-1.5  border-gray-300 mt-1 px-2 py-0.5 rounded-md right-0'
                >
                    Search
                </button>
            
        </form>
    );
};

export default Search;
