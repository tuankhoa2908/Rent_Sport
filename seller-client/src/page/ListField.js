import { useEffect } from "react";
import React from "react";
import { baseURL } from "../utils/baseURL";
import { config } from "../utils/axiosconfig";
import { useNavigate } from "react-router-dom";

const ListField = () => {
    const seller = JSON.parse(localStorage.getItem('user'));
    const [list, setList] = React.useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchList = async () => {
            const res = await fetch(`${baseURL}field/owner-field/${seller._id}`, config);
            const data = await res.json();
            console.log(data);
            setList(data);
        }
        fetchList();
    }, []);

    const handleClick = (id) => {
        console.log("Field ID:", id);
        navigate(`/admin/single-field/${id}`);
    }
    return (
        <div>
            <h1>Danh sách sân của tôi</h1>
            <div>
                {list.map((item, index) => (
                    <div key={index}
                        onClick={() => handleClick(item._id)}
                        className="list-field-card">
                        <h2>{item.name_field}</h2>
                        <p>Địa chỉ: {item.address_field}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListField;