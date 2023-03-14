
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './components/Post';
import PostsContainer from './components/PostsContainer';
import { getPostsByPage } from './state/actions/postsActions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsByPage({ start: 0, limit: 10 }))
  }, [])
  const posts = useSelector(state => state.postsState.posts);


  return (
    <PostsContainer>
      {posts.length &&
        posts.map(post => {
          return <Post title={post.title} body={post.body} key={post.id} />
        })}
    </PostsContainer>
  );
}

export default App;
