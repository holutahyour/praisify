import { createContext, useContext } from "react"

interface IStore {

}

export const store: IStore = {

}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
}