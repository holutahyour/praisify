import { atom, useRecoilState } from "recoil";

type AlertType = {
    type: 'success' | 'error' | 'warning';
    message: string
}

export const alert_list_state = atom<AlertType[]>({
    key: 'alert_list',
    default: []
})

export const useSetAlert = () => {
    let alert: AlertType = {
        type: "success",
        message: ""
    };

    const [alerts, setAlerts] = useRecoilState<AlertType[]>(alert_list_state)
    const setAlert = (x: AlertType) => alert = x

    if (alert) {        
        setAlerts((prev) => [
            ...prev,
            alert
        ])
    }

    return setAlert
}