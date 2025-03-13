import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { config } from "../utils/axiosconfig";
import { baseURL } from "../utils/baseURL";

const CreateField = () => {
    const seller = JSON.parse(localStorage.getItem('user'));
    console.log(seller._id);

    const [newField, setNewField] = useState({
        owner_field: "",
        name_field: "",
        type_field: "",
        district: "",
        address_field: "",
        address_google: "",
        price_per_hour: 0,
        price_per_hour_weekend: 0,
        describle: "",
        sub_describle: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewField((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleDescrible = (value) => {
        setNewField((prev) => ({
            ...prev,
            describle: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //newField.describle = newField.describle.replace(/<[^>]*>/g, "").trim();
        const fieldData = {
            ...newField,
            owner_field: seller._id,
        };
        console.log(newField);
        try {
            const res = await axios.post(`${baseURL}field/create-field`, fieldData, config);
            console.log(res);
            if (res.status === 200) {
                window.location.reload();
                alert("Thêm sân mới thành công, vui lòng liên hệ với admin để được xác nhận")
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <h1>Đăng kí sân mới</h1>
            <p>Vui lòng điền đầy đủ thông tin vào biểu mẫu dưới đây để được xem xét</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter name field..."
                        name="name_field"
                        val={newField.name_field}
                        onChng={handleChange} />
                    <select
                        name="type_field"
                        className="type_field"
                        value={newField.type_field}
                        onChange={handleChange}
                    >
                        <option value="" disabled>
                            Lựa chọn loại sân...
                        </option>
                        <option value="football">Football</option>
                        <option value="tennis">Tennis</option>
                        <option value="badminton">Badminton</option>
                        <option value="ping-pong">Bóng bàn</option>
                        <option value="pickle-ball">Pickle Ball</option>
                    </select>
                    <select
                        name="district"
                        className="type_field"
                        value={newField.district}
                        onChange={handleChange}
                    >
                        <option value="" disabled>
                            Chọn quận...
                        </option>
                        <option value="Cau Giay">Cầu Giấy</option>
                        <option value="Hoang Mai">Hoàng Mai</option>
                        <option value="Dong Da">Đống Đa</option>
                        <option value="Tay Ho">Tây Hồ</option>
                        <option value="Hai Ba Trung">Hai Bà Trưng</option>
                        <option value="Ba Dinh">Ba Đình</option>
                        <option value="Thanh Xuan">Thanh Xuân</option>
                    </select>
                    <CustomInput
                        type="text"
                        label="Nhập địa chỉ sân..."
                        name="address_field"
                        val={newField.address_field}
                        onChng={handleChange} />
                    <CustomInput
                        type="text"
                        label="Địa chỉ trên google..."
                        name="address_google"
                        val={newField.address_google}
                        onChng={handleChange} />
                    <CustomInput
                        type="number"
                        label="Giá theo giờ ngày thường..."
                        name="price_per_hour"
                        val={newField.price_per_hour}
                        onChng={handleChange} />
                    <CustomInput
                        type="number"
                        label="Giá theo giờ cuối tuần..."
                        name="price_per_hour_weekend"
                        val={newField.price_per_hour_weekend}
                        onChng={handleChange} />
                    <CustomInput
                        type="text"
                        label="Nhập mô tả ngắn (1-2 dòng)..."
                        name="sub_describle"
                        val={newField.sub_describle}
                        onChng={handleChange} />
                    <ReactQuill
                        theme="snow"
                        placeholder="Nhập mô tả sân..."
                        value={newField.describle}
                        onChange={handleDescrible} />
                    <div className="d-flex justify-content-end mt-3">
                        <button className="button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateField;