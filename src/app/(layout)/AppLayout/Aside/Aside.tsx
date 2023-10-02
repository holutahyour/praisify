"use client"
import { EVENT_LINK, ORGANIZATION_LINK } from "@/utils/applinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiCalendarEvent, BiHelpCircle } from "react-icons/bi";
import { BsCalendarDate, BsFillPeopleFill } from "react-icons/bs";

function Aside() {
  const pathname = usePathname()
  const menus = [
    {
      icon: <BsCalendarDate size={20} />,
      link: EVENT_LINK.LIST,
      active: false
    },
    {
      icon: <BsFillPeopleFill size={20} />,
      link: ORGANIZATION_LINK.LIST,
      active: false
    },
  ]

  const active_class = `bg-gray-600 w-9 h-9 grid place-items-center rounded-lg text-white`

  return (
    <div className="bg-gray-100 p-2.5 flex justify-between flex-col">
      <div className="space-y-3">
        {menus.map((x, indx) => (
          <Link key={indx} href={x.link} className={pathname == x.link ? active_class : "hover:bg-gray-100 w-9 h-9 grid place-items-center rounded-lg transition ease-in-out duration-300"}>
            {x.icon}
          </Link>
        ))}
      </div>

      <div>
        <div className="w-9 h-9 grid place-items-center rounded-lg text-gray-600"><BiHelpCircle size={23} /></div>
      </div>
    </div>
  )
}

export default Aside