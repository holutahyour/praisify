import AuthLayout from '@/components/AuthLayout'
import Logo from '@/components/Logo/Logo'
import React from 'react'

type Props = {}

export default function Auth({ }: Props) {
    return (  

        <AuthLayout>
            <form>
                <Logo />
            </form>
        </AuthLayout>
  )
}