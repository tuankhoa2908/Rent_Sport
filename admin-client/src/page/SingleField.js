import React, { useEffect, useState } from "react";
import { baseURL } from "../utils/baseURL";
import { config } from "../utils/axiosconfig";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Descriptions } from "antd";


const SingleField = () => {
    const { id } = useParams();
    const [field, setField] = useState({});
    const [images, setImages] = useState([]);
    useEffect(() => {
        const getField = async () => {
            const res = await fetch(`${baseURL}field/all-field/${id}`, config);
            const data = await res.json();
            setField(data);
            setImages(data.images);
        };
        getField();
        console.log(images);
    }, [])

    return (
        <>
            <h1>Thông tin về sân</h1>
            <Descriptions bordered column={1}>
                <Descriptions.Item label="Tên sân">{field?.name_field}</Descriptions.Item>
                <Descriptions.Item label="Trạng thái">{field?.status}</Descriptions.Item>
                <Descriptions.Item label="Loại sân">{field?.type_field}</Descriptions.Item>
                <Descriptions.Item label="Địa chỉ">{field?.address_field}</Descriptions.Item>
                <Descriptions.Item label="Quận">{field?.district}</Descriptions.Item>
                <Descriptions.Item label="Địa chỉ Google">{field?.address_google}</Descriptions.Item>
                <Descriptions.Item label="Giá theo giờ ngày thường">{field?.price_per_hour} VND</Descriptions.Item>
                <Descriptions.Item label="Giá theo giờ cuối tuần">{field?.price_per_hour_weekend} VND</Descriptions.Item>
            </Descriptions>
            <div className="mt-3">
                <h3>Mô tả ngắn:</h3>
                <p>{field?.sub_describle}</p>
            </div>
            <div className="mt-3">
                <h3>Mô tả sân:</h3>
                <div dangerouslySetInnerHTML={{ __html: field?.describle }} />
            </div>
            <div>
                <h3>Hình ảnh về sân</h3>
                <div className="d-flex flex-grow gap-10">
                    {images.map((item, index) => (
                        <div className="me-2">
                            <img src={item} alt="hinh anh" className="list-images" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default SingleField;

