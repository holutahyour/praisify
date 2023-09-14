import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'

type Props = { children: ReactNode }

const AppLayout = (props: Props) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex-1 flex'>
        <Aside />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout