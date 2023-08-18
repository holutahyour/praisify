import { Lobster } from 'next/font/google'
import React from 'react'

type Props = {}

const lobster = Lobster({ subsets: ['latin'], weight: "400" })

const Logo = (props: Props) => {
  return (
    <h1 className={`${lobster.className} text-3xl`}>Praisify</h1>
  )
}
export default Logo