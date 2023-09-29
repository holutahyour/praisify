import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore"
import { firestore } from "./firebase"
import { toast } from "react-toastify"


const get_list = async (store: string) => {
    try {
        const storeSnapshot = await getDocs(collection(firestore, store))
        toast(`created successfully`)

        console.log(getDatas(storeSnapshot));
        

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

const create_doc = async (store: string, data: any) => {
    try {
        const docSnapshot = await addDoc(collection(firestore, store), data)
        toast(`created successfully`)

        return (docSnapshot)
    } catch (error) {
        toast.error(`${store} creation failed`)
        console.log(error);
        
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
}

export default services;

export const getDatas = (datas: any) => datas.docs.map((doc: any, index: number) => {
    console.log(doc);
    
    const data = doc.data();
    data.id = doc.id
    data.sn = index + 1
    return data; 
})