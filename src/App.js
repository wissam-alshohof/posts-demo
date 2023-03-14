
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PostsContainer from './components/PostsContainer';
import { getPostsByPage } from './state/actions/postsActions';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Spinner from './components/Spinner';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsByPage({ start: 0, limit: 10 }))
  }, [dispatch])


  return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Spinner />} />
      <Route path="/posts" element={<PostsContainer />} />
    </Routes>
  </>
  );
}

export default App;
