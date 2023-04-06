import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id,title,body}=post;
    return (
        <div className='post'>
            <h5>ID:{id}</h5>
            <h4>{title}</h4>
            <Link to={`/post/:${id}`}>Show details</Link>
            <button>Show post details</button>
        </div>
    );
};

export default Post;