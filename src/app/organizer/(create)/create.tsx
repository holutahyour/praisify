import AppLayout from '@/app/(layout)/AppLayout/AppLayout'
import Form from '@/components/Form'
import InputField from '@/components/Form/InputField'
import TextAreaField from '@/components/Form/TextAreaField'
import React from 'react'

type Props = {
    handleField?: (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void
}

const CreateOrganizer = ({ handleField }: Props) => {
    return (
        <Form className='px-7 space-y-6'>
            <InputField label='Organizer Name' name='name' onChange={(e) => handleField && handleField(e)} />
            <TextAreaField label='Organizer Description' name='description' onChange={(e) => handleField && handleField(e)} />
        </Form>
    )
}

export default CreateOrganizer