import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { config } from "../../utils/axiosconfig";

const getProfile = async (id) => {
    const res = await axios.get(`${baseURL}user/${id}`, config);
    return res.data;
}

const updateProfile = async (id, data) => {
    console.log(id, data);
    const res = await axios.post(`${baseURL}user/update-profile/${id}`, data, config);
    console.log(res.data);
    return res.data;
}

const addMoney = async (data) => {
    console.log(1);
    console.log(data);
    const res = await axios.post(`${baseURL}transaction/nap-tien`, data, config);
    return res.data;
}

const userService = {
    getProfile,
    updateProfile,
    addMoney
}

export default userService;