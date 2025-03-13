import React from 'react';
import { useEffect, useState } from 'react';
import { baseURL } from '../utils/baseURL';
import { config } from '../utils/axiosconfig';
import { Table } from 'antd';

const columns = [
    {
        title: 'Tên người thuê',
        dataIndex: 'id_renter',
        render: (id_renter) => id_renter.username,
    },
    {
        title: 'Tên sân',
        dataIndex: 'id_field',
        render: (id_field) => id_field.name_field,
    },
    {
        title: 'Thời gian thuê',
        dataIndex: 'time_rent',
    },
    {
        title: 'Giá',
        dataIndex: 'after_discount',
    },
    {
        title: "Tiền cọc",
        dataIndex: 'deposit'
    }
];

const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toISOString().slice(11, 16);
};
const formatDay = (isoString) => {
    const date = new Date(isoString);
    const day = date.getUTCDate().toString().padStart(2, '0'); // Day (DD)
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Month (MM)
    const year = date.getUTCFullYear(); // Year (YYYY)

    return `${day}-${month}-${year}`;
};

const Order = () => {
    const [listOrder, setListOrder] = useState([]);
    useEffect(() => {
        const getAllOrder = async () => {
            try {
                const res = await fetch(`${baseURL}order/all`, config);
                const data = await res.json();
                data.forEach((item) => {
                    item.time_rent = `${formatTime(item.start_time)} - ${formatTime(item.end_time)} ${formatDay(item.day_rent)}`
                })
                setListOrder(data);
            } catch (error) {
                console.log(error)
            }
        };
        getAllOrder();



    }, [])
    return (
        <div>
            <h3>Danh sách lịch sử đặt thuê sân</h3>
            <Table
                dataSource={listOrder}
                columns={columns}
                pagination={{ pageSize: 10 }}
                loading={listOrder === 0}
            />
        </div>
    )
}
export default Order;