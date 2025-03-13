import React, { useEffect, useState } from "react";
import { baseURL } from "../utils/baseURL";
import { config } from "../utils/axiosconfig";
import { useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from 'dompurify';

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

    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file first');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post(`${baseURL}upload/image/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response);
            if (response.status === 200) {
                window.location.reload();
                alert("Tải lên hình ảnh thành công");
            } else {
                alert("Tải lên hình ảnh thất bại do không đúng định dạng");
            }
            setImageUrl(response.data.url); // URL of the uploaded image
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const sanitizeHTML = (html) => {
        // Thư viện như DOMPurify có thể giúp làm sạch nội dung
        return DOMPurify.sanitize(html);
    };

    return (
        <>
            <h1>Thông tin chi tiết về sân</h1>
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
                <h3>Mô tả sân:</h3>
                <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(field?.describle) }} />
            </div>
            <hr />
            <div>
                <h1>Hình ảnh về sân</h1>
                <div className="d-flex flex-grow gap-10">
                    {images.map((item, index) => (
                        <div className="me-2">
                            <img src={item} alt="hinh anh" className="list-images" />
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div>
                <h4>Thêm hình ảnh về sân</h4>
                <input type="file" onChange={handleFileChange} />
                <button className="button" onClick={handleUpload}>Upload</button>
                {imageUrl && (
                    <div>
                        <p>Image Uploaded:</p>
                        <img src={imageUrl} alt="Uploaded" style={{ width: '300px' }} />
                    </div>
                )}
            </div>
        </>

    )
}

export default SingleField;