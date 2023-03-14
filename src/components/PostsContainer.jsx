import React from 'react';
import { useSelector } from 'react-redux';

import Post from "./Post";

function PostsContainer(props) {
    
    const posts = useSelector(state => state.postsState.posts);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            placeContent: 'center',
            placeItems: 'center'
        }}>
            {posts.length &&
                posts.map(post => {
                    return <Post title={post.title} body={post.body} key={post.id} />
                })}
        </div>
    );
}

export default PostsContainer;