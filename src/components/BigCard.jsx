import React, { useState } from 'react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'
import { RiFilmFill } from 'react-icons/ri'

export const BigCard = (props) => {
  // console.log(props);
  const { movie } = props
  const [bookmark, setBookmark] = useState()  

  const toggle = () => {
    setBookmark(!bookmark)
  }

  return (
    <div className="bg-[#1c1c27]  rounded-lg overflow-hidden shadow-lg relative max-w-lg inset-0  opacity-80">
      {/* <div className='z-10 absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t opacity-70 from-black to-transparent'></div> */}
      
      <div className="relative">
        <img
          className="w-full object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Movie Thumbnail"
        />
      </div>

      <div
        onClick={toggle}
        className="absolute top-5 right-5 text-white text-xl bg-gray-600 p-2 rounded-full opacity-80 cursor-pointer"
      >
        {bookmark ? <FaBookmark /> : <FaRegBookmark />}
      </div>

      <div className="absolute bottom-4 left-4 text-white">
        <div className="flex items-center text-sm gap-2">
          <p>
            {movie.release_date
              ? movie.release_date.split('-')[0]
              : movie.first_air_date.split('-')[0]}
          </p>
          <p>•</p>
          <RiFilmFill />
          <p>{movie.media_type}</p>
          <p>•</p>
          <p>{movie.adult ? movie.adult : 'PG'}</p>
        </div>
        <h3 className="text-2xl font-semibold">{movie.title ?? movie.name}</h3>
      </div>
    </div>
  )
}
