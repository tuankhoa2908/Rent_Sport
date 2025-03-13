import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { useNavigate, useParams } from "react-router-dom";
import SingleComment from "../components/SingleComment";

import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { baseURL } from "../utils/baseURL";
import axios from "axios";
import { config } from "../utils/axiosconfig";

const SingleField = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { id } = useParams();
    console.log(id);
    const [field, setField] = useState({});
    const [listComment, setListComment] = useState([]);
    const [newComment, setNewComment] = useState({
        comment: "",
        field_comment: id,
        user_comment: user._id
    });
    useEffect(() => {
        window.scrollTo(0, 0);
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
        const fetchComment = async () => {
            try {
                const res = await fetch(`${baseURL}comment/list/${id}`)
                const data = await res.json();
                setListComment(data);
            } catch (error) {
                console.log("Error when fetch comment: ", error)
            }
        }
        fetchField();
        fetchComment();
        console.log(listComment);
    }, []);

    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeImage = (direction) => {
        if (field?.images.length > 0) {
            if (direction === "prev") {
                setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? field?.images.length - 1 : prevIndex - 1
                );
            } else if (direction === "next") {
                setCurrentIndex((prevIndex) =>
                    prevIndex === field?.images.length - 1 ? 0 : prevIndex + 1
                );
            }
        }
    };

    const handleComment = (value) => {
        setNewComment((prev) => ({
            ...prev,
            comment: value
        }));
    }
    const submitComment = async () => {
        console.log(newComment);
        const res = await axios.post(`${baseURL}comment/new`, newComment, config);
        console.log(res);
        if (res.status === 200) {
            window.location.reload();
            alert("Cảm ơn bạn đã gửi bài đánh giá.");
        } else {
            alert("Đã xảy ra lỗi khi gửi đánh giá.");
        }
    }
    return (
        <div>
            <Meta title={"Field Name"} />
            <BreadCrumb title="Field Name" />
            <Container class1='home-wrapper-1 pt-1'>
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="title-single-field">{field.name_field}</p>
                        <button className="button-web" onClick={() => navigate(`/rent-field/${field._id}`)}>
                            Thuê sân
                        </button>
                    </div>
                    <div className="carousel">
                        <button
                            className="button-web"
                            onClick={() => changeImage("prev")}
                        >
                            ←
                        </button>
                        {field?.images && field.images.length > 0 ? (
                            <img
                                src={field.images[currentIndex]}
                                alt={`${currentIndex + 1}`}
                                className="carousel-image"
                            />
                        ) : (
                            <p>Loading images...</p>
                        )}
                        <button
                            className="button-web" onClick={() => changeImage("next")}
                        >
                            →
                        </button>
                    </div>
                    <div className="mt-3">
                        <p className="address-field">Địa chỉ: {field.address_field} &nbsp;    </p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div dangerouslySetInnerHTML={{ __html: field?.address_google }}></div>
                    </div>
                </div>
            </Container>
            <Container class1="home-wrapper-2 py-5">
                <div>
                    <h3 className="title-single-field">Thông tin sân bóng</h3>
                    <div className="content-single-field">
                        <p>Giá theo giờ: {field.price_per_hour} VND</p>
                        <p>Giá theo giờ (cuối tuần): {field?.price_per_hour_weekend} VND </p>
                        <h3>Thông tin chi tiết:</h3>
                        <div dangerouslySetInnerHTML={{ __html: field?.describle }}></div>

                    </div>
                </div>
            </Container>
            <Container class1="home-wrapper-1 py-5">

                <div>
                    <h3 className="title-single-field">Đánh giá từ người dùng</h3>
                    {listComment.map((comment) => (
                        <SingleComment
                            key={comment.user_comment._id}
                            author={comment.user_comment.full_name}
                            text={comment.comment}
                            timestamp={comment.updatedAt}
                        />
                    ))}
                </div>
                <hr />
                <div>
                    <h3 className="title-single-field">Viết đánh giá cuả bạn</h3>
                    <ReactQuill
                        theme="snow"
                        placeholder="Viết đánh giác của bạn tại đây..."
                        value={newComment.comment}
                        onChange={handleComment}
                    />
                    <button className="button-web" onClick={submitComment}>Gửi đánh giá</button>
                </div>

            </Container>
        </div>
    )
}

export default SingleField;