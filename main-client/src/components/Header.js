import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/auth/authSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let isAuthenticated = JSON.parse(localStorage.getItem("user"));
    console.log(isAuthenticated)
    const handleLogout = () => {
        localStorage.removeItem('user', 'reduxState');
        dispatch(logOut());
        navigate('/');
    }
    return (
        <>
            <header className="header-top-strip py-1">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">Liên hệ hợp tác: tuankhoa2908@gmail.com</p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Hotline:{" "}
                                <a className="text-white" href="tel:+84 339923069">+84 339923069</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>


            {/* Find products and features */}
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link to="/" className="site-name-header">RENT SPORT</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Type here to search facilities..."
                                    aria-label="Type here to search facilities..."
                                    aria-describedby="basic-addon2" />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className="fs-6" />
                                </span>
                            </div>


                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-end gap-15">
                                {
                                    isAuthenticated ? (
                                        <>
                                            {/* Profile Link */}
                                            <div>
                                                <p className="mb-0 login-header">Welcome, {isAuthenticated.username}</p>
                                            </div>
                                            <div>
                                                <Link to="/profile" className="d-flex align-items-center gap-10 text-white">
                                                    <img src="images/user.png" alt="user"></img>
                                                    <p className="mb-0 login-header">Profile</p>
                                                </Link>
                                            </div>
                                            {/* Logout Button */}
                                            <div>
                                                <button
                                                    onClick={handleLogout}
                                                    className="btn btn-link d-flex align-items-center gap-10 text-white">
                                                    <img src="images/logout.png" alt="logout"></img>
                                                </button>
                                            </div>
                                        </>

                                    ) : (
                                        <div>
                                            <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                                                <img src="images/user.png" alt="user"></img>
                                                <p className="mb-0 login-header">Login</p>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent me-5 border-0 d-flex gap-10 align-items-center"
                                            type="button" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <img src="images/menu.svg" alt="menu"></img>
                                            <span className="d-inline-block">Danh mục loại thể thao</span>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link className="dropdown-item" to="/all-field">Bóng đá</Link></li>
                                            <li><Link className="dropdown-item" to="/all-field">Cầu lông</Link></li>
                                            <li><Link className="dropdown-item" to="/all-field">Bóng bàn</Link></li>
                                            <li><Link className="dropdown-item" to="/all-field">Pickle Ball</Link></li>
                                            <li><Link className="dropdown-item" to="/all-field">Tennis</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Trang chủ</NavLink>
                                        <NavLink to="/all-field">Danh sách sân</NavLink>
                                        <NavLink to="/blogs">Tin tức</NavLink>
                                        <NavLink to="/contact">Liên hệ</NavLink>
                                        <NavLink to="/history-order">Lịch sử thuê</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;