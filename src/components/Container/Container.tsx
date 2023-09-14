"use client"
import React, { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import AlertCollection from '../AlertCollection'

interface Props extends React.HTMLAttributes<HTMLDivElement> { children: ReactNode }

const Container = (props: Props) => {
  return (
    <div {...props}>
      <RecoilRoot>
        <AlertCollection />
        {props.children}
      </RecoilRoot>
    </div>
  )
}
export default Container