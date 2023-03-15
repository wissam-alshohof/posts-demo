
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PostsContainer from './components/PostsContainer';
import { getPostsByPage } from './state/actions/postsActions';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import AddPost from './components/AddPost';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsByPage())
  }, [dispatch])


  return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<PostsContainer />} />
      <Route path="/posts/:id" element={<Post edit={true} />} />
      <Route path="/posts/new-post" element={<AddPost  />} />
    </Routes>
  </>
  );
}

export default App;
