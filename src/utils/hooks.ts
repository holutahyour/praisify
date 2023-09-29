import { auth } from "@/firebase/firebase"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

export const useRedirectToAuth = () => {
    const router = useRouter()
    const [userState, loadingState] = useAuthState(auth)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        if(!userState && !loadingState) {
            router.push("/auth")
        }else{
            setIsAuthenticated(true)
        }
    }, [loadingState, router, userState])

    return isAuthenticated
}