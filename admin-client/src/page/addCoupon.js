import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import CustomInput from "../components/CustomInput";
import { useState } from "react";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addCoupon, resetNewCouponState } from "../features/coupon/couponSlice";
import { useEffect } from "react";

const AddCoupon = () => {
    const dispatch = useDispatch();

    const [newCoupon, setNewCoupon] = useState({
        code: "",
        name: "",
        expiry: "",
        discount: 0,
        number_use: 0,
        describle: "",
    });

    const handleChange = (e) => {
        // e.preventDefault();
        const { name, value } = e.target;
        console.log(value);
        setNewCoupon((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleDescribleChange = (value) => {
        //const plainText = value.replace(/<[^>]*>/g, "").trim();
        setNewCoupon((prev) => ({
            ...prev,
            describle: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        newCoupon.describle = newCoupon.describle.replace(/<[^>]*>/g, "").trim();
        console.log("Coupon Data:", newCoupon);
        dispatch(addCoupon(newCoupon));
    };


    const result = useSelector((state) => state.coupon.newCoupon.data.message);
    useEffect(() => {
        if (result === "OKE") {
            alert("Thêm mã giảm giá mới thành công <3");
            dispatch(resetNewCouponState());
        } else if (result) {
            alert("Có lỗi xảy ra từ server @@");
            dispatch(resetNewCouponState());
        }
    }, [result, dispatch]);

    return (
        <div>
            <h3>Tạo mã khuyến mãi mới</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter code coupon..."
                        name="code"
                        val={newCoupon.code}
                        onChng={handleChange} />
                    <CustomInput
                        type="text"
                        label="Enter name coupon..."
                        name="name"
                        val={newCoupon.name}
                        onChng={handleChange} />
                    <CustomInput
                        type="date"
                        label="Enter expiry date..."
                        name="expiry"
                        val={newCoupon.expiry}
                        onChng={handleChange} />
                    <CustomInput
                        type="number"
                        step="0.1"
                        label="Percent of discount (%)"
                        name="discount"
                        val={newCoupon.discount}
                        onChng={handleChange} />
                    <CustomInput
                        type="number"
                        label="Enter number of use..."
                        name="number_use"
                        val={newCoupon.number_use}
                        onChng={handleChange} />
                    <ReactQuill
                        theme="snow"
                        placeholder="Enter describle..."
                        value={newCoupon.describle}
                        onChange={handleDescribleChange}
                    />

                    <div className="d-flex justify-content-end mt-3">
                        <button className="button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCoupon;