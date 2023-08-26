import AuthLayout from '@/components/AuthLayout'
import Button from '@/components/Button'
import InputField from '@/components/Form/InputField/InputField'
import Logo from '@/components/Logo/Logo'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

type Props = {}

export default function Auth({ }: Props) {
    return (

        <AuthLayout>
            <form className='space-y-7 text-gray-700 py-3'>
                <Logo />
                <h1 className='text-5xl font-bold text-gray-800'>Log in</h1>
                <div className='flex flex-col gap-4'>
                    <InputField type='email' label='Email' />
                    <InputField label='Password' type='password' />
                    <Button>Login</Button>
                </div>
                <p className='text-center text-sm font-semibold text-gray-700'>or sign in with your socials</p>
                <div className='flex justify-center items-center font-semibold gap-4 border border-gray-400 p-2 rounded-md cursor-pointer'>
                    <Image src='/images/socials/google.svg' alt='google icon' width={48} height={48} className='h-6 w-6' />
                    <p className='text-sm'>Sign in with Google</p>
                </div>
                <Link className='inline-block text-primary underline' href='/'><p>Create an account <BsArrowRight className='inline ml-1' /></p></Link>
            </form>
        </AuthLayout>
    )
}