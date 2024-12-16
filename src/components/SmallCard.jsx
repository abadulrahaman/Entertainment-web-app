import React, { useState } from 'react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'
import { RiFilmFill } from 'react-icons/ri'

export const SmallCard = (props) => {

    const [bookmark, setBookmark] = useState();

    // console.log(props);

    const {movie} = props
    
    // console.log(topRatedMovie); // this print all signle movie details

    const toggle = () => {
    setBookmark(!bookmark)
  }

  return (
    <div className='relative max-w-[328px]'>
        <div className="relative ">
            <img
                className="w-full object-cover rounded-lg"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="Movie Thumbnail"
            />
        </div>

        <div 
        onClick={toggle}
        className='absolute top-5 right-5 text-white text-lg bg-gray-600 p-2 rounded-full opacity-80 cursor-pointer'
        > 
            {bookmark ? <FaBookmark /> : <FaRegBookmark />}
        </div>

        <div className=" text-white my-2">
            <div className='flex items-center text-sm gap-2'>
                <p>
                    {movie.release_date
                    ? movie.release_date.split('-')[0]
                    : movie.first_air_date.split('-')[0]}
                </p>
                <p>•</p>
                <RiFilmFill />
                <p>Movie</p>
                <p>•</p>
                <p>{movie.adult ? movie.adult : 'PG'}</p>

            </div>
        <h3 className="text-xl font-semibold">{movie.title}</h3>

        
    </div>
    </div>
  )
}


