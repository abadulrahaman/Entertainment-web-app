import React from 'react'
import { FaRegBookmark } from 'react-icons/fa'
import { RiFilmFill } from 'react-icons/ri'

export const BigCard = () => {
  return (
    <div className="bg-[#1c1c27] rounded-lg overflow-hidden shadow-lg relative max-w-lg inset-0 bg-gradient-to-t from-black to-transparent opacity-80">
    <div className="relative">
      <img
        className="w-full object-cover"
        src="https://static.vecteezy.com/system/resources/thumbnails/028/636/070/small/an-empty-director-chair-in-front-of-an-empty-film-set-gloomy-background-photo.jpg"
        alt="Movie Thumbnail"
      />
    </div>

    <div className='absolute top-5 right-5 text-white bg-gray-600 p-2 rounded-full opacity-80 cursor-pointer'>
        <FaRegBookmark />
    </div>

    <div className="absolute bottom-4 left-4 text-white">
        <div className='flex items-center text-sm gap-2'>
            <p>2024</p>
            <p>•</p>
            <RiFilmFill />
            <p>Movie</p>
            <p>•</p>
            <p>PG</p>

        </div>
      <h3 className="text-2xl font-semibold">Beyond Earth</h3>
    </div>

  </div>
  )
}


