"use client"
import { BiSolidLike } from "react-icons/bi";
import { RiNotification4Fill } from "react-icons/ri";
import { BiSolidHelpCircle } from "react-icons/bi";
import { BsGearWide } from "react-icons/bs";
import { HiOutlineTicket, HiUser } from "react-icons/hi";
import Logo from "@/components/Logo";
import Link from "next/link";
import { AUTH_LINKS, EVENT_LINK, HOME } from "@/utils/applinks";
import UserMenu from "@/components/UserMenu";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import Button from "@/components/Button";

type Menu = {
  title: string,
  link?: string,
  icon?: React.ReactNode,
  active: boolean,
}

function Header() {
  const [user, loading] = useAuthState(auth)
  const auth_menus: Menu[] = [
    {
      title: "Create Event",
      link: EVENT_LINK.CREATE,
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

  const home_menu: Menu[] = [
    {
      title: "Create Event",
      link: HOME.HOME,
      active: false
    },
  ]

  const menus = (user && !loading) ? auth_menus : home_menu

  return (
    <header className="flex items-center px-5 bg-white shadow-md">
      <Link href="/">
        <div className="p-1 mr-4 text-lg font-semibold text-gray-700"><Logo className="text-2xl" /></div>
      </Link>
      <nav className="flex items-center justify-end flex-1 h-16 font-semibold gap-4">
        {menus.map((x, index) => (
          <Link href={x.link || '/'} key={index} className={x.active ? "h-full flex items-center border-b-[3px] border-b-primary" : "grid"} >
            <div className="flex items-center p-1 text-xs text-gray-700 hover:bg-primary/10 hover:rounded-sm hover:text-primary hover:cursor-pointer group">
              {x.icon || null}
              <span className="mx-1">{x.title}</span>
            </div>
          </Link>
        ))}

      </nav>
      {(user && !loading) ? <AuthMenu /> : <AuthButtons />}
    </header>
  )
}

export default Header

const AuthMenu = () => {
  return (
    <div className="flex items-center">
      <div className="px-1 mx-1 text-xl cursor-pointer">
        <RiNotification4Fill />
      </div>
      <div className="px-1 mx-1 text-2xl cursor-pointer">
        <BiSolidHelpCircle />
      </div>
      <div className="px-1 mx-1 text-xl cursor-pointer">
        <BsGearWide />
      </div>
      <div className="px-1 mx-1 cursor-pointer">
        <UserMenu />
      </div>
    </div>
  )
}

const AuthButtons = () => {
  return (
    <div className="flex items-center">
      <div className="px-2 mx-1 text-xl cursor-pointer">
        <Link href={AUTH_LINKS.LOGIN}><p className="text-xs font-semibold">Log in</p></Link>
      </div>
      <div className="px-1 mx-1 text-2xl cursor-pointer">
      <Link href={AUTH_LINKS.SIGNUP}><Button>Join us</Button></Link>
      </div>
    </div>
  )
}