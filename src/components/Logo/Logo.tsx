import { Bebas_Neue, Russo_One } from 'next/font/google'
import React from 'react'

type Props = {
  className?: string
}

// const lobster = Lobster({ subsets: ['latin'], weight: "400" })
const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: "400" })
const russo_one = Russo_One({ subsets: ['latin'], weight: "400" })

const Logo = ({ className }: Props) => {
  return (
    <h1 className={`${bebas_neue.className} text-3xl text-primary/80 ${className}`}>Praisify</h1>
  )
}
export default Logo