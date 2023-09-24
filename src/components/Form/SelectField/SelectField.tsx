interface ISelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode
    label: string
    isGhost?: true | false
}
function SelectField(props: ISelectFieldProps) {
    const { label, required, className } = props
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-600 capitalize" htmlFor={label}>{label || "label"} {required && <span className="text-rose-500">*</span>}</label>
            <select {...props} className={`h-10 px-2 border-2 border-gray-300 rounded-sm focus-visible:outline-primary text-xs w-40 ${className}`}>
                <option>All</option>
            </select>
        </div>

    )
}

export default SelectField