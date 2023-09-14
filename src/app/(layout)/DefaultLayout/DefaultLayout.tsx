import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = { children: ReactNode }

const DefaultLayout = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default DefaultLayout