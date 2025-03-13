import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import "../css/FieldCard.css";

const FieldCard = (props) => {
    const { grid } = props;
    const { data } = props;
    console.log(grid);
    console.log(data);
    let location = useLocation();
    return (
        <>
            <Link
                to={`${location.pathname === '/'
                    ? `/all-field/${data._id}`
                    : location.pathname === `/all-field/${data._id}`
                        ? `/all-field/${data._id}` : `${data._id}`}`}
                className={`${location.pathname === "/all-field" ? `gr-${grid}` : "col-3"}`}>
                <div className="product-card position-relative">
                    {/* <div className="wishlist-icon position-absolute p-1">
                        <Link>
                            <img src="images/wish.svg" alt="wishlist" />
                        </Link>
                    </div> */}
                    <div className="product-images ">
                        <img src={data?.images[0]} className={`img-fluid size-image-main-${grid}`} alt="product" />
                    </div>
                    <div className="product-details mt-2">
                        <h5 className="product-title">
                            {data?.name_field}
                        </h5>
                        <h6 className="brand mt-1">{data?.address_field}</h6>

                        <ReactStars
                            count={5}
                            size={24}
                            value="3"
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            {data?.sub_describle}</p>
                        <p className="price">Giá theo giờ: {data?.price_per_hour}VND</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default FieldCard;