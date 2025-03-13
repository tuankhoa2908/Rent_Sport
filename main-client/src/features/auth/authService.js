import axios from "axios";
import { baseURL } from "../../utils/baseURL";

const login = async (user) => {
    const res = await axios.post(`${baseURL}user/login`, user)
    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }
    return res.data;
}

const logOut = async () => {
    const res = await axios.get(`${baseURL}user/log-out`);
    console.log(res);
}

const authService = {
    login,
    logOut
};

export default authService;