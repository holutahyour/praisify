import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'

type Props = { children: ReactNode }

const AppLayout = (props: Props) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex-1 flex overflow-hidden'>
        <Aside />
        <div className='overflow-auto flex-1'>
          <main className='max-w-screen-lg w-full mx-auto p-10 space-y-5'>
            {props.children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout