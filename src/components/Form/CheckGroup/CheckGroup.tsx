import { BsCheck2Circle, BsCheckCircleFill } from "react-icons/bs"

function CheckGroup({ data, name }: { data: { id: number, name: string, description: string }[], name:string }) {

  return (
    <fieldset className="grid grid-cols-2 gap-4">
      <legend className="sr-only">Delivery</legend>

      {data.map((x, $) => (
        <div key={$}>
          <input
            type="radio"
            name={name}
            value={x.name}
            id={x.name}
            className="peer hidden [&:checked_+_label_svg]:block"
          />

          <label
            htmlFor={x.name}
            className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-primary peer-checked:ring-1 peer-checked:ring-primary"
          >
            <div className="flex items-center justify-between">
              <p className="text-gray-700 capitalize">{x.name}</p>
              <BsCheck2Circle className="hidden h-5 w-5 text-primary"
              />
            </div>
          </label>
        </div>
      ))}     
    </fieldset>
  )
}

export default CheckGroup