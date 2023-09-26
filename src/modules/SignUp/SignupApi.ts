import { NavigateFunction } from "react-router-dom";
import { success } from "../../Components/Toast/Toastify";


export const signup = async (
    userName: string,
    password: string,
    navigate: NavigateFunction,
    ) => {
        localStorage.setItem("userName", userName);
        localStorage.setItem("password", password);
        success()
        setTimeout(() => {
            navigate('/signin');
        }, 2000);
}