import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { config } from "../../utils/axiosconfig";

const updateProfile = async (id, data) => {
    const res = await axios.post(`${baseURL}user/update-profile/${id}`, data, config);
    return res.data;
}

const addMoney = async (data) => {
    const res = await axios.post(`${baseURL}transaction/nap-tien`, data, config);
    return res.data;
}

const profileService = {
    updateProfile,
    addMoney
}

export default profileService;