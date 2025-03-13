import React, { useEffect, useState } from "react";
// import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";

import { Table } from "antd";

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
    const [seller, setSeller] = useState({});
    useEffect(() => {
        const x = localStorage.getItem('user');
        if (x) setSeller(JSON.parse(x));
    }, []);

    return (
        <div>
            <h1>Hệ thống cho thuê sân thể thao Rent Sport</h1>
            <h2>Xin chào {seller.full_name}</h2>
            <h2 className="mb-4 title">Bảng điều khiển trung tâm</h2>
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
            </div>
        </div>
    )
}

export default DashBoard;