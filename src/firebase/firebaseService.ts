import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"
import { auth, firestore } from "./firebase"
import { toast } from "react-toastify"


export const USER_STORE = "users";
export const ORGANIZATION_STORE = 'organizations'
export const INVITATION_STORE = "invitations"


const get_list = async (store: string) => {
    try {
        const storeSnapshot = await getDocs(collection(firestore, store))
        toast(`${store} loaded successfully`)

        return getDatas(storeSnapshot)
    } catch (error) {
        toast.error(`an error occured`)
        console.log(error);

    }
}

const get_detail = async (store: string, id: string) => {
    const docSnapshot = await getDoc(doc(firestore, store, id))

    return getDatas(docSnapshot.exists() ? docSnapshot.data : null)
}

const get_detail_by_query = async (store: string, field: string, input: string, condition: any = "==") => {
    const q = query(collection(firestore, store), where(field, condition, input))
    const querySnapshot = await getDocs(q);

    let result: any = []

    querySnapshot.forEach((doc) => {
        result.push(doc.data())
    });

    console.log(result);    

    return result;
}

const create_doc = async (store: string, data: any, id: string | null = null) => {
    try {
        const user = auth.currentUser

        data.created_by = user?.uid
        data.created_at = new Date()

        const ref = (id !== null) ? doc(firestore, store, id) : doc(collection(firestore, store))

        await setDoc(ref, data)

        toast(`created successfully`)
    } catch (error) {
        toast.error(`${store} creation failed`)
    }
}

const delete_doc = async (store: string, id: string) => {
    const docSnapshot = await deleteDoc(doc(firestore, store, id))

    return (docSnapshot)
}

const services = {
    get_list,
    get_detail,
    create_doc,
    delete_doc,
    get_detail_by_query
}

export default services;

export const getDatas = (datas: any) => datas.docs.map((doc: any, index: number) => {
    const data = doc.data();
    data.id = doc.id
    data.sn = index + 1
    return data;
})




export const dummy_organizations = [
    {
        id: 1,
        bio: "Christ our firm foundation",
        created_at: "October 1, 2023 at 11: 29:04 AM UTC+ 1",
        created_by: "7XDwphgHj1awVgdSfmVIfwUSK5C3",
        facebook_link: "www.facebook.com/firm_foundation_prasify",
        linkedin_link: "",
        name: "Firm Foundation",
        website: "www.firmfoundation.praisify"
    }
]