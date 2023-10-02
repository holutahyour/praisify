import AppLayout from '@/app/(layout)/AppLayout/AppLayout'
import Form from '@/components/Form'
import InputField from '@/components/Form/InputField'
import TextAreaField from '@/components/Form/TextAreaField'
import React from 'react'

type Props = {
    handleField?: (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void
}

const CreateOrganization = ({ handleField }: Props) => {
    return (
        <Form className='px-7 space-y-6'>
            <InputField label='Organization Name' name='name' onChange={(e) => handleField && handleField(e)} />
            <TextAreaField label='Bio' name='bio' onChange={(e) => handleField && handleField(e)} />
            <InputField label='Website' name='website' onChange={(e) => handleField && handleField(e)} />
            <InputField label='Facebook Link' name='facebook_link' onChange={(e) => handleField && handleField(e)} />
            <InputField label='Linkedin Link' name='linkedin_link' onChange={(e) => handleField && handleField(e)} />
            <InputField label='Twitter Link' name='twitter_link' onChange={(e) => handleField && handleField(e)} />
            <InputField label='Instagram Link' name='instagram_link' onChange={(e) => handleField && handleField(e)} />
        </Form>
    )
}

export default CreateOrganization