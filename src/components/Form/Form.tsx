interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children?: React.ReactNode
}

function Form(props: IFormProps) {
    return (
        <form className="flex flex-col gap-5" {...props}>{props.children}</form>
    )
}

export default Form