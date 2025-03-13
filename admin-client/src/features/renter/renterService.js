import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { baseURL } from "../../utils/baseURL";

const getAllRenter = async () => {
    const res = await axios.get(`${baseURL}user/all-renter`, config);
    console.log(res.data);
    return res.data;
};

const renterService = {
    getAllRenter,
}

export default renterService;