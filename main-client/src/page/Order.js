import React, { useState, useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
// import { config } from "../utils/axiosconfig";
import { baseURL } from "../utils/baseURL";
import axios from "axios";
import { config } from "../utils/axiosconfig";

const Order = () => {
    let order = JSON.parse(localStorage.getItem('current-order'));
    const user = JSON.parse(localStorage.getItem('user'));
    const [field, setField] = useState({});
    const [coupon, setCoupon] = useState({
        code: "",
        day_use: order.data.day_rent
    });
    const [applyCoupon, setApplyCoupon] = useState({});
    useEffect(() => {
        console.log(order);
        const getField = async () => {
            const res = await fetch(`${baseURL}field/all-field/${order.data.id_field}`);
            const data = await res.json();
            setField(data);
        };
        getField();
    }, [])

    const checkCoupon = async () => {
        console.log(coupon);
        const res = await axios.post(`${baseURL}coupon/check-coupon`, coupon);
        setApplyCoupon(res.data);
        if (res.data.status === true) {
            alert("Coupon Applied");
        } else {
            alert(`${res.data.message}`);
        }
    };

    const handleChange = (e) => {
        setCoupon((prev) => ({
            ...prev,
            code: e.target.value
        }));
    }

    const handleSubmit = async () => {
        order.data.id_renter = user._id;
        order.data.id_coupon = applyCoupon?.data?.code;
        order.data.price_field = order.data.priceField;
        if (applyCoupon?.status === true) {
            order.data.after_discount = order.data.priceField - order.data.priceField * applyCoupon?.data?.discount;
            order.data.deposit = (order.data.priceField - order.data.priceField * applyCoupon?.data?.discount) * 0.4;
        } else {
            order.data.deposit = order.data.priceField * 0.4;
            order.data.after_discount = order.data.priceField;
        }
        const data = order.data;
        console.log(data);
        console.log(config);
        try {
            const res = await axios.post(`${baseURL}order/create-order`, data, config);
            if (res.data.status === true) {
                alert("Đặt sân thành công.");
                window.location.href = "/history-order";
            } else {
                alert(`${res.data.message}`);
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <Meta title={"Order"} />
            <BreadCrumb title="Order" />
            <Container class1="home-wrapper-2 py-5 ">
                <div>
                    <h1 className="title-order">Thông tin đơn thuê sân</h1>
                    <div className="order-content col-12">
                        <div className="d-flex justify-content-between">
                            <h3>Tên sân: </h3>
                            <h3>{field.name_field}</h3>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h3>Địa chỉ: </h3>
                            <h3>{field.address_field}</h3>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h3>Giá tiền theo giờ: </h3>
                            <h3>{order.data.priceField / order.data.timeOrder} VND</h3>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h3>Thời gian thuê: </h3>
                            <h3>{order.data.start_time} - {order.data.end_time}</h3>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h3>Tạm Tính:    </h3>
                            <h3>{order.data.priceField} VND</h3>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <h3 className="mt-3">Nhập mã giảm giá</h3>
                        <input
                            type="text"
                            className="input-rent-page"
                            placeholder="Nhập mã giảm giá... "
                            value={coupon.code}
                            onChange={handleChange} />
                        <button className="button-web " onClick={checkCoupon}>Kiểm tra</button>
                    </div>
                    {
                        applyCoupon.status && (
                            <p style={{ color: 'red' }}>Áp dụng mã giảm giá thành công!!!</p>
                        )
                    }
                    <div className="order-content mt-3">
                        <div className="d-flex justify-content-between">
                            <h3>Giá sau khi giảm: </h3>
                            {
                                applyCoupon.status ? (
                                    <h3>{order.data.priceField - order.data.priceField * applyCoupon?.data?.discount} VND</h3>
                                ) : (
                                    <h3>{order.data.priceField} VND</h3>
                                )
                            }
                        </div>
                        <div className="d-flex justify-content-between">
                            <h3>Tiền cọc cần thanh toán: </h3>
                            {
                                applyCoupon.status ? (
                                    <h3>{(order.data.priceField - order.data.priceField * applyCoupon?.data?.discount) * 0.4} VND</h3>
                                ) : (
                                    <h3>{order.data.priceField * 0.4} VND</h3>
                                )
                            }
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <h3>Xác nhận đơn hàng và tiến hành thanh toán ?</h3>
                        <button className="button-web" onClick={handleSubmit}>Xác nhận</button>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Order;