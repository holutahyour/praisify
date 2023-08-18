interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    isGhost?: true | false
    size?: "sm" | "lg" | "xl"
}
function Button(props: IButtonProps) {
    const size = () => {
        if(props.size === "sm") return "px-2 py-[.2rem]"
        else if(props.size === "lg") return "px-12 py-[.8rem]"
        else if(props.size === "xl") return "px-20 py-[1rem] text-lg"
    }
    return (
        <button {...props} className={`px-4 py-[.4rem] min-w-fit ${props.isGhost ? "text-gray-600 bg-none hover:underline hover:text-gray-500" : "text-white bg-primary hover:bg-primary/95"}  font-semibold rounded-[0.2rem] text-sm ${size()} ${props.className}`}>{props.children}</button>
    )
}

export default Button