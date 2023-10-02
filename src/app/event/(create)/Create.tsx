import AppLayout from '@/app/(layout)/AppLayout/AppLayout'
import Form from '@/components/Form'
import InputField from '@/components/Form/InputField'
import TextAreaField from '@/components/Form/TextAreaField'
import React from 'react'

type Props = {}

const CreateEvent = ({ }: Props) => {
    return (
        <Form className='px-7 space-y-6'>
            <InputField label='Event Title' required />
            <InputField label='Location' required />
            <div className='grid grid-cols-2 gap-4'>
                <InputField type='date' label='Start Date' />
                <InputField type='date' label='End Date' />
            </div>
            <TextAreaField label='Event Description' />
            <InputField label='Organization Name' />
            <TextAreaField label='Organization Description' />
        </Form>
    )
}

export default CreateEvent