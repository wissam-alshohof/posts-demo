import axios from "axios";
import { APIS } from "../apis";
import { addPost, getPosts, updatePost, deletePost, setError, setPending } from "../reducers/postsSlice";

export const getPostsByPage = ({ start, limit }) =>  (dispatch) => {

    dispatch(setPending(true));
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