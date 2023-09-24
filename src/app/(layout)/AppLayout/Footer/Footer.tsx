import React from 'react'

type Props = {}

function Footer({ }: Props) {
    return (
        <div className='bg-gray-900 text-white p-3'>
            <div className='flex gap-4 text-xs text-gray-300'>
                <p>@ {new Date().getFullYear()} Praisify</p>
                <p>Terms of service</p>
                <p>Privacy Policy</p>
                <p>Cookie Setting</p>
                <p>Cookie Policy</p>
                <p>Cookie Help</p>
            </div>
        </div>
    )
}

export default Footer