import React, { useState } from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';
import { baseURL } from '../utils/baseURL';
import axios from "axios";

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const SignUp = () => {
    const [form, setForm] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        mobile: '',
        full_name: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        if (form.password !== form.confirmPassword)
            return alert("Vui lòng nhập lại mật khẩu giống với mật khẩu muốn tạo.")
        if (!validateEmail(form.email))
            return alert("Vui lòng nhập địa chỉ email hợp lệ");
        const createAccount = async () => {
            try {
                const res = await axios.post(`${baseURL}user/register`, form);
                if (res.data.status === true) {
                    alert("Tạo tài khoản thành công");
                    window.location.href = "/login";
                }

            } catch (error) {
                console.log(error);
            }
        }
        createAccount();
    }
    return (
        <>
            <Meta title={"SignUp"} />
            <BreadCrumb title="SignUp" />
            <Container class1='login-wrapper py-5 home-wrappper-2'>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <div className="login-card">
                                <h3 className="text-center mb-3">Đăng kí tài khoản</h3>
                                <form onSubmit={handleSubmit} className="d-flex flex-column gap-15">
                                    <div>
                                        <input
                                            autoFocus={true}
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            value={form.username}
                                            onChange={handleChange}
                                            placeholder="Your Username..."></input>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Your Password..."
                                            value={form.password}
                                            onChange={handleChange}
                                            className="form-control"></input>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm Your Password..."
                                            value={form.confirmPassword}
                                            onChange={handleChange}
                                            className="form-control"></input>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Your Email..."
                                            value={form.email}
                                            onChange={handleChange}
                                            className="form-control"></input>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="mobile"
                                            placeholder="Your Phone..."
                                            value={form.mobile}
                                            onChange={handleChange}
                                            className="form-control"></input>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="full_name"
                                            placeholder="Your Name..."
                                            value={form.full_name}
                                            onChange={handleChange}
                                            className="form-control"></input>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button type='submit' className="button-web sign-up">Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SignUp;