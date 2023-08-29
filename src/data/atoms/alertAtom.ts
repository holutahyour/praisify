import { atom, useRecoilState } from "recoil";

export type AlertType = {
    id?: string;
    type: 'success' | 'error' | 'warning';
    message: string
}

export const alert_list_state = atom<AlertType[]>({
    key: 'alert_list',
    default: []
})

export const add_alert_to_array = (alert: AlertType, alerts: AlertType[]) => {
    alert.id = get_random_string();
    return [...alerts, alert]
}

export const remove_alert_to_array = (alert: AlertType, alerts: AlertType[]) => {
    return alerts.filter(x => x.id !== alert.id)
}

export const get_random_string = (length: number = 10) => Math.random().toString(36).substring(2,length+2);