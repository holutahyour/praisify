"use client"
import React from 'react'
import Alert from '../Alert'
import { useRecoilValue } from 'recoil'
import { alert_list_state } from '@/data/atoms/alertAtom'

type Props = {}

const AlertCollection = ({ }: Props) => {
  const alerts = useRecoilValue(alert_list_state)

  return (
      <div className='fixed z-[10000] left-1/2 -translate-x-1/2 space-y-3 mt-5'>
        {alerts.map((x, $) => (
          <Alert key={$} type={x.type} message={x.message} />
        ))}        
      </div>
  )
}
export default AlertCollection