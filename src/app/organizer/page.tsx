"use client"
import React, { useEffect, useState } from 'react'
import Table from '@/components/Table'
import AppModal from '@/components/Modal/Modal'
import CreateOrganizer from './(create)/Create'
import { ORGANIZER_LINK } from '@/utils/applinks'
import AppLayout from '@/app/(layout)/AppLayout/AppLayout'
import services from '@/firebase/firebaseService'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebase'
import { useRouter } from 'next/navigation'
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

type Props = {
    searchParams?: { [key: string]: string | string[] | undefined | boolean };
}

type OrganizerType = {
    userId: string,
    name: string,
    description: string,
}

const Organizer = ({ searchParams }: Props) => {
    const ORGANIZER_STORE = 'organizers'
    const { get_list, get_detail, create_doc, delete_doc } = services

    const [user, loading] = useAuthState(auth)
    const isOpen = Boolean(searchParams?.cm) || false;

    const router = useRouter();

    const [organizer, setOrganizer] = useState({});
    const [organizers, setOrganizers] = useState([]);

    const handleField = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        setOrganizer((prev) => ({ ...prev, [e.target.name]: e.target.value }))

        console.log(organizer);
    }
    const handle_submit = () => {
        setOrganizer(prev => ({ ...prev, userId: user?.uid }))

        if (confirm("Create an organizer?")) {
            create_doc(ORGANIZER_STORE, organizer)
                .then(() => router.push(ORGANIZER_LINK.LIST))
            console.log("submited", organizer)
        };
    }

    useEffect(() => {
        get_list(ORGANIZER_STORE)
            .then((result) => {
                setOrganizers(result)
            })
    }, [get_list])

    const columns: GridColDef[] = [
        { field: 'sn', headerName: 'S/N', headerClassName: 'bg-gray-100', width: 70 },
        { field: 'name', headerName: 'Name', headerClassName: 'bg-gray-100', flex: 1, },
        { field: 'description', headerName: 'Description', headerClassName: 'bg-gray-100', flex: 1, },
    ];


    return (
        <AppLayout>
            <div className='flex justify-between items-center gap-4'>
                <h1 className='text-4xl font-black text-gray-700'>Organizers</h1>
                <AppModal buttonLink={ORGANIZER_LINK.CREATE} cancelLink={ORGANIZER_LINK.LIST} title="Create an organizer" isOpen={isOpen} element={<CreateOrganizer handleField={handleField} />} handleSubmit={handle_submit} />
            </div>
            <div className='flex justify-between items-center gap-4'>
            </div>
            {(organizers.length !== 0) && <Table columns={columns} rows={organizers} />}
        </AppLayout>
    )
}

export default Organizer