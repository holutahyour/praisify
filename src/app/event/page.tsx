import React from 'react'
import AppLayout from '../(layout)/AppLayout/AppLayout'
import SelectField from '@/components/Form/SelectField'
import Table from '@/components/Table'
import AppModal from '@/components/Modal/Modal'
import { EVENT_LINK } from '@/utils/applinks'
import CreateEvent from './(create)/Create'

type Props = {
    searchParams?: { [key: string]: string | string[] | undefined | boolean };
}

const Event = ({ searchParams }: Props) => {
    const isOpen = Boolean(searchParams?.cm) || false;

    return (
        <AppLayout>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-black text-gray-700'>Events</h1>
            </div>
            <div className='flex justify-between items-center gap-4'>
                <div className='flex gap-6'>
                    <SelectField label='Publish status'></SelectField>
                    <SelectField label='Event status'></SelectField>
                    <SelectField label='Organization'></SelectField>
                </div>
                <AppModal buttonLink={EVENT_LINK.CREATE} cancelLink={EVENT_LINK.LIST} title="Create an event" isOpen={isOpen} element={<CreateEvent />} />
            </div>
            <Table columns={[]} rows={[]} />
        </AppLayout>
    )
}

export default Event