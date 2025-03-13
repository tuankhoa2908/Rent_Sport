import React from 'react';
import '../css/NotificationBox.css';

const Notification = ({ message, type, onClose }) => {
    if (!message) return null;
    console.log(message);
    return (
        <div className={`notification ${type}`}>
            <span>{message}</span>
            <button onClick={onClose} className="close-btn">✖</button>
        </div>
    );
};

export default Notification;