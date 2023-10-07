"use client"
import React, { useEffect, useState } from 'react'
import Table from '@/components/Table'
import AppModal from '@/components/Modal/Modal'
import { ORGANIZATION_LINK } from '@/utils/applinks'
import AppLayout from '@/app/(layout)/AppLayout/AppLayout'
import services, { INVITATION_STORE, USER_STORE, dummy_organizations } from '@/firebase/firebaseService'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebase'
import { GridColDef, GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid'
import CreateOrganization from './(create)/create'
import AppCallToAction from '@/components/AppCallToAction'
import Button from '@/components/Button'
import { AiOutlineSwap } from 'react-icons/ai'
import { useOrganization } from '@/utils/hooks'
import Drawer from '@/components/Drawer'
import Invitation from './(invitation)/Invitation'
import { invitation_status_enum } from '@/utils/enums'
import { v4 as uuid } from 'uuid';

type Props = {
    searchParams?: { [key: string]: string | string[] | undefined | boolean };
}

type OrganizationType = {
    id: string,
    userId: string,
    name: string,
    description: string,
}

const Organization = ({ searchParams }: Props) => {
    const ORGANIZATION_STORE = 'organizations'
    const { get_list, get_detail, create_doc, delete_doc, get_detail_by_query } = services

    const [user, loading] = useAuthState(auth)

    const isOpen = Boolean(searchParams?.cm) || false;


    const [organizations, setOrganizations] = useState<OrganizationType[]>([]);
    const { handle_submit, handleField } = useOrganization()

    const handleInvitation = (id: string, email: string) => {
        const selected_organization = organizations.find(x => x.id === id);
        if (!selected_organization) return;
        
        const invitation = {
            organization: selected_organization,
            user:{
                email
            },
            status: invitation_status_enum.PENDING
        }

        const unique_id = uuid();

        create_doc(INVITATION_STORE, invitation, unique_id);
        create_doc(`${ORGANIZATION_STORE}/${id}/${INVITATION_STORE}`, invitation, unique_id)
    }

    useEffect(() => {
        if (user && !loading)
            get_list(`${USER_STORE}/${user.uid}/${ORGANIZATION_STORE}`)
                .then((result) => {
                    setOrganizations(result)
                    console.log(result);
                })
    }, [get_list, user, loading])

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            headerClassName: 'bg-gray-100',
            flex: 1,
            renderCell: (params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>) => {
                return (
                    <Detail
                        uid={params.row.created_by}
                        name={params.row.name}
                        displayName={params.row.creator?.name}
                    />
                )
            },
        },
        {
            field: 'description',
            headerName: 'Description',
            headerClassName: 'bg-gray-100',
            flex: 0.15,
            renderCell: (params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>) => {
                return <div>
                    <Button className=''><span className='flex items-center'>Switch <AiOutlineSwap /></span></Button>
                </div>
            },
        },
        {
            field: 'action',
            headerName: 'Action',
            headerClassName: 'bg-gray-100',
            flex: 0.15,
            renderCell: (params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>) => {
                return <div>
                    <Drawer title='invite'>
                        <Invitation id={params.row.id} handleInvitation={handleInvitation}/>
                    </Drawer>
                </div>
            },
        },
    ];

    return (
        <AppLayout>
            <div className='flex justify-between items-center gap-4'>
                <h1 className='text-4xl font-black text-gray-700'>My Organizations</h1>
                <AppModal buttonLink={ORGANIZATION_LINK.CREATE} cancelLink={ORGANIZATION_LINK.LIST} title="Create an organization" isOpen={isOpen} element={<CreateOrganization handleField={handleField} />} handleSubmit={handle_submit} />
            </div>
            <div className='flex justify-between items-center gap-4'>
            </div>
            {(organizations.length !== 0) && <Table columns={columns} rows={organizations} />}
            {(organizations.length === 0) && <AppCallToAction
                title='No Organization Avaliable'
                subTitle='add a new organization'
                buttonLabel='create'
                button={
                    <AppModal
                        buttonTitle="create"
                        buttonLink={ORGANIZATION_LINK.CREATE}
                        cancelLink={ORGANIZATION_LINK.LIST}
                        title="Create Organization" isOpen={isOpen}
                        element={<CreateOrganization handleField={handleField} />}
                        handleSubmit={handle_submit}
                    />}
            />}
            {/* <Table columns={columns} rows={dummy_organizations} /> */}
        </AppLayout>
    )
}

export default Organization

type DetailProps = {
    name: string,
    uid: string,
    displayName: string,
}

export const Detail = ({ name = '', uid, displayName }: DetailProps) => {
    return (
        <div className='m-3 flex gap-4 items-center'>
            <div>
                <p className='w-16 h-16 grid place-items-center text-white text-3xl font-black rounded-full bg-blue-800 uppercase'>
                    {name.split(" ")[0][0]}{name.split(" ")[1][0]}
                </p>
            </div>
            <div>
                <p className='text-sm font-bold'>{name}</p>
                <div>
                    <p className='text-xs'>{displayName}</p>
                    <span className='rounded-full bg-green-600 px-2 text-[.6rem] text-white'>creator</span>
                </div>
            </div>
        </div>
    )
}