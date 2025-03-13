import React from 'react';
// import { Link } from 'react-router-dom';

const SingleComment = (props) => {
    return (
        <div className='comment-card'>
            <h4 className='comment-author'>{props.author}</h4>
            <div className='comment-text' dangerouslySetInnerHTML={{ __html: props?.text }}></div>
            <span className='comment-timestamp'>{new Date(props.timestamp).toLocaleString()}</span>
        </div>
    )
}

export default SingleComment;