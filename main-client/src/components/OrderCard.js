import React from "react";

const OrderCard = (props) => {
    const { order } = props;
    console.log(order);
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
    return (
        <div className="order-card mt-3">
            <p>Sân thuê: {order.id_field.name_field}</p>
            <p>Thời gian thuê: {formatTime(order.start_time)} - {formatTime(order.end_time)} &nbsp; {formatDay(order.day_rent)}</p>
            <p>Giá thuê: {order.after_discount} VND</p>
            <p>Tiền đã cọc trước: {order.deposit} VND</p>
            <p>Trạng thái: {order.status}</p>
        </div>
    )
}

export default OrderCard;