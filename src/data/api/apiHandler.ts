import services from "@/firebase/firebaseService"

const {get_list, get_detail, create_doc, delete_doc} = services

///////////////////
///// Events //////
///////////////////
const EVENT_STORE =  'events'
const Events = {
    get_list: get_list(EVENT_STORE)
}


const apiHandler = {
    Events
}

export default apiHandler