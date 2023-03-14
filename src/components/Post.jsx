import React from 'react';
import '../assets/posts.css';

const Post = (props) => {
    return (
        <div className='card'>
            <div className="title">{props.title}</div>
            <p className="body">{props.body}</p>
        </div>
    );
}

export default Post;