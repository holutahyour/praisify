"use client"
import AuthLayout from '@/components/AuthLayout'
import Button from '@/components/Button'
import InputField from '@/components/Form/InputField/InputField'
import Loader from '@/components/Loader'
import Logo from '@/components/Logo/Logo'
import PageLoader from '@/components/PageLoader/PageLoader'
import { AlertType, add_alert_to_array, alert_list_state, get_random_string, remove_alert_to_array } from '@/data/atoms/alertAtom'
import { auth } from '@/firebase/firebase'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { BsArrowRight } from 'react-icons/bs'
import { useSetRecoilState } from 'recoil'

type Props = {}

export default function Auth({ }: Props) {
    const SIGN_UP_LINK = '/auth/'
    const HOME_URL = '/'

    const setAlert = useSetRecoilState(alert_list_state)
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [login, setLogin] = useState({ email: "", password: "" })
    const [userState, loadingState] = useAuthState(auth)
    const [pageLoading, setPageLoading] = useState(true)
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const signed_in_user = await signInWithEmailAndPassword(login.email, login.password);
            if (!signed_in_user) return;
            set_alert({ id: get_random_string(), type: 'success', message: 'registration successful' });
            router.push(HOME_URL)
        } catch (error: any) {
            alert(error.message)
        }
    }

    const set_alert = useCallback((alert: AlertType) => {
        setAlert((prev) => add_alert_to_array(alert, prev))
        setTimeout(() => {
            setAlert((prev) => remove_alert_to_array(alert, prev))
        }, 7000);
    }, [setAlert])

    useEffect(() => {
        if (userState) router.push(HOME_URL)
        if (!loadingState && !userState) setPageLoading(false)

        if (error) {
            set_alert({ id: get_random_string(), type: 'error', message: error.message });
        }

    }, [error, loadingState, router, set_alert, user, userState])

    if (pageLoading) return <PageLoader />;

    return (
        <AuthLayout>
            <form className='space-y-7 text-gray-700 py-3' onSubmit={handleSignIn}>
                <Logo />
                <h1 className='text-5xl font-bold text-gray-800'>Log in</h1>
                <div className='flex flex-col gap-4'>
                    <InputField onChange={handleChange} type='email' label='Email' name='email' />
                    <InputField onChange={handleChange} label='Password' type='password' name='password' />
                    <Button type='submit' size='lg' className='flex items-center justify-center gap-4'>Login {loading && <span className='inline-block'><Loader type='oval' /></span>}</Button>
                </div>
                <p className='text-center text-sm text-gray-700'>or sign in with your socials</p>
                <div className='flex justify-center items-center font-semibold gap-4 border border-gray-300 p-2 rounded-md cursor-pointer'>
                    <Image src='/images/socials/google.svg' alt='google icon' width={48} height={48} className='h-6 w-6' />
                    <p className='text-sm'>Sign in with Google</p>
                </div>
                <Link className='inline-block text-primary text-sm' href={SIGN_UP_LINK} ><p>Create an account <BsArrowRight className='inline ml-1' /></p></Link>
            </form>
        </AuthLayout>
    )
}

