import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";

import { login } from "../features/auth/authSlice";



const Login = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (user) navigate('/')
    }, [user]);
    const [data, setData] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.username === "" || data.password === "") {
            alert("Please fill in all fields");
        } else {
            console.log(data);
            dispatch(login(data));
        }
    }

    const checkLogin = useSelector((state) => state.auth);
    useEffect(() => {
        console.log(checkLogin.isSuccess);
        if (checkLogin.isSuccess) {
            navigate("/")
        }
        // eslint-disable-next-line
    }, [checkLogin])

    return (
        <div>
            <Meta title={"Login Account"} />
            <BreadCrumb title="Login Account" />
            <Container class1="login-wrapper py-5 home-wrapper-2"><div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <div className="login-card">
                            <h3 className="text-center mb-3">Login</h3>
                            <form onSubmit={handleSubmit} className="d-flex flex-column gap-15">
                                <div>
                                    <input
                                        autoFocus={true}
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={data.username}
                                        onChange={handleChange}
                                        placeholder="Your Username..."></input>
                                </div>
                                <div className="mt-1">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Your Password..."
                                        value={data.password}
                                        onChange={handleChange}
                                        className="form-control"></input>
                                </div>
                                <div>
                                    <Link to='/forgot-password'>Forgot Password ?</Link>
                                    <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                        <button className="button-web border-0" type="submit">Login</button>
                                        <p className="mb-0">Or</p>
                                        <Link to="/sign-up" className="button-web sign-up">Sign Up</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div></Container>
        </div>
    )
}

export default Login;   