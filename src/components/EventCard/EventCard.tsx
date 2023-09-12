import { EventType } from '@/app/(home)/Events/Events'
import Image from 'next/image'
import React from 'react'
import { BiSolidHelpCircle, BiSolidLike, BiSolidUserCircle } from 'react-icons/bi'
import { BsShareFill } from 'react-icons/bs'

type Props = {
  event: EventType
}

const EventCard = ({ event }: Props) => {
  const { image_url, title, date, venue, fee, organizer, no_of_followers, promoted, } = event
  return (
    <div className='w-1/4 shadow-2xl hover:shadow-xl text-gray-800 rounded-lg overflow-hidden'>
      <div className='relative h-32'>
        <Image src={image_url || '/images/auth/auth-full.jpg'} className='object-cover object-center' fill alt='event image' />
        <div className='absolute flex -bottom-1/4 right-3 gap-2'>
          <div className='rounded-full w-11 h-11 grid place-items-center bg-white border-2 border-gray-300 cursor-pointer'><BiSolidLike size={18} /></div>
          <div className='rounded-full w-11 h-11 grid place-items-center bg-white border-2 border-gray-300 cursor-pointer'><BsShareFill size={18} /></div>
        </div>
      </div>
      <div className='p-3.5 flex flex-col gap-3'>
        <p className='flex gap-1 text-xs text-gray-500 items-center capitalize font-semibold'>promoted <span><BiSolidHelpCircle size={14} /></span></p>
        <h1 className='capitalize font-bold text-xl tracking-tight leading-snug'>{title}</h1>
        <p className='text-primary text-sm font-bold'>{date}</p>
        <div className='text-gray-500 text-sm font-medium'>
          <p>{venue} <span className='w-1 h-1 bg-gray-500 rounded-[100%]'></span></p>
          <p>{(fee !== 0) ? fee : "free"}</p>
        </div>
        <div className='text-sm font-bold mb-3'>
          <p>{organizer}</p>
          <p className='flex gap-1'><BiSolidUserCircle size={18} />{no_of_followers} followers</p>
        </div>
      </div>
    </div>
  )
}
export default EventCard