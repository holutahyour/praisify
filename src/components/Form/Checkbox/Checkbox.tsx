import { BiCheck } from "react-icons/bi"

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode
    required?: boolean,
    label: string
}
function Checkbox(props: ICheckboxProps) {
    const { label } = props
    return (
        <div className="flex items-center gap-3">
            <input
                type="checkbox"
                id="label"
                className="peer hidden [&:checked_+_label_svg]:block"
            />
            <label htmlFor="label" className="border rounded-sm h-5 w-5 peer-checked:border-primary grid place-items-center text-primary font-bold group">
                <BiCheck className="hidden group-hover:block group-hover:text-gray-300 peer-checked:group-hover:text-primary" />
            </label>
            <label className="text-sm" htmlFor={label}>{label || "label"}</label>
        </div>
    )
}

export default Checkbox