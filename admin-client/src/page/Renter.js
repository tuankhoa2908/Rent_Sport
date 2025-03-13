import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Descriptions } from "antd";
import { baseURL } from "../utils/baseURL";
import { config } from "../utils/axiosconfig";

const Renter = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const data = useSelector((state) => state.renter.renters.data);
    useEffect(() => {
        for (let i = 0; i < data.length; i++)
            if (id === data[i]._id) {
                setUser(data[i]);
                break;
            }
        // eslint-disable-next-line        
    }, [])

    const handleRole = async () => {
        const res = await axios.post(`${baseURL}user/update-seller/${id}`, { body: "" }, config);
        if (res.data.status === true) {
            alert(res.data.message);
            navigate("/admin/renter")
        }
    }

    const handleBlock = async () => {
        const res = await axios.post(`${baseURL}user/block-user/${id}`, { body: "" }, config);
        if (res.data.status === true) {
            alert("User Blocked");
            navigate("/admin/renter")
        }
    }

    const handleUnblock = async () => {
        const res = await axios.post(`${baseURL}user/unblock-user/${id}`, { body: "" }, config);
        if (res.data.status === true) {
            alert("User Unblocked");
            navigate("/admin/renter")
        }
    }

    return (
        <div>
            <h3>Thông tin tài khoản người dùng</h3>


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
                <h4 className="m-2">Block this user ?</h4>
                <button className="button" onClick={() => handleBlock()}>Submit</button>
            </div>

            <div className="d-flex justify-content-between mt-3">
                <h4 className="m-2">Unblock this user ?</h4>
                <button className="button" onClick={() => handleUnblock()}>Submit</button>
            </div>

            <div className="d-flex justify-content-between mt-3">
                <h4 className="m-2">Update this user to seller ?</h4>
                <button className="button" onClick={() => handleRole()}>Submit</button>
            </div>
            <hr />
            <div>
                <h3>Lịch sử thuê sân</h3>
            </div>
        </div>
    )
}

export default Renter;