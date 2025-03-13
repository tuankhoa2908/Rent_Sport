import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { useNavigate } from "react-router-dom";
import { getAllSeller } from '../features/seller/sellerSlice';


const columns = [
    {
        title: "STT",
        dataIndex: 'key',
    },
    {
        title: 'Username',
        dataIndex: 'username',
        sorter: (a, b) => a.username.length - b.username.length,
    },
    {
        title: 'Full name',
        dataIndex: 'full_name',
        sorter: (a, b) => a.full_name.length - b.full_name.length,
    },
    {
        title: 'Mobile',
        dataIndex: 'mobile',
    },
    {
        title: 'Wallet',
        dataIndex: 'balance_wallet',
        // text: 'waller_balance',
        render: (text) => `${text.toLocaleString()} VND`,
    },
    {
        title: 'Blocked',
        dataIndex: 'isBlocked',
    },
]


const ListSeller = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllSeller());
    }, [dispatch]);
    const listState = useSelector((state) => state.seller.sellers.data);
    const data1 = [];
    for (let i = 0; i < listState.length; i++) {
        data1.push({
            key: i + 1,
            username: listState[i].username,
            full_name: listState[i].full_name,
            balance_wallet: listState[i].balance_wallet,
            mobile: listState[i].mobile,
            isBlocked: `${listState[i].isBlocked}`,
        });
    }

    const handleRowClick = (record, rowIndex) => {
        navigate(`${listState[rowIndex]._id}`);
    };
    return (
        <div>
            <h3>Danh sách chủ sân</h3>
            <Table
                dataSource={data1}
                className='renter-card'
                columns={columns}
                pagination={{ pageSize: 6 }}
                loading={listState.length === 0}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: () => handleRowClick(record, rowIndex),
                    }
                }}
            />
        </div>
    )
}

export default ListSeller;