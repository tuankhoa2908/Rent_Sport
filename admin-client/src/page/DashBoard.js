import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";

import { Table } from "antd";
import { useEffect } from "react";
import { config } from "../utils/axiosconfig";
import { baseURL } from "../utils/baseURL";
import { useState } from "react";
import axios from "axios";

const exampleData = [
    { month: "January", revenue: 1200 },
    { month: "February", revenue: 1500 },
    { month: "March", revenue: 1800 },
    { month: "April", revenue: 2100 },
    { month: "May", revenue: 1700 },
    { month: "June", revenue: 1900 },
];

const columns = [
    {
        title: 'Tháng',
        dataIndex: 'month',
        key: 'month'
    },
    {
        title: 'Thu nhập',
        dataIndex: 'revenue',
        text: 'revenue',
        render: (text) => `${text.toLocaleString()} VND`,
    }
]


const DashBoard = () => {
    const [listField, setListField] = useState([]);

    useEffect(() => {
        const listWaitField = async () => {
            console.log(config);
            const res = await fetch(`${baseURL}field/wait`, config);
            const data = await res.json();
            setListField(data);
            console.log(listField);
        }
        listWaitField();
    }, [])

    const handleSubmitField = async (id) => {
        try {
            const res = await axios.post(`${baseURL}field/submit/${id}`, {}, config);
            if (res.status === 200) {
                window.location.reload();
                alert("Đã xác nhận sân");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Hệ thống cho thuê sân thể thao</h2>
            <br />
            <h3 className="mb-4 title">DashBoard</h3>
            <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
                    <div>
                        <p className="desc">Total</p>
                        <h4 className="mb-0 sub-title">$1100</h4>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <h6 className="red">
                            <BsArrowDownRight /> 32%
                        </h6>
                        <p className="mb-0  desc">Compared To April 2022</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
                    <div>
                        <p className="desc">Total</p>
                        <h4 className="mb-0 sub-title">$1100</h4>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <h6 className="green">
                            <BsArrowUpRight /> 32%
                        </h6>
                        <p className="mb-0  desc">Compared To April 2022</p>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
                    <div>
                        <p className="desc">Total</p>
                        <h4 className="mb-0 sub-title">$1100</h4>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <h6 className="red">
                            <BsArrowDownRight /> 32%
                        </h6>
                        <p className="mb-0  desc">Compared To April 2022</p>
                    </div>
                </div>

            </div>
            <br />
            <div className="gap-3">
                <h3 className="mb-4 title">Bảng thống kê doanh thu</h3>
                <Table
                    dataSource={exampleData}
                    columns={columns}
                    pagination={{ pageSize: 6 }}
                    loading={exampleData.length === 0}
                />
            </div>
            <hr />
            <div>
                <h3>Các sân đang chờ xác nhận</h3>
                <div>
                    {listField.length > 0 ? (
                        listField.map((item, index) => (
                            <div key={index} className="list-field-card mt-3">
                                <h2>{item.name_field}</h2>
                                <p>Tên đầy đủ: {item.owner_field.full_name}</p>
                                <button className="button" onClick={() => handleSubmitField(item._id)}>Xác nhận sân</button>
                            </div>
                        ))) : (
                        <h4>Không có sân chờ xác nhận.</h4>)
                    }
                </div>
            </div>
        </div>
    )
}

export default DashBoard;