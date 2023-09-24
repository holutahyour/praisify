import Button from '@/components/Button'
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

type Props = {}

function Footer({ }: Props) {
    return (
        <div className='bg-gray-900 text-white py-8'>
            <div className='max-w-screen-lg mx-auto space-y-8'>
                <div className='flex gap-6 items-center pb-8 border-b'>
                    <h1 className='capitalize text-lg font-black'>create your own event</h1>
                    <Button className='bg-transparent border-2 border-white rounded-lg text-lg font-bold'>Create</Button>
                </div>
                <div className='space-y-3'>
                    <p>Follow us</p>
                    <div className='flex gap-6'>
                        <BsFacebook size={20} />
                        <BsTwitter size={20} />
                        <BsInstagram size={20} />
                    </div>
                </div>
                <div className='flex gap-4 text-xs text-gray-300'>
                    <p>@ {new Date().getFullYear()} Praisify</p>
                    <p>Terms of service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Setting</p>
                    <p>Cookie Policy</p>
                    <p>Cookie Help</p>
                </div>
            </div>
        </div>
    )
}

export default Footer