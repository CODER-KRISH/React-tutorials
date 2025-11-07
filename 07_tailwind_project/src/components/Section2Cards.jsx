import React from 'react'
import { Star, Check } from 'lucide-react';

const Section2Cards = (props) => {
    return (
        <div style={{backgroundColor:props.bgcolor}} className=' border-solid border border-gray-300 p-5 rounded-xl h-180 w-70 flex items-center flex-col'>
            <h2 className='font-bold mb-3'>{props.Name}</h2>
            <img className='mb-5 h-25 w-25 rounded-full' src="https://i.pinimg.com/1200x/19/ff/1a/19ff1a31584ee623030830d56c6781cf.jpg" alt="" />
            <span className='text-gray-500 text-xs font-bold'>Total Price From</span>
            <span className='flex items-center gap-1 mb-4'>
                <span className='text-xs'>$</span>
                <span className='text-5xl font-bold'>{props.price}</span>
            </span>
            <div className='flex flex-col text-sm  w-67 bg-white p-5 rounded-xl gap-1.5'>
                <span className='flex justify-between items-center'>
                    <span className='font-semibold'>Hotel</span>
                    <span className='flex justify-center items-center gap-1'>
                        <Star size={14} />
                        <Star size={14} />
                        <Star size={14} />
                        <Star size={14} />
                        <Star size={14} />
                    </span>
                </span>
                <span className='flex justify-between'>
                    <span className='font-semibold'>Sightseeing</span>
                    <span>Half-day</span>
                </span>
                <span className='flex justify-between'>
                    <span className='font-semibold'>Medical Services Quality</span>
                    <span>{props.quality}</span>
                </span>
            </div>
            <div className='p-4 w-70 font-semibold mb-20'>
                <span className=' flex'><Check className='mr-2'size={17}/>Visa</span>
                <span className=' flex'><Check className='mr-2'size={17}/>Airport Transfer</span>
                <span className=' flex'><Check className='mr-2'size={17}/>Hospital Transfer</span>
                <span className=' flex'><Check className='mr-2'size={17}/>Welcome dinner</span>
                <span className=' flex'><Check className='mr-2'size={17}/>Personal Attendant</span>
                <span className=' flex'><Check className='mr-2'size={17}/>Lunch & Dinner in top Restaurants</span>
            </div>
            <button className='border-none pt-3 pb-3 pl-7 pr-7 rounded-full bg-blue-800 font-bold text-white'>Select Plan</button>
        </div>
    )
}

export default Section2Cards