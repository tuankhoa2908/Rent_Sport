import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../utils/baseURL';
import { useNavigate } from "react-router-dom"
const Tennis = () => {
    const navigate = useNavigate()
    const [listField, setListField] = useState([]);
    useEffect(() => {
        const getList = async () => {
            try {
                const res = await axios.post(`${baseURL}field/filter`, {
                    type: "tennis",
                });
                console.log(res.data);
                setListField(res.data);
            } catch (error) {
                console.error("Error fetching filtered fields:", error);
            }
        }
        getList();
    }, []);

    const handleClick = (id) => {
        navigate(`/admin/field/${id}`);
    }
    return (
        <div>
            <h3>Danh sách sân tennis</h3>
            {
                (listField.length > 0) ? (
                    <div className='mt-3'>
                        {
                            listField.map((item, index) => {
                                return (
                                    <div className='list-field-card' onClick={() => handleClick(item._id)}>
                                        <h3 key={index}>{item.name_field}</h3>
                                        <p>Địa chỉ: {item.address_field}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    <h3 className='mt-3'>Không có sân tennis nào</h3>
                )
            }
        </div>
    )
}

export default Tennis;