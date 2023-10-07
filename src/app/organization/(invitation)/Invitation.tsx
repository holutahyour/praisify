import Button from '@/components/Button'
import Form from '@/components/Form'
import InputField from '@/components/Form/InputField'
import TextAreaField from '@/components/Form/TextAreaField'
import React, { useState } from 'react'

type Props = {
    id: string,
    handleInvitation: (id: string, email: string) => void
}

const Invitation = ({ id, handleInvitation }: Props) => {
    const [email, setEmail] = useState('');

    return (
        <>
            <h1 className='text-2xl font-black text-gray-700 mb-8'>Invitation</h1>
            <div className='space-y-6'>
                <InputField type='email' label='Email address' name='name' onChange={(e) => setEmail(e.target.value)} />
                <Button onClick={() => handleInvitation(id, email)}>Invite</Button>
            </div>
        </>
    )
}

export default Invitation