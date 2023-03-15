import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:[],
    start:0,
    limit:5,
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
        },
        setNav: (state, action) => {
            state.start = +action.payload['start'];
            state.limit = +action.payload['limit'];
        }
    }
});

export const { getPosts, addPost, updatePost, deletePost, setPending, setError, resetPosts, setNav} = postsSlice.actions;

export const postsReducer = postsSlice.reducer;