import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { baseURL } from "../utils/baseURL";

import { AiOutlineDashboard, AiTwotoneDollar } from "react-icons/ai";
import { TbSoccerField } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList, FaSolarPanel, FaList, FaPlus } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { RiPingPongFill, RiCoupon2Fill } from "react-icons/ri";

import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import { logOut } from '../redux-features/auth/authSlice';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    // const [sellerData, setSellerData] = useState(null);
    // useEffect(() => {
    //     const dataAccountAdmin = async () => {
    //         const response = await fetch(`${baseURL}/user/675db6ba1ac9011f9e0b10bc`);
    //         const data = await response.json();
    //         setAdminData(data); // Store fetched data in state
    //     };
    //     dataAccountAdmin();
    // }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(logOut());
        navigate('/');
    }

    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <h2 className='text-white fs-5 text-center py-3 mb-0'>
                        <span className='sm-logo'><FaSolarPanel /></span>
                        <span className='lg-logo'>RENT SPORT</span>
                    </h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['']}
                    onClick={({ key }) => {
                        if (key === "signout") { }
                        else {
                            navigate(key)
                        }
                    }}
                    items={[
                        {
                            key: '',
                            icon: <AiOutlineDashboard className='fs-4' />,
                            label: 'Dash Board',
                        },
                        {
                            key: 'profile',
                            icon: <CgProfile className='fs-4' />,
                            label: 'Thông tin cá nhân',
                        },
                        {
                            key: 'history-transaction',
                            icon: <AiTwotoneDollar className='fs-4' />,
                            label: "Lịch Sử Giao dịch"
                        },
                        {
                            key: 'list-order',
                            icon: <FaClipboardList className='fs-4' />,
                            label: 'Đơn thuê sân',
                        },
                        {
                            icon: <TbSoccerField className='fs-4' />,
                            label: 'Sân thể thao',
                            children: [
                                {
                                    key: 'list-field',
                                    icon: <FaList className='fs-4' />,
                                    label: 'Danh sách sân',
                                },
                                {
                                    key: 'create-field',
                                    icon: <FaPlus className='fs-4' />,
                                    label: 'Đăng kí sân mới',
                                }
                            ]
                        },
                        {
                            key: 'policy',
                            icon: <MdPolicy className='fs-4' />,
                            label: 'Quy định cho chủ sân'
                        }
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    className='d-flex justify-content-between ps-1 pe-5'
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed),
                        }
                    )}
                    <div className="d-flex gap-4 align-items-center">

                        <div className="position-relative">
                            <IoIosNotifications className="fs-4 notifi-admin" />
                            <span className="badge bg-warning rounded-circle p-1 position-absolute">
                                3
                            </span>
                        </div>
                        <div className="d-flex gap-3 align-items-center dropdown">
                            <div>
                                <img
                                    width={32}
                                    height={32}
                                    src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                                    alt=""
                                />
                            </div>
                            <div
                                role="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {user ? (
                                    <>
                                        <h5 className="mb-0">{user.full_name}</h5>
                                        <p className="mb-0">{user.email}</p>
                                    </>
                                ) : (
                                    <p>loading</p>
                                )}

                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li>
                                    <Link
                                        className="dropdown-item py-1 mb-1"
                                        style={{ height: "auto", lineHeight: "20px" }}
                                        to="/admin/profile"
                                    >
                                        View Profile
                                    </Link>
                                </li>
                                <li>
                                    <Button
                                        className="dropdown-item py-1 mb-1"
                                        style={{ height: "auto", lineHeight: "20px" }}
                                        onClick={handleLogout}
                                    >
                                        Signout
                                    </Button>
                                </li>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: "#ced4da",
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainLayout;