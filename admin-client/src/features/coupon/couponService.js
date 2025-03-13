import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { baseURL } from "../../utils/baseURL";

const getAllCoupon = async () => {
    const res = await axios.get(`${baseURL}coupon/all`, config);
    return res.data;
}

const addCoupon = async (coupon) => {
    const res = await axios.post(`${baseURL}coupon/create`, coupon);
    console.log(coupon);
    return res.data;
}

const couponService = {
    getAllCoupon,
    addCoupon
}

export default couponService;