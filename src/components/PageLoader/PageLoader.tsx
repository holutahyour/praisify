"use client"
import React from 'react'
import Loader from '../Loader/Loader'

type Props = {}

const PageLoader = (props: Props) => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Loader type='infinityspin' />
    </div>
  )
}
export default PageLoader