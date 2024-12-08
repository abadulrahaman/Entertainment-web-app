import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

export const Searchbar = () => {
  return (
    <div className='flex items-center gap-2 p-4'>
        <IoSearchOutline className='text-white text-2xl '/>

        <form className='flex-grow'>
            <input 
            className='bg-transparent outline-none border-transparent border-b-2 focus:border-[#5A6A90] text-white text-xl w-full'
            type="text" 
            placeholder='Search for Movies or TV Series'
            />
        </form>

        <button className='bg-[#5A6A90] text-white py-2 px-3 rounded-lg text-lg hover:bg-white hover:text-black'>
            Search
        </button>
    </div>
  )
}

