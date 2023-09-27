"use client"
import { BiCaretDown, BiSolidLike } from "react-icons/bi";
import { RiNotification4Fill } from "react-icons/ri";
import { BiSolidHelpCircle } from "react-icons/bi";
import { BsGearWide } from "react-icons/bs";
import { HiOutlineTicket, HiUser } from "react-icons/hi";
import Logo from "@/components/Logo";
import { auth } from "@/firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import Loader from "@/components/Loader";
import UserMenu from "../../UserMenu";

function Header() {
  const menus = [
    {
      title: "Create Event",
      active: false
    },
    {
      title: "Likes",
      icon: <BiSolidLike size={20} />,
      active: false
    },
    {
      title: "Ticket",
      icon: <HiOutlineTicket size={20} />,
      active: false
    },
  ]

  return (
    <header className="flex items-center px-5 bg-white shadow-md">
      <a href="/"><div className="p-1 mr-4 text-lg font-semibold text-gray-700"><Logo className="text-2xl" /></div></a>
      <div className="flex items-center flex-1 justify-end">
        <div className="px-1 mx-1 text-xl cursor-pointer">
          <RiNotification4Fill />
        </div>
        <div className="px-1 mx-1 text-2xl cursor-pointer">
          <BiSolidHelpCircle />
        </div>
        <div className="px-1 mx-1 text-xl cursor-pointer">
          <BsGearWide />
        </div>
        <UserMenu />
      </div>
    </header>
  )
}

export default Header

