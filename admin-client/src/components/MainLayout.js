import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { baseURL } from "../utils/baseURL";

import { AiOutlineDashboard, AiTwotoneDollar } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { GiSoccerBall, GiPingPongBat, GiTennisBall } from "react-icons/gi";
import { TbOlympics } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList, FaSolarPanel, FaList, FaPlus } from "react-icons/fa";
import { MdOutlineSportsTennis } from "react-icons/md";
import { RiPingPongFill, RiCoupon2Fill } from "react-icons/ri";

import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import { logOut } from '../features/auth/authSlice';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [adminData, setAdminData] = useState(null);
    useEffect(() => {
        const dataAccountAdmin = async () => {
            const response = await fetch(`${baseURL}user/675db6ba1ac9011f9e0b10bc`);
            const data = await response.json();
            setAdminData(data); // Store fetched data in state
        };
        dataAccountAdmin();
    }, []);

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
                            // key: 'customer',
                            icon: <IoPeople className='fs-4' />,
                            label: 'Khách hàng',
                            children: [
                                {
                                    key: 'renter',
                                    icon: <IoPeople className='fs-4' />,
                                    label: 'Người thuê',
                                },
                                {
                                    key: 'seller',
                                    icon: <IoPeople className='fs-4' />,
                                    label: 'Người cho thuê',
                                }
                            ]
                        },
                        {
                            icon: <TbOlympics className='fs-4' />,
                            label: "Danh sách sân",
                            children: [
                                {
                                    key: 'soccer',
                                    icon: <GiSoccerBall className='fs-4' />,
                                    label: 'Bóng đá',
                                },
                                {
                                    key: 'badminton',
                                    icon: <MdOutlineSportsTennis className='fs-4' />,
                                    label: 'Cầu lông',
                                },
                                {
                                    key: 'pickleball',
                                    icon: <GiPingPongBat className='fs-4' />,
                                    label: "Pickle Ball",
                                },
                                {
                                    key: 'pingpong',
                                    icon: <RiPingPongFill className='fs-4' />,
                                    label: 'Bóng bàn'
                                },
                                {
                                    key: 'tennis',
                                    icon: <GiTennisBall className='fs-4' />,
                                    label: 'Tennis',
                                }
                            ]
                        },
                        {
                            key: 'transaction',
                            icon: <AiTwotoneDollar className='fs-4' />,
                            label: "Giao dịch"
                        },
                        {
                            key: 'order',
                            icon: <FaClipboardList className='fs-4' />,
                            label: 'Đơn hàng',
                        },
                        {
                            icon: <RiCoupon2Fill />,
                            label: 'Mã giảm giá',
                            children: [
                                {
                                    key: 'list-coupon',
                                    icon: <FaList className='fs-4' />,
                                    label: 'Danh sách',
                                },
                                {
                                    key: 'create-coupon',
                                    icon: <FaPlus className='fs-4' />,
                                    label: 'Tạo mới',
                                }
                            ]
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
                                {adminData ? (
                                    <>
                                        <h5 className="mb-0">{adminData.user.full_name}</h5>
                                        <p className="mb-0">{adminData.user.email}</p>
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
                                        to="/"
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