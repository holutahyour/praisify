import { auth, firestore } from "@/firebase/firebase"
import services, { ORGANIZATION_STORE, USER_STORE } from "@/firebase/firebaseService"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { ORGANIZATION_LINK } from "./applinks"
import { collection, doc, runTransaction } from "firebase/firestore"

export const useRedirectToAuth = () => {
    const router = useRouter()
    const [userState, loadingState] = useAuthState(auth)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        if (!userState && !loadingState) {
            router.push("/auth")
        } else {
            setIsAuthenticated(true)
        }
    }, [loadingState, router, userState])

    return isAuthenticated
}

export const useOrganization = () => {
    const { get_list, get_detail, create_doc, delete_doc, get_detail_by_query } = services

    const router = useRouter();
    const [user, loading] = useAuthState(auth)

    const [organization, setOrganization] = useState({});

    const handle_submit = async () => {
        if (!user && !loading) return;

        setOrganization(prev => ({
            ...prev,
            creator: {
                name: user?.displayName,
                uid: user?.uid,
                email: user?.email
            }
        }))

        console.log("organization", organization)

        if (confirm("Create an organization ?")) {
            await runTransaction(firestore, async (transaction) => {
                const organizationRef = doc(firestore, ORGANIZATION_STORE, user!.uid)
                const userOrganizationRef = doc(firestore, `${USER_STORE}/${user!.uid}/${ORGANIZATION_STORE}`,user!.uid)

                transaction.set(organizationRef, organization)
                transaction.set(userOrganizationRef, organization)
            })

            router.push(ORGANIZATION_LINK.LIST)
            
            console.log("submited", organization)
        };
    }

    const handleField = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        setOrganization((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            creator: {
                name: user?.displayName,
                uid: user?.uid,
                email: user?.email
            }
        }))
    }

    return {handle_submit, handleField}
}

export const useInvitation = () => {
    
}