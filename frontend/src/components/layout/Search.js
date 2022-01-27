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
        <form onSubmit={searchHandler}  className="border-2 flex items-center relative  border-gray-300 bg-white h-full px-5 pr-16 rounded-lg text-sm w-1/2 focus:outline-none text-gray-600" >
            
                <input
                    className="focus:outline-none w-4/5"
                    type="search"
                    name="search"
                    placeholder="Search Here"
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button
                    type="submit"
                    className='absolute text-gray-600 border-2 border-gray-300 px-2 py-1 rounded-md right-0 mt-1.5 top-0 mr-4'
                >
                    Search
                </button>
            
        </form>
    );
};

export default Search;
