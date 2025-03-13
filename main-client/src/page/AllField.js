import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
// import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import Container from "../components/Container";
import FieldCard from "../components/FieldCard";

import { baseURL } from "../utils/baseURL";
// import { config } from "../utils/axiosconfig";
import axios from "axios";

const optionSport = [
    { key: "football", label: "Bóng đá" },
    { key: "badminton", label: "Cầu lông" },
    { key: "ping-pong", label: "Bóng bàn" },
    { key: "tennis", label: "Tennis" },
    { key: "pickle-ball", label: "Pickle Ball" },
];
const optionDistrict = [
    { key: "Hoang Mai", label: "Quận Hoàng Mai" },
    { key: "Hai Ba Trung", label: "Quận Hai Bà Trưng" },
    { key: "Tay Ho", label: "Quận Tây Hồ" },
    { key: "Dong Da", label: "Quận Đống Đa" },
    { key: "Cau Giay", label: "Quận Cầu Giấy" },
    { key: "Thanh Xuan", label: "Quận Thanh Xuân" },
    { key: "Ba Dinh", label: "Quận Ba Đình" },
]

const AllField = () => {

    const [listField, setListField] = useState([]);
    const [option, setOption] = useState({
        type: "",
        district: ""
    });
    const [selectedFilter, setSelectedFilter] = useState({
        type: "",
        district: "",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        const getAllField = async () => {
            const res = await fetch(`${baseURL}field/all-field`);
            const data = await res.json();
            console.log(data);
            setListField(data);
            console.log(listField);
        }
        getAllField();
    }, []);

    const handleFilter = async (type) => {
        const updatedOption = {
            ...option,
            type: type,
        };
        // Update the state
        setOption(updatedOption);
        setSelectedFilter({ ...selectedFilter, type });
        try {
            const res = await axios.post(`${baseURL}field/filter`, updatedOption);
            console.log(res);
            setListField(res.data);
        } catch (error) {
            console.error("Error fetching filtered fields:", error);
        }
    }

    const handleFilter2 = async (district) => {
        const updatedOption = {
            ...option,
            district: district,
        };
        // Update the state
        setOption(updatedOption);
        setSelectedFilter({ ...selectedFilter, district });
        try {
            const res = await axios.post(`${baseURL}field/filter`, updatedOption);
            console.log(res);
            setListField(res.data);
        } catch (error) {
            console.error("Error fetching filtered fields:", error);
        }
    }

    const [grid, setGrid] = useState(4);
    return (
        <>
            <Meta title={"Danh sách sân"} />
            <BreadCrumb title="Danh sách sân" />
            <Container class1="store-wrapper home-wrapper-1 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Lọc theo môn thể thao</h3>
                            <div>
                                <ul className="ps-0">
                                    {optionSport.map((sport) => (
                                        <li
                                            key={sport.key}
                                            onClick={() => handleFilter(sport.key)}
                                            className={selectedFilter.type === sport.key ? "selected-option" : ""}
                                            style={{
                                                cursor: "pointer",
                                                fontWeight: selectedFilter.type === sport.key ? "bold" : "normal",
                                                color: selectedFilter.type === sport.key ? "white" : "black",
                                            }}
                                        >
                                            {sport.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Lọc theo địa chỉ quận</h3>
                            <div>
                                <ul className="ps-0">
                                    {optionDistrict.map((district) => (
                                        <li
                                            key={district.key}
                                            onClick={() => handleFilter2(district.key)}
                                            className={selectedFilter.district === district.key ? "selected-option" : ""}
                                            style={{
                                                cursor: "pointer",
                                                fontWeight: selectedFilter.district === district.key ? "bold" : "normal",
                                                color: selectedFilter.district === district.key ? "white" : "black",
                                            }}
                                        >
                                            {district.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-3">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{ "width": "100px" }}>Xếp theo:</p>
                                    <select name="" defaultValue={"DEFAULT"} className="form-control form-select" id="">
                                        <option disabled value="DEFAULT"></option>
                                        <option value="rating">Đánh giá</option>
                                        <option value="price-asc">Giá từ cao đến thấp</option>
                                        <option value="price-desc">Giá từ thấp đến cao</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center gap-10">
                                <p className="total-products mb-0">Số lượng sân: {listField.length} sân</p>
                                <div className="grid d-flex gap-10 align-items-center">
                                    <img onClick={() => setGrid(3)} src="images/gr4.svg" className="d-block img-fluid" alt="grid"></img>
                                    <img onClick={() => setGrid(4)} src="images/gr3.svg" className="d-block img-fluid" alt="grid"></img>
                                    <img onClick={() => setGrid(6)} src="images/gr2.svg" className="d-block img-fluid" alt="grid"></img>
                                    <img onClick={() => setGrid(12)} src="images/gr.svg" className="d-block img-fluid" alt="grid"></img>
                                </div>
                            </div>
                            <div className="product-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    {listField.map((item, index) => (
                                        <FieldCard grid={grid} data={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AllField;