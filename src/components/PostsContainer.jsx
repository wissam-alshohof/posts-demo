import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import Navigator from './Navigator';

import Post from "./Post";
import Spinner from './Spinner';

function PostsContainer(props) {

    const posts = useSelector(state => state['postsState']['posts']);
    const isLoading = useSelector(state => state['postsState']['pending']);
    const navigate = useNavigate();

    const addPost = () => navigate('new-post')

    return (
        <>
            <Navigator />
            <button type='button' className='button' onClick={addPost} disabled={isLoading} style={isLoading?{cursor:'not-allowed',width: 'fit-content'}:{width: 'fit-content'}}>Add Post</button>
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
                                return <Post post={post} key={post.id} />
                            }) :
                            <Home text="There are no posts to show!" />
                }
            </div>
        </>
    );
}

export default PostsContainer;