import React from 'react';
import { useEffect } from 'react';
import { baseURL } from '../utils/baseURL';
import { config } from '../utils/axiosconfig';
import { useState } from 'react';

const ListOrder = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [listOrder, setListOrder] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
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
    useEffect(() => {
        const getListOrder = async () => {
            const res = await fetch(`${baseURL}order/get-order-seller/${user._id}`, config);
            const data = await res.json();
            console.log(data);
            setListOrder(data);
        }
        getListOrder();
        console.log(listOrder);
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage; // Vị trí cuối của trang
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Vị trí đầu của trang
    const currentItems = listOrder.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(listOrder.length / itemsPerPage); // Tổng số trang
    const paginationButtons = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div>
            <h1>Danh sách đơn thuê sân </h1>
            <div>
                {
                    listOrder.map((item, index) => {
                        return (
                            <div className='list-order-card mt-3'>
                                <p>Sân thuê: {item.id_field.name_field}</p>
                                <p>Người thuê: {item.id_renter.username}</p>
                                <p>Thời gian thuê: {formatTime(item.start_time)} - {formatTime(item.end_time)} &nbsp; {formatDay(item.day_rent)}</p>
                                <p>Tiền sân: {item.after_discount} VND</p>
                                <p>Tiền cọc: {item.deposit} VND</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="pagination mt-4">
                {paginationButtons.map((page) => (
                    <button
                        key={page}
                        className={`pagination-button ${currentPage === page ? 'active' : ''}`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ListOrder;