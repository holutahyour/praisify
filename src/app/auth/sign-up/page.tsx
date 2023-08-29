"use client"
import AuthLayout from '@/components/AuthLayout'
import Button from '@/components/Button'
import InputField from '@/components/Form/InputField'
import Logo from '@/components/Logo'
import { auth } from '@/firebase/firebase'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import { AlertType, add_alert_to_array, alert_list_state, get_random_string, remove_alert_to_array } from '@/data/atoms/alertAtom'
type Props = {}

function Signup({ }: Props) {
    const HOME_URL = '/'

    const setAlert = useSetRecoilState(alert_list_state)

    const router = useRouter();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signup, setSignup] = useState(
        { email: '', confirm_email: '', first_name: '', last_name: '', password: '' }
    )
    
    const set_alert = useCallback((alert: AlertType) => {
        setAlert((prev) => add_alert_to_array(alert, prev))
        setTimeout(() => {
            setAlert((prev) => remove_alert_to_array(alert, prev))
        }, 7000);
    }, [setAlert])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignup((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const created_user = await createUserWithEmailAndPassword(signup.email, signup.password)
            if (!created_user) return;
            set_alert({ id: get_random_string(), type: 'success', message: 'registration successful' });
            router.push(HOME_URL)
        } catch (error: any) {
            alert(error.message)
        }
    }

    useEffect(() => {
        if (error) {
            set_alert({ id: get_random_string(), type: 'error', message: error.message });            
        }
    }, [error, set_alert])


    return (
        <AuthLayout>
            <form className='space-y-7 text-gray-700' onSubmit={handleRegistration}>
                <Logo />
                <h1 className='text-5xl font-extrabold text-gray-800'>Create an account</h1>
                <div className='flex flex-col gap-3'>
                    <InputField onChange={handleChange} label='Email' type='email' name='email' />
                    <InputField onChange={handleChange} label='Confirm Email' name='confirm_email' />
                    <div className='grid grid-cols-2 gap-2'>
                        <InputField onChange={handleChange} className='' label='First Name' name='first_name' />
                        <InputField onChange={handleChange} className='' label='Last Name' name='last_name' />
                    </div>
                    <InputField onChange={handleChange} label='Password' type='password' name='password' />
                    <Button>Create Account</Button>
                </div>
                <p className='text-center text-sm font-semibold text-gray-700'>or sign up with your socials</p>
                <div className='flex justify-center items-center font-semibold gap-4 border border-gray-400 p-2 rounded-md cursor-pointer'>
                    <Image src='/images/socials/google.svg' alt='google icon' width={48} height={48} className='h-6 w-6' />
                    <p className='text-sm'>Sign up with Google</p>
                </div>
                <Link className='inline-block text-primary underline text-sm' href='/'><p>Login<BsArrowRight className='inline ml-1' /></p></Link>
            </form>
        </AuthLayout>
    )
}

export default Signup