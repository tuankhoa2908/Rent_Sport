import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoupon } from "../features/coupon/couponSlice";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

const columns = [
    {
        title: "Code",
        dataIndex: "code",
    },
    {
        title: "Mô tả",
        dataIndex: "describle",
    }
]


const ListCoupon = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCoupon());
    }, [dispatch]);
    const listCoupon = useSelector((state) => state.coupon.coupons.data);
    console.log(listCoupon);
    const handleRowClick = (record, rowIndex) => {
        navigate(`${listCoupon[rowIndex]._id}`);
    };

    return (
        <div>
            <h3>Danh sách mã giảm giá</h3>
            <Table
                dataSource={listCoupon}
                columns={columns}
                className='renter-card'
                pagination={false}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: () => handleRowClick(record, rowIndex),
                    }
                }}
            />
        </div>
    )
}

export default ListCoupon;