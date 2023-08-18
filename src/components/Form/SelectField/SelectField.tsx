interface ISelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode
    isGhost?: true | false
}
function SelectField(props: ISelectFieldProps) {
    return (
        <select {...props}>
            <option>Select</option>
        </select>
    )
}

export default SelectField