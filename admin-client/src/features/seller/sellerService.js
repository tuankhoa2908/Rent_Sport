import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { baseURL } from "../../utils/baseURL";

const getAllSeller = async () => {
    const res = await axios.get(`${baseURL}user/all-seller`, config);
    return res.data;
};

const getFieldfromOnwer = async (id) => {
    console.log(id);
    const res = await axios.get(`${baseURL}field/owner-field/${id}`, config);
    return res.data;
}

const sellerService = {
    getAllSeller,
    getFieldfromOnwer
}

export default sellerService;