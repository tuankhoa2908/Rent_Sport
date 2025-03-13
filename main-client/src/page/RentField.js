import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../utils/baseURL";
import { config } from "../utils/axiosconfig";
import axios from "axios";

import "../css/TimelineRentField.css"
import "../css/RentField.css"

import Notification from "../components/NotificationBox";

const formatTime = (time) => {
    const date = new Date(time);
    return new Intl.DateTimeFormat('vi-VN', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' }).format(date);
};

const columns = [
    {
        title: 'Giờ bắt đầu',
        dataIndex: 'start_time',
        render: (time) => formatTime(time)
    },
    {
        title: 'Giờ kết thúc',
        dataIndex: 'end_time',
        render: (time) => formatTime(time)
    }
]

const RentField = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { id } = useParams();
    const [field, setField] = useState({});
    const [notification, setNotification] = useState({
        message: '',
        type: ''
    });
    const showNotification = (message, type) => {
        setNotification({ message, type });

        setTimeout(() => {
            setNotification({ message: '', type: '' });
        }, 3000);
    };
    useEffect(() => {
        const fetchField = async () => {
            try {
                const res = await fetch(`${baseURL}field/all-field/${id}`);
                if (!res.ok) throw new Error("Failed to fetch field data");
                const data = await res.json();
                setField(data);
            } catch (error) {
                console.error("Error fetching field data:", error);
            }
        }
        fetchField();
    }, []);

    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedHourStart, setSelectedHourStart] = useState("");
    const [selectedHourEnd, setSelectedHourEnd] = useState("");
    const [status, setStatus] = useState(false);
    const [checked, setChecked] = useState(false);
    const [list_time, setList_time] = useState([]);
    const [order, setOrder] = useState({});

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        setStatus(false);
    };
    const handleTimeStartChange = (event) => {
        const time = event.target.value;
        // Chỉ lấy giờ (HH)
        const hour = time.split(":")[0];
        setSelectedHourStart(hour + ":00");
        setStatus(false);
    };

    const handleTimeEndChange = (event) => {
        const time = event.target.value;
        // Chỉ lấy giờ (HH)
        const hour = time.split(":")[0];
        setSelectedHourEnd(hour + ":00");
        setStatus(false);
    };

    const checkStatus = async (e) => {
        e.preventDefault();
        setChecked(true);
        const data = {};
        data.id_renter = user._id;
        data.id_field = id;
        data.day_rent = selectedDate;
        data.start_time = selectedHourStart;
        data.end_time = selectedHourEnd;
        const res = await axios.post(`${baseURL}order/check-status`, data, config);
        console.log(res);
        setOrder(res.data);
        setList_time(res.data.list_time);
        if (res.data.status === true) {
            setStatus(true);
            showNotification(res.data.message, 'success')
        } else {
            setStatus(false);
            showNotification(res.data.message, 'error')
        }
    };

    const handleSubmit = () => {
        if (status === true) {
            localStorage.setItem('current-order', JSON.stringify(order));
            navigate("/order");
        }
        else {
            alert("Vui lòng kiểm tra lại trạng thái đặt sân hoặc khung thời gian đã bị trùng với lịch đặt trước");
        }
    }

    const convertToPercentage = (time) => {
        const [hour, minute] = time.split(':').map(Number);
        return ((hour * 60 + minute) / (24 * 60)) * 100; // 100% = 24 giờ
    };

    const mapToBlocks = (listTime) => {
        return listTime.map((item) => {
            const startTime = new Date(item.start_time);
            const endTime = new Date(item.end_time);
            const start = `${startTime.getUTCHours()}:${startTime.getUTCMinutes().toString().padStart(2, '0')}`;
            const end = `${endTime.getUTCHours()}:${endTime.getUTCMinutes().toString().padStart(2, '0')}`;
            const left = convertToPercentage(start);
            const width = convertToPercentage(end) - left;

            return {
                id: item._id,
                left,
                width,
                label: `${start} - ${end}`
            };
        });
    };

    return (
        <div>
            <Meta title={"Rent Field"} />
            <BreadCrumb title="Rent Field" />
            <Container class1="home-wrapper-2">
                <p className="title-single-field">Biểu mẫu thuê sân</p>
                <div className="form-rent-field">
                    <div className='wrap-content-field-rent'>
                        <p className="title-rent-0">Thông tin sân thuê</p>
                        <p className="title-rent">Tên sân: {field.name_field}</p>
                        <p className="title-rent">Địa điểm: {field.address_field}</p>
                        <p className="title-rent">Giá thuê theo giờ : {field.price_per_hour} VND</p>
                        <p className="title-rent">Giá thuê theo giờ (cuối tuần) : {field.price_per_hour_weekend} VND</p>
                    </div>
                    <form onSubmit={checkStatus} className="m-3">
                        <label htmlFor="datePicker" className="title-rent fw-bold">Ngày muốn thuê:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                        <input
                            type="date"
                            id="datePicker"
                            value={selectedDate}
                            className="input-rent-page"
                            onChange={handleDateChange}
                        />
                        <br />
                        <br />
                        <label htmlFor="time" className="title-rent fw-bold">Chọn giờ bắt đầu: &nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input
                            type="time"
                            className="input-rent-page"
                            id="time"
                            value={selectedHourStart ? `${selectedHourStart}:00` : ""}
                            onChange={handleTimeStartChange}
                        />
                        <br />
                        <br />
                        <label htmlFor="time" className="title-rent fw-bold">Chọn giờ kết thúc: &nbsp;&nbsp;&nbsp;</label>
                        <input
                            type="time"
                            className="input-rent-page"
                            id="time"
                            value={selectedHourEnd ? `${selectedHourEnd}:00` : ""}
                            onChange={handleTimeEndChange}
                        />
                        <br />
                        <br />
                        <button type="submit" className="button-web">Kiểm tra trạng thái</button>
                    </form>
                    <Notification
                        message={notification.message}
                        type={notification.type}
                        onClose={() => setNotification({ message: '', type: '' })}
                    />
                    {
                        checked && (
                            <div>
                                <h3>Danh sách các khung giờ đã được đặt trước trong ngày {selectedDate}</h3>
                                <div className="timeline-container mt-5">
                                    <div className="timeline">
                                        {mapToBlocks(list_time).map((block) => (
                                            <div
                                                key={block.id}
                                                className="time-block"
                                                style={{
                                                    left: `${block.left}%`,
                                                    width: `${block.width}%`,
                                                }}
                                            >
                                                {block.label}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="time-labels">
                                        {Array.from({ length: 24 }, (_, i) => (
                                            <span key={i}>{i}:00</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="mt-3" style={{ color: "blue" }}>Bạn đã chọn thuê sân trong khung thời gian {selectedHourStart} - {selectedHourEnd} vào ngày {selectedDate}</p>

                            </div>
                        )
                    }
                    <button className="button-web mt-3" onClick={handleSubmit}>Xác nhận thời gian</button>
                </div>
            </Container>
        </div>
    )
}

export default RentField;