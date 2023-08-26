import AuthLayout from '@/components/AuthLayout'
import Button from '@/components/Button'
import InputField from '@/components/Form/InputField'
import Logo from '@/components/Logo'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
type Props = {}

function Signup({ }: Props) {
    return (
        <AuthLayout>
            <form className='space-y-5 text-gray-700 py-3'>
                <Logo />
                <h1 className='text-5xl font-bold text-gray-800'>Create an account</h1>
                <div className='flex flex-col gap-3'>
                    <InputField label='Email' type='email'/>
                    <InputField label='Confirm Password' />
                    <div className='grid grid-cols-2 gap-2'>
                        <InputField className='' label='First Name' />
                        <InputField className='' label='Last Name' />
                    </div>
                    <InputField label='Password' type='password' />
                    <Button>Create Account</Button>
                </div>
                <p className='text-center text-sm font-semibold text-gray-700'>or sign up with your socials</p>
                <div className='flex justify-center items-center font-semibold gap-4 border border-gray-400 p-2 rounded-md cursor-pointer'>
                    <Image src='/images/socials/google.svg' alt='google icon' width={48} height={48} className='h-6 w-6' />
                    <p className='text-sm'>Sign up with Google</p>
                </div>
                <Link className='inline-block text-primary underline' href='/'><p>Login <BsArrowRight className='inline ml-1' /></p></Link>
            </form>
        </AuthLayout>
    )
}

export default Signup