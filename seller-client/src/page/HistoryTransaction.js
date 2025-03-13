import React, { useEffect, useState } from "react";
import { baseURL } from "../utils/baseURL";
import { config } from "../utils/axiosconfig";

import { Table } from "antd";

const columns = [
    {
        title: "Người thực hiện",
        dataIndex: "transaction_owner",
        render: (transaction_owner) => transaction_owner?.full_name || "N/A",
    },
    {
        title: "Người nhận",
        dataIndex: "receiver",
        render: (receiver) => receiver?.full_name || "N/A",
    },
    {
        title: "Số tiền",
        dataIndex: "amount",
    },
    {
        title: "Thời gian",
        dataIndex: "date",
        render: (date) => new Date(date).toLocaleString("vi-VN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }),
    }
]

const HistoryTransaction = () => {
    const seller = JSON.parse(localStorage.getItem('user'));
    const [listTransaction, setListTransaction] = useState([]);
    useEffect(() => {
        const getHistoryTransaction = async () => {
            const res = await fetch(`${baseURL}transaction/${seller._id}`, config);
            const data = await res.json();
            setListTransaction(data);
            console.log(listTransaction);
        }
        getHistoryTransaction();
    }, [])
    return (
        <div>
            <h1>Lịch sử giao dịch tài khoản</h1>
            <Table
                dataSource={listTransaction}
                columns={columns}
                pagination={false}
                className="renter-card"
                loading={!listTransaction}
            />
        </div>
    )
}

export default HistoryTransaction;