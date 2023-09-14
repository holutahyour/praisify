import { BiCaretDown, BiSolidLike } from "react-icons/bi";
import { RiNotification4Fill } from "react-icons/ri";
import { BiSolidHelpCircle } from "react-icons/bi";
import { BsGearWide } from "react-icons/bs";
import { HiOutlineTicket, HiUser } from "react-icons/hi";
import Logo from "@/components/Logo";

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
      <a href="/"><div className="p-1 mr-4 text-lg font-semibold text-gray-700"><Logo className="text-2xl"/></div></a>
      <nav className="flex items-center justify-end flex-1 h-16 font-semibold gap-4">
        {menus.map((x, index) => (
          <div key={index} className={x.active ? "h-full flex items-center border-b-[3px] border-b-primary" : "grid"} >
            <div className="flex items-center p-1 text-xs text-gray-700 hover:bg-primary/10 hover:rounded-sm hover:text-primary hover:cursor-pointer group">
              {x.icon || null}
              <span className="mx-1">{x.title}</span>
            </div>
          </div>
        ))}

      </nav>
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
          <div className="flex justify-center items-center rounded-full bg-gray-200 text-gray-500 w-7 h-7 ">
            <HiUser />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header