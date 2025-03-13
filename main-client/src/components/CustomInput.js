import React from "react";

const CustomInput = (props) => {
    const { type, name, placeholder, classname, value, onChange } = props;
    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`form-control ${classname} `}>
            </input>
        </div>
    )
}

export default CustomInput;