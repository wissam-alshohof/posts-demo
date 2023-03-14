import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:[],
    error: null,
    pending :false
};

export const postsSlice = createSlice({
    name:'posts',
    initialState:initialState,
    reducers: {
        getPosts: (state, action) => {
            state.posts = action.payload;
        },
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        updatePost: (state,action) => {
            state = state.posts.map(post => post.id === action.payload.id ? action.payload : post)
        },
        /**
         * Delete post by Id
         */
        deletePost: (state,action) => {
            state = state.posts.filter(post => post.id !== action.payload)
        },
        setPending: (state,action) => {
            state.pending = action.payload;
        },
        setError: (state,action) => {
            state.error = action.payload;
        },
        resetPosts: (state,action) => {
            state = initialState;
        }
    }
});

export const { getPosts, addPost, updatePost, deletePost, setPending, setError, resetPosts} = postsSlice.actions;

export const postsReducer = postsSlice.reducer;