import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Descriptions, Table } from "antd";
import { getFieldfromOnwer } from "../features/seller/sellerSlice";

const columns = [
    {
        title: 'Tên sân',
        dataIndex: 'name_field',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address_field',
    },
]

const Seller = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const data = useSelector((state) => state.seller.sellers.data);
    useEffect(() => {
        for (let i = 0; i < data.length; i++)
            if (id === data[i]._id) {
                setUser(data[i]);
                break;
            }
        // eslint-disable-next-line        
    }, [data])

    useEffect(() => {
        dispatch(getFieldfromOnwer(id));
    }, [dispatch, id]);
    const listField = useSelector((state) => state.seller.fields.data);
    console.log(listField);
    const handleSubmit = () => {
        // user.isBlocked = true;
    }
    return (
        <div>
            <h3>Thông tin tài khoản chủ sân</h3>
            <Descriptions bordered column={1}>
                <Descriptions.Item label="ID">{user._id}</Descriptions.Item>
                <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
                <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                <Descriptions.Item label="Mobile">{user.mobile}</Descriptions.Item>
                <Descriptions.Item label="Full Name">{user.full_name}</Descriptions.Item>
                <Descriptions.Item label="Role">{user.role}</Descriptions.Item>
                <Descriptions.Item label="Is Blocked">{user.isBlocked ? "Yes" : "No"}</Descriptions.Item>
                <Descriptions.Item label="Balance Wallet">{user.balance_wallet}</Descriptions.Item>
                <Descriptions.Item label="Created At">
                    {new Date(user.createdAt).toLocaleString()}
                </Descriptions.Item>
                <Descriptions.Item label="Updated At">
                    {new Date(user.updatedAt).toLocaleString()}
                </Descriptions.Item>
            </Descriptions>

            <div className="d-flex justify-content-between mt-3">
                <h4 className="m-2">Block this seller ?</h4>
                <button className="button" onClick={() => handleSubmit()}>Submit</button>
            </div>
            <hr />
            <div>
                <h3>Danh sách sân đăng kí</h3>
                <div>
                    <Table
                        dataSource={listField}
                        className="renter-card"
                        columns={columns}
                        pagination={false}
                        loading={listField.length === 0}
                    />
                </div>
            </div>
        </div>
    )
}

export default Seller;