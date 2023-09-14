import Button from '@/components/Button'
import React from 'react'

type Props = {}

const JoinUs = ({ }: Props) => {
    return (
        <section className='bg-gray-100 rounded-xl p-14 space-y-6 my-8'>
            <h1 className='font-extrabold text-3xl'>Join Praisify</h1>
            <p  className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum dolores quia voluptates? Minima dolor et, fuga veniam officia, error esse mollitia tenetur consequatur dolorum nihil laborum eligendi, excepturi accusamus exercitationem.</p>
            <Button >Sign up</Button>
        </section>
    )
}

export default JoinUs