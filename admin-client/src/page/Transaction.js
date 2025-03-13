import React from 'react';
import { useEffect } from 'react';
import { baseURL } from '../utils/baseURL';
import { config } from '../utils/axiosconfig';
import { useState } from 'react';
import { Table } from "antd";


const columns = [
    {
        title: 'Người thực hiện',
        dataIndex: 'transaction_owner',
        render: (transaction_owner) => transaction_owner.username,
    },
    {
        title: 'Người nhận',
        dataIndex: 'receiver',
        render: (receiver) => receiver.username,
    },
    {
        title: 'Số tiền (VND)',
        dataIndex: 'amount',
    },
    {
        title: 'Loại',
        dataIndex: 'type_transaction',
    },
    {
        title: 'Thời gian',
        dataIndex: 'date',
        render: (date) => date.replace('T', ' ').substring(0, 16),
    }
]

const Transaction = () => {
    const [listTransaction, setListTransaction] = useState([]);
    useEffect(() => {
        const getAllTransaction = async () => {
            try {
                const res = await fetch(`${baseURL}transaction/all`, config);
                const data = await res.json();
                setListTransaction(data.reverse());
            } catch (error) {
                console.log(error)
            }
        }
        getAllTransaction();
    }, [])
    return (
        <div>
            <h3>Lịch sử giao dịch người dùng</h3>
            <Table
                dataSource={listTransaction}
                columns={columns}
                pagination={{ pageSize: 10 }}
                loading={listTransaction === 0} />
        </div>
    )
}

export default Transaction;