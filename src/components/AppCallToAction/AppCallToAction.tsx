import { Bebas_Neue, Russo_One } from 'next/font/google'
import React from 'react'
import Button from '../Button'
import { BsFillPeopleFill } from 'react-icons/bs'

type Props = {
  title: string,
  subTitle: string,
  buttonLabel: string,
  button?: React.ReactNode
}

const AppCallToAction = ({ title, subTitle, buttonLabel, button }: Props) => {
  return (
    <div className='flex gap-10 items-center bg-primary/10 rounded-lg px-8 py-6'>
      <div className="bg-primary/75 w-9 h-9 grid place-items-center rounded-full text-white">
        <BsFillPeopleFill />
      </div>
      <div className='flex-1'>
        <p className='text-primary text-xs'>{subTitle}</p>
        <h1 className=''>{title}</h1>
      </div>
      {button || <Button isGhost={true}>{buttonLabel}</Button>}
    </div>
  )
}
export default AppCallToAction