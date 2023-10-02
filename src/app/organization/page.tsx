"use client"
import React, { useEffect, useState } from 'react'
import Table from '@/components/Table'
import AppModal from '@/components/Modal/Modal'
import { ORGANIZATION_LINK } from '@/utils/applinks'
import AppLayout from '@/app/(layout)/AppLayout/AppLayout'
import services, { dummy_organizations } from '@/firebase/firebaseService'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebase'
import { useRouter } from 'next/navigation'
import { GridColDef, GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid'
import CreateOrganization from './(create)/create'
import AppCallToAction from '@/components/AppCallToAction'
import Button from '@/components/Button'
import { AiOutlineSwap } from 'react-icons/ai'

type Props = {
    searchParams?: { [key: string]: string | string[] | undefined | boolean };
}

type OrganizationType = {
    userId: string,
    name: string,
    description: string,
}

const Organization = ({ searchParams }: Props) => {
    const ORGANIZATION_STORE = 'organizations'
    const { get_list, get_detail, create_doc, delete_doc, get_detail_by_query } = services

    const [user, loading] = useAuthState(auth)
    const isOpen = Boolean(searchParams?.cm) || false;

    const router = useRouter();

    const [organization, setOrganization] = useState({});
    const [organizations, setOrganizations] = useState([]);

    const handleField = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        setOrganization((prev) => ({ ...prev, [e.target.name]: e.target.value }))

        console.log(organization);
    }
    const handle_submit = () => {
        setOrganization(prev => ({ ...prev, userId: user?.uid }))

        if (confirm("Create an organization ?")) {
            create_doc(ORGANIZATION_STORE, organization, user?.uid)
                .then(() => router.push(ORGANIZATION_LINK.LIST))
            console.log("submited", organization)
        };
    }

    useEffect(() => {
        get_list(ORGANIZATION_STORE)
            .then((result) => {
                setOrganizations(result)
                console.log(result);

            })
    }, [get_list])

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            headerClassName: 'bg-gray-100',
            flex: 1,
            renderCell: (params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>) => {
                return <Detail uid={params.row.created_by} name={params.row.name} />
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
}

export const Detail = ({ name = '', uid }: DetailProps) => {
    const { get_detail_by_query } = services
    const USER_STORE = 'users'
    const UID_FIELD = 'uid'
    const USER_ID = '604CgRiu3bWP8bEO5r0wgrbMdwD3'

    const [user, setUser] = useState({
        displayName: '',
        email: ''
    });

    useEffect(() => {
        get_detail_by_query(USER_STORE, UID_FIELD, uid)
            .then((users) => {
                setUser(users[0])
                console.log(users[0]);
            })

    }, [get_detail_by_query, uid])


    return (
        <div className='m-3 flex gap-4 items-center'>
            <div>
                <p className='w-16 h-16 grid place-items-center text-white text-3xl font-black rounded-full bg-blue-800 uppercase'>
                    {name.split(" ")[0][0]}{name.split(" ")[1][0]}
                </p>
            </div>
            <div>
                <p className='text-sm font-bold'>Firm Foundation</p>
                <div>
                    <p className='text-xs'>{user?.displayName}</p>
                    <span className='rounded-full bg-green-600 px-2 text-[.6rem] text-white'>creator</span>
                </div>
            </div>
        </div>
    )
}