import { Lobster } from 'next/font/google'
import React from 'react'
import { InfinitySpin, Oval } from 'react-loader-spinner'

type Props = { type: "oval" | "trangle" | "tailspin" | "infinityspin", color?: string, size?: number, width?: string }

const Loader = ({ type, color, size, width }: Props) => {
  switch (type) {
    case "oval":
      return <Oval
        height={size ?? 20}
        width={size ?? 20}
        color={color ?? "#fff"}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor={color ?? "#fff"}
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    case "infinityspin":
      return <InfinitySpin
        width={width || '200'}
        color="#4fa94d"
      />
    default:
      return <></>;
  }
}
export default Loader