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