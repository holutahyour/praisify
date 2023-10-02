"use client"
import Loader from '@/components/Loader'
import { auth } from '@/firebase/firebase'
import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth'
import { HiUser } from 'react-icons/hi'
import { AiOutlineSwap } from 'react-icons/ai'
import { BsCalendarWeek } from 'react-icons/bs'
import { EVENT_LINK, ORGANIZATION_LINK } from '@/utils/applinks'
import Link from 'next/link'

type Props = {}

function UserMenu({ }: Props) {
    return (
        <div className="px-1 mx-1 cursor-pointer group relative z-[1000]">
            <UserPlaceHolder />
            <div className="absolute top-8 end-0 scale-0 group-hover:scale-100 border-[.5px] rounded-sm bg-white">
                <div className="p-4 space-y-2 border-b-2">
                    <h1 className="font-bold text-xs uppercase">Account</h1>
                    <div className="flex item items-center gap-2">
                        <UserPlaceHolder />
                        <div className="flex-1 text-sm">
                            <p className="capitalize">{auth.currentUser?.displayName}</p>
                            <p className="text-xs">{auth.currentUser?.email}</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 space-y-3 border-b-2 w-fit">
                    <h1 className="font-bold text-xs uppercase">Praisify</h1>
                    <Link href={EVENT_LINK.LIST} className="cursor-pointer text-sm flex gap-3 justify-between items-center"><span>Manage event</span> <BsCalendarWeek /></Link>
                    <Link href={ORGANIZATION_LINK.LIST} className="cursor-pointer text-sm flex gap-3 justify-between items-center"><span className='flex-1 basis-full w-fit'>Switch organization</span> <AiOutlineSwap /></Link>
                </div>
                <div className="p-4 space-y-2">
                    <Logout />
                </div>
            </div>
        </div>
    )
}

export default UserMenu

export const UserPlaceHolder = () => {
    return (
        <div className="flex justify-center items-center rounded-full bg-gray-200 text-gray-500 w-7 h-7 ">
            <HiUser />
        </div>
    )
}

export const Logout = () => {
    const [signOut, loading, error] = useSignOut(auth);

    return (
        <p className="cursor-pointer text-sm flex gap-3 justify-between items-center" onClick={() => signOut()}><span>Log out</span> {loading && <Loader type="oval" />}</p>
    )
}