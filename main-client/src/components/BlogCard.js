import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
        <div className='blog-card'>
            <div className='card-image'>
                <img src="https://i1-thethao.vnecdn.net/2024/12/20/vini11-1734682243-9516-1734682340.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=YG02qWE6s5wG54IwAWIFAw"
                    className='img-fluid w-100' alt="blog" />
            </div>
            <div className='blog-content'>
                <p className='date'>20/12/2024</p>
                <h5 className='title'>Vinicius - người hùng chung kết của Real   </h5>
                <p className='desc'>Dù gây nhiều tranh cãi, có một thực tế không thể phủ nhận là Vinocius có tỷ lệ ghi bàn và kiến tạo rất cao trong các trận chung kết cấp CLB.</p>
                <Link to="/single-blog/:id" className='button-web'>Đọc thêm</Link>
            </div>
        </div>
    )
}

export default BlogCard;