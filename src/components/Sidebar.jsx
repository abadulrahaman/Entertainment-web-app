import React from 'react'
import { FaBookmark } from 'react-icons/fa'
import { GiTv } from 'react-icons/gi'
import { IoGridSharp } from 'react-icons/io5'
import { MdMovie } from 'react-icons/md'
import { RiFilmFill } from 'react-icons/ri'

export const Sidebar = () => {
  return (
    <div className='bg-[#171E31]  text-2xl w-fit h-[80vh] px-5 py-6 flex flex-col items-center justify-between gap-6 rounded-2xl'>
        <div className='flex flex-col items-center gap-8'>
            <MdMovie className='text-3xl text-[#FC4747] mb-14 cursor-pointer'/>
            <IoGridSharp className='text-white hover:text-[#FC4747] duration-200 delay-150 cursor-pointer'/>
            <RiFilmFill className='text-[#5A698F] hover:text-[#FC4747] duration-200 delay-150 cursor-pointer'/>
            <GiTv className='text-[#5A698F] hover:text-[#FC4747] duration-200 delay-150 cursor-pointer'/>
            <FaBookmark className='text-[#5A698F] hover:text-[#FC4747] duration-200 delay-150 cursor-pointer'/>
        </div>

        <div>
            <img 
            className='h-10 rounded-full w-10 mt-'
            src="logo.jpeg" 
            alt="Error" 
            />
        </div>
    </div>
  )
}
