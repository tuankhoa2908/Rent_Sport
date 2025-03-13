import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import CustomInput from "../components/CustomInput";
import { sellerLogin } from "../redux-features/auth/authSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let schema = Yup.object().shape({
        //email: Yup.string().email("Email must a valid email").required("Email is required"),
        password: Yup.string().required("Password is required"),
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(sellerLogin(values));
        },
    });
    const authState = useSelector((state) => state);

    const { user, isSuccess, message } = authState.auth;

    useEffect(() => {
        if (isSuccess) {
            navigate("/admin");
        }
        else if (isSuccess === false) {
            alert("Vui lòng kiểm tra lại tài khoản");
            navigate("");
        }
    }, [isSuccess])

    return (
        <div className="py-5 background-login">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                <h3 className="text-center title">Login Seller DashBoard</h3>
                <p className="text-center">Login to your account to continue.</p>
                {/* <div className="error text-center">
                    {message.message === "Rejected" ? "You are not admin." : ""}
                </div> */}
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Username"
                        id="username"
                        name="username"
                        onChng={formik.handleChange("username")}
                        val={formik.values.username}
                        placeholder="Enter usesrname..."
                    />
                    <div className="error">
                        {formik.touched.username && formik.errors.username ? (
                            <div>{formik.errors.username}</div>
                        ) : null}
                    </div>
                    <CustomInput
                        type="password"
                        label="Password"
                        id="pass"
                        name="password"
                        onChng={formik.handleChange("password")}
                        val={formik.values.password}
                        placeholder="Enter Password..."
                    />
                    <div className="error">
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="mb-3 text-end">
                        <Link to="forgot-pass" className="">
                            Forgot Password?
                        </Link>
                    </div>
                    <button
                        className="border-0 px-3 py-2 button text-white fw-bold w-100 text-center text-decoration-none fs-5"
                        type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;