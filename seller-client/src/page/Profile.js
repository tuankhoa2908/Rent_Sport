import React, { useEffect, useState } from "react";
import { baseURL } from "../utils/baseURL";

import { Descriptions } from "antd";
import { useDispatch } from "react-redux";

import { updateProfile, addMoney } from "../redux-features/profile/profileSlice";

const Profile = () => {
    const seller = JSON.parse(localStorage.getItem('user'));
    const [profile, setProfile] = useState(null);
    const [isupdate, setIsUpdate] = useState(false);
    const [isDeposit, setIsDeposit] = useState(false);
    const [amount, setAmount] = useState(0);
    const [update, setUpdate] = useState({
        full_name: "",
        mobile: "",
    });
    const dispatch = useDispatch();

    const showUpdate = () => { setIsUpdate(true); }
    const showDeposit = () => { setIsDeposit(true); }
    const handleChange = (e) => {
        // e.preventDefault();
        const { name, value } = e.target;
        console.log(value);
        setUpdate((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(update);
        dispatch(updateProfile({ id: profile._id, data: update }));
        setIsUpdate(false);
        window.location.reload();
    }
    const handleDeposit = (e) => {
        e.preventDefault();
        const data = { amount: amount, id: profile._id }
        dispatch(addMoney(data));
        setIsDeposit(false);
        window.location.reload();
    }

    useEffect(() => {
        const dataProfile = async () => {
            const res = await fetch(`${baseURL}/user/${seller._id}`);
            const data = await res.json();
            setProfile(data.user);
        }
        dataProfile();
        console.log(profile);
    }, []);
    return (
        <>
            <h1>Thông tin cá nhân</h1>
            <Descriptions bordered column={1} className="custom-descriptions">
                <Descriptions.Item label="Username">{profile?.username}</Descriptions.Item>
                <Descriptions.Item label="Email">{profile?.email}</Descriptions.Item>
                <Descriptions.Item label="Họ tên">{profile?.full_name}</Descriptions.Item>
                <Descriptions.Item label="Số điện thoại">{profile?.mobile}</Descriptions.Item>
                <Descriptions.Item label="Vai trò">{profile?.role}</Descriptions.Item>
                <Descriptions.Item label="Trạng thái tài khoản">{profile?.isBlocked ? "Đã khóa" : "Hoạt động"}</Descriptions.Item>
                <Descriptions.Item label="Số dư ví">{profile?.balance_wallet} VND</Descriptions.Item>
            </Descriptions>
            {
                !isupdate && (
                    <div className="d-flex">
                        <button onClick={showUpdate} className="button mt-3">Cập nhật thông tin</button>
                    </div>
                )
            }
            {
                isupdate && (
                    <div className="d-flex flex-column gap-3 mt-5">
                        <input
                            type="text"
                            placeholder="Họ tên"
                            name="full_name"
                            value={update.full_name}
                            className="input-rent-page"
                            onChange={handleChange} />
                        <input
                            type="text"
                            placeholder="Số điện thoại"
                            name="mobile"
                            value={update.mobile}
                            className="input-rent-page"
                            onChange={handleChange} />
                        <button className="button mt-3" onClick={handleUpdate}>Cập nhật</button>
                    </div>
                )
            }
            {
                !isDeposit && (
                    <div>
                        <button className="button mt-3" onClick={showDeposit}>Nạp tiền</button>
                    </div>
                )
            }
            {
                isDeposit && (
                    <div className="d-flex flex-column gap-3 mt-5">
                        <input
                            type="number"
                            placeholder="Nhập số tiền bạn muốn nạp thêm"
                            name="mobile"
                            value={amount}
                            className="input-rent-page"
                            onChange={(e) => {
                                e.preventDefault();
                                setAmount(e.target.value)
                            }} />
                        <button className="button mt-3" onClick={handleDeposit}>Cập nhật</button>
                    </div>
                )
            }
        </>
    )
}

export default Profile;