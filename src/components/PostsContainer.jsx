import React from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';
import Navigator from './Navigator';

import Post from "./Post";
import Spinner from './Spinner';

function PostsContainer(props) {
    
    const posts = useSelector(state => state['postsState']['posts']);
    const isLoading = useSelector(state => state['postsState']['pending'])

    return (
    <>
        <Navigator />
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            placeContent: 'center',
            placeItems: 'center'
        }}>
            {
            isLoading ? 
            <Spinner /> :
            posts?.length ?
            posts.map(post => {
                return <Post title={post.title} body={post.body} key={post.id} />
            }):
            <Home text="There are no posts to show!" />
        }
        </div>
    </>
    );
}

export default PostsContainer;