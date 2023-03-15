import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../assets/navigator.css";
import { getPostAfterNavSizeChange, getPostsByPage } from '../state/actions/postsActions';

function Navigator(props) {
    const start = useSelector(state => state['postsState']['start']);
    const limit = useSelector(state => state['postsState']['limit']);
    const posts = useSelector(state => state['postsState']['posts']);
    const dispatch = useDispatch();
    const getPostsByPageSize = (dir) => {

        if(dir === '+') {
            dispatch(getPostsByPage({start:start+limit,limit:limit}));
        } else {
            dispatch(getPostsByPage({start:start-limit,limit:limit}))
        }     
    }
    const setNavigation = (pageSize) => {
        dispatch(getPostAfterNavSizeChange(pageSize));
    }
    return (
        <div className='navigator'>
            <div className="items">
                <span className="material-symbols-outlined" style={start === 0? {visibility:'hidden'} : {cursor:'pointer'}} onClick={() =>start === 0? null : getPostsByPageSize('-')}>navigate_before</span>
                <input type="number" min={0} value={limit} onChange={(e) => setNavigation(e.target.value)}/>
                <span className="material-symbols-outlined" style={posts?.length === 0? {visibility:'hidden'} : {cursor:'pointer'}} onClick={() =>posts?.length === 0 ? null: getPostsByPageSize('+')}>navigate_next</span>
            </div>
        </div>
    );
}

export default Navigator;