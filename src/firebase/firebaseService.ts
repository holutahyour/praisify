import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore"
import { firestore } from "./firebase"


const get_list = async (store: string) => {
    const storeSnapshot = await getDocs(collection(firestore, store))
    return getDatas(storeSnapshot)
}

const get_detail = async (store: string, id: string) => {
    const docSnapshot = await getDoc(doc(firestore, store, id))

    return getDatas(docSnapshot.exists() ? docSnapshot.data : null)
}

const create_doc = async (store: string, data: any) => {
    const docSnapshot = await setDoc(doc(firestore, store), data)

    return(docSnapshot)
}

const delete_doc = async (store: string, id: string) => {
    const docSnapshot = await deleteDoc(doc(firestore, store, id))

    return(docSnapshot)
}

const services = {
    get_list,
    get_detail,
    create_doc,
    delete_doc,
}

export default services;

export const getDatas = (datas: any) => datas.docs.map((doc: any) => doc.data())