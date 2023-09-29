interface IInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode
    required?: boolean,
    label: string
}
function InputField(props: IInputFieldProps) {
    const { required, label, className } = props
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-600 capitalize" htmlFor={label}>{label || "label"} {required && <span className="text-rose-500">*</span>}</label>
            <input  type="text" id={label} {...props} className={`h-10 px-2 border border-gray-300 rounded-sm focus-visible:outline-primary text-sm ${className}`}  />
        </div>
    )
}

export default InputField