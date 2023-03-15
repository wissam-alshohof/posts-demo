import axios from "axios";
import { APIS } from "../apis";
import { addPost, getPosts, updatePost, deletePost, setError, setPending, setNav } from "../reducers/postsSlice";

export const getPostsByPage = ({ start, limit } ={start:0,limit:5}) =>  (dispatch) => {

    dispatch(setPending(true));
    dispatch(setNav({start:start,limit:limit}));
   axios.get(`${APIS.getPosts}`, {
        params: {
            _start: start,
            _limit: limit
        }
    })
    .then(res => {

        dispatch(getPosts(res.data));
        dispatch(setPending(false));
        dispatch(setError(null));
    }).catch(err => {
        dispatch(getPosts([]));
        dispatch(setPending(false));
        dispatch(setError(err));
    })
}

export const getPostAfterNavSizeChange = (pageSize) => dispatch => {
    dispatch(getPostsByPage({start:0,limit:pageSize}));
}

export const updatePostContent = (post) => dispatch => {
    dispatch(setPending(true));
    axios.put(APIS.updatePost+post['id'],post).then(res => {
        dispatch(updatePost(post.id));
        dispatch(getPostsByPage());
        dispatch(setPending(false));
        dispatch(setError(null));
    }).catch(err => {
        dispatch(setPending(false));
        dispatch(setError(err));
    });
}

export const deletePostById = (id) => dispatch => {
    dispatch(setPending(true));
    axios.delete(APIS.deletePost+id).then(res => {
        dispatch(deletePost(id));
        dispatch(getPostsByPage());
        dispatch(setPending(false));
        dispatch(setError(null));
    }).catch(err => {
        dispatch(setPending(false));
        dispatch(setError(err));
    });
}

export const addPostBy = (post) => dispatch => {
    dispatch(setPending(true));
    axios.post(APIS.addPost,post).then(res => {
        dispatch(addPost(res['data']));
        dispatch(setPending(false));
        dispatch(setError(null));
    }).catch(err => {
        dispatch(setPending(false));
        dispatch(setError(err));
    });
}