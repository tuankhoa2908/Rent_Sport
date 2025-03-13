import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Descriptions } from "antd";

const Coupon = () => {
    const { id } = useParams();
    const [coupon, setCoupon] = useState({});
    const data = useSelector((state) => state.coupon.coupons.data);
    useEffect(() => {
        for (let i = 0; i < data.length; i++)
            if (id === data[i]._id) {
                setCoupon(data[i]);
                break;
            }
        // eslint-disable-next-line        
    }, [data])
    return (
        <div>
            <h3>Thông tin chi tiết mã Khuyến mãi</h3>

            <Descriptions bordered column={1}>
                <Descriptions label="Code">{coupon.code}</Descriptions>
                <Descriptions label="Name">{coupon.name}</Descriptions>
                <Descriptions label="Discount">{coupon.discount}</Descriptions>
                <Descriptions label="Describle">{coupon.describle}</Descriptions>
                <Descriptions label="Expiry">{coupon.expiry}</Descriptions>
                <Descriptions label="Number_use">{coupon.number_use}</Descriptions>
            </Descriptions>

            <div className="d-flex justify-content-end mt-3">
                <button className=" button">
                    Quay lại
                </button>
            </div>

        </div>
    )
}

export default Coupon;