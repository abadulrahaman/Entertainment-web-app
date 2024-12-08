import React from 'react'
import { FaRegBookmark } from 'react-icons/fa'
import { RiFilmFill } from 'react-icons/ri'

export const SmallCard = () => {
  return (
    <div className='relative max-w-[328px]'>
        <div className="relative ">
            <img
                className="w-full object-cover rounded-lg"
                src="https://static.vecteezy.com/system/resources/thumbnails/028/636/070/small/an-empty-director-chair-in-front-of-an-empty-film-set-gloomy-background-photo.jpg"
                alt="Movie Thumbnail"
            />
        </div>

        <div className='absolute top-5 right-5 text-white bg-gray-600 p-2 rounded-full opacity-80 cursor-pointer'>
            <FaRegBookmark />
        </div>

        <div className=" text-white my-2">
            <div className='flex items-center text-sm gap-2'>
                <p>2024</p>
                <p>•</p>
                <RiFilmFill />
                <p>Movie</p>
                <p>•</p>
                <p>PG</p>

            </div>
        <h3 className="text-xl font-semibold">Venom: The Last Dance</h3>
    </div>
    </div>
  )
}
