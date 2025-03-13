import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { config } from "../utils/axiosconfig";
import { baseURL } from "../utils/baseURL";
import OrderCard from "../components/OrderCard";

const HistoryOrder = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [orders, setOrders] = React.useState([]);
    useEffect(() => {
        const getHistoryOrder = async () => {
            const res = await fetch(`${baseURL}order/get-history-user/${user._id}`, config);
            const data = await res.json();
            setOrders(data);
        }
        getHistoryOrder();
    }, [])
    return (
        <div>
            <Meta title={"History Order"} />
            <BreadCrumb title="History Order" />
            <Container class1="home-wrapper-2 py-5">
                <h1>Lịch sử thuê sân của tôi</h1>
                <br />
                {
                    orders.length > 0 && orders.map((order, index) => {
                        return (
                            <div>
                                <OrderCard order={order} />
                            </div>
                        )
                    })
                }
            </Container>
        </div>
    )
}

export default HistoryOrder;