import React, { useEffect, useState } from 'react'
import { BigCard } from './BigCard'
import { SmallCard } from './SmallCard'

export const Home = () => {
  const [trendingdata, setTrendingdata] = useState([])
  const [topRatedData, setTopRatedData] = useState([]) // This is all top rated movies data
  const [nowPlayigData, setNowPlayingData] = useState([]) // This is all Now playing movies data
  const [upComingData, setUpComingData] = useState([]) // this is all upComing movies data

  const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US'  // This api for trending 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjcwZDFlNmMyYTZhYjgyNTQ1YmQxODU1YjkxNzU4ZCIsIm5iZiI6MTcwMzc1NzMwNi45MzEsInN1YiI6IjY1OGQ0NWZhZjJjZjI1NGVhZDRjYmRkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wRjZRWgNgie7ut-a5d0Uq_I9pVzG9266ZiynAi6MwYQ',
    },
  }

  const fetchMovies = async () => {
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      const smallData = data.results.slice(0, 3)

      console.log(smallData)

      setTrendingdata(smallData) // Assuming the API returns results in a 'results' array
    } catch (error) {
      setError(error.message)
    }
  }

  // This is all Top Rated movies data
  const topRated = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=3e03e1ce77256a238a84c7cb8c0f0271')
    const jsonData = await response.json()
    const smallData = jsonData.results.slice(0, 8)
    setTopRatedData(smallData)
  }

  // This is all Now playing movies data
  const nowplaying = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=3e03e1ce77256a238a84c7cb8c0f0271')
    const jsonData = await response.json()
    const smallddata = jsonData.results.slice(0, 8)
    setNowPlayingData(smallddata)
  }

  // This is all Up Coming movies data
  const upComing = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=3e03e1ce77256a238a84c7cb8c0f0271')
    const jsonData = await response.json()
    const smallData = jsonData.results.slice(10, 18)
    setUpComingData(smallData)
  }

  useEffect(() => {
    fetchMovies()
    topRated()
    nowplaying()
    upComing()
  }, [])

  // console.log(topRatedData);
  console.log(nowPlayigData);

  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-white">
            <h1 className=" text-3xl">Trending</h1>
            <p className="border-2 rounded-md text-[10px]  px-3">MOVIE</p>
          </div>
          <button className="text-[#5A698F] text-[12px] hover:border-b hover:border-[#5A698F]">
            SEE MORE
          </button>
        </div>

        <div className="grid grid-cols-3 py-6 gap-6">
          {trendingdata.map((movie) => (
            <BigCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-white">
            <h1 className=" text-3xl"> Up Coming</h1>
            <p className="border-2 rounded-md text-[10px]  px-3">MOVIE</p>
          </div>
          <button className="text-[#5A698F] text-[12px] hover:border-b hover:border-[#5A698F]">
            SEE MORE
          </button>
        </div>

        <div className="grid grid-cols-4 py-6 gap-6">
          {upComingData.map((movie) => (
            <SmallCard key={movie.id}  movie={movie}/>
          ))}
        </div>

      </div>

      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-white">
            <h1 className=" text-3xl">Top Rated</h1>
            <p className="border-2 rounded-md text-[10px]  px-3">MOVIE</p>
          </div>
          <button className="text-[#5A698F] text-[12px] hover:border-b hover:border-[#5A698F]">
            SEE MORE
          </button>
        </div>

        <div className="grid grid-cols-4 py-6 gap-6">
          {topRatedData.map((movie) => (
            <SmallCard key={movie.id}  movie={movie}/>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-white">
            <h1 className=" text-3xl">Now Playing</h1>
            <p className="border-2 rounded-md text-[10px]  px-3">MOVIE</p>
          </div>
          <button className="text-[#5A698F] text-[12px] hover:border-b hover:border-[#5A698F]">
            SEE MORE
          </button>
        </div>

        <div className="grid grid-cols-4 py-6 gap-6">
          {nowPlayigData.map((movie) => (
            <SmallCard key={movie.id}  movie={movie}/>
          ))}
        </div>
      </div>

    </>
  )
}
