import React from 'react'
import { BigCard } from './BigCard'
import { SmallCard } from './SmallCard'

export const Home = () => {
  return (
    <div>
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4 text-white'>
                    <h1 className=' text-3xl'>Trending</h1>
                    <p className='border-2 rounded-md text-[10px]  px-3'>MOVIE</p>
                </div>
                <button className='text-[#5A698F] text-[12px] hover:border-b hover:border-[#5A698F]'>SEE MORE</button>
            </div>

            <div className='grid grid-cols-3 py-6 gap-6'>
                <BigCard/>
                <BigCard/>
                <BigCard/>
            </div>
        </div>

        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4 text-white'>
                    <h1 className=' text-3xl'>Popular</h1>
                    <p className='border-2 rounded-md text-[10px]  px-3'>MOVIE</p>
                </div>
                <button className='text-[#5A698F] text-[12px] hover:border-b hover:border-[#5A698F]'>SEE MORE</button>
            </div>

            <div className='grid grid-cols-4 py-6 gap-6'>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
            </div>
        </div>
    </div>
  )
}


