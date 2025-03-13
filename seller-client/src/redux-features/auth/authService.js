import axios from "axios";
import { baseURL } from "../../utils/baseURL";
// import { config } from "../../utils/axiosconfig";

const sellerLogin = async (user) => {
    const res = await axios.post(`${baseURL}user/seller-login`, user);
    console.log(res);
    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }
    return res.data;
};

const logOut = async () => {
    const res = await axios.get(`${baseURL}user/log-out`);
    console.log(res);
}

const authService = {
    sellerLogin,
    logOut,
}

export default authService;