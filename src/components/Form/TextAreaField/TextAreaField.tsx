interface ITextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    children?: React.ReactNode
    required?: boolean,
    label: string
}
function TextAreaField(props: ITextAreaFieldProps) {
    const { required, label } = props
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-600 capitalize" htmlFor={label}>{label || "label"} {required && <span className="text-rose-500">*</span>}</label>
            <textarea id={label} className="p-1 border-2 border-gray-300 rounded-sm focus-visible:outline-primary" {...props} />
        </div>
    )
}

export default TextAreaField