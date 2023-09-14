import { BiCalendarEvent, BiSolidHelpCircle } from "react-icons/bi";

function Aside() {
  const menus = [
    {
      title: "Create Event",
      active: false
    },
  ]

  return (
    <div className="bg-gray-100 p-2.5 flex justify-between flex-col">
      <div className="bg-gray-600 w-9 h-9 grid place-items-center rounded-lg text-white"><BiCalendarEvent size={23} /></div>
      <div>
        <div className="w-9 h-9 grid place-items-center rounded-lg text-gray-600"><BiSolidHelpCircle size={25} /></div>
      </div>
    </div>
  )
}

export default Aside