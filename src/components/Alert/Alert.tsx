import { Lobster } from 'next/font/google'
import React from 'react'
import { BiSolidErrorCircle } from 'react-icons/bi'
import { BsCheck2Circle } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { CiWarning } from 'react-icons/ci'

type Props = {
  type?: 'success' | 'error' | 'warning',
  message?: string
}

const Alert = ({ type, message }: Props) => {
  const alert = (() => {
    switch (type) {
      case 'success':
        return {
          title: "Success",
          icon: <BsCheck2Circle size={25} className="text-green-600" />
        }
      case 'error':
        return {
          title: "Error",
          icon: <BiSolidErrorCircle size={25} className="text-rose-600" />
        }
      case 'warning':
        return {
          title: "Waring",
          icon: <CiWarning size={25} className="text-yellow-600" />
        } 
      default:
        return {
          title: "Changes saved",
          icon: <BsCheck2Circle className="text-green-600" />
        }
    }
  })()

  return (
    <div
      role="alert"
      className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
    >
      <div className="flex items-start gap-4">
        {alert.icon}

        <div className="flex-1">
          <strong className="block font-medium text-gray-900"> {alert.title} </strong>

          <p className="mt-1 text-sm text-gray-700">
            {message}
          </p>
        </div>

        <button className="text-gray-500 transition hover:text-gray-600">
          <span className="sr-only">Dismiss popup</span>
          <GrClose />
        </button>
      </div>
    </div>
  )
}
export default Alert