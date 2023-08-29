"use client"
import React, { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import AlertCollection from '../AlertCollection'

type Props = { children: ReactNode }

const Container = ({ children }: Props) => {
  return (
    <RecoilRoot>
      <AlertCollection />
      {children}
    </RecoilRoot>
  )
}
export default Container