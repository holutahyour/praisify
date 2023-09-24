import React from 'react'
import AppLayout from '../(layout)/AppLayout/AppLayout'
import Button from '@/components/Button'
import InputField from '@/components/Form/InputField'
import SelectField from '@/components/Form/SelectField'
import Table from '@/components/Table'
import AppModal from '@/components/Modal/Modal'
import CreateEvent from './(create)/Create'

type Props = {
    searchParams?: { [key: string]: string | string[] | undefined | boolean };
}

const Event = ({ searchParams }: Props) => {
    const isOpen = Boolean(searchParams?.create_modal) || false;

    return (
        <AppLayout>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-black text-gray-700'>Events</h1>
            </div>
            <div className='flex justify-between items-center gap-4'>
                <div className='flex gap-6'>
                    <SelectField label='Publish status'></SelectField>
                    <SelectField label='Event status'></SelectField>
                    <SelectField label='Organizer'></SelectField>
                </div>
                <AppModal title="Create an event" isOpen={isOpen} element={<CreateEvent />} />
            </div>
            <Table />
        </AppLayout>
    )
}

export default Event