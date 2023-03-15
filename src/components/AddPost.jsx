import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../assets/posts.css'
import { addPostBy } from '../state/actions/postsActions';
import { ObjectUtils } from '../utils/objectUtils';

const showToast = () => {}
function AddPost(props) {
    const [formValue,setFormValue] = useState({
        userId:1,
        title:'',
        body:''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const setFormValueHandle = (key,value) => {
        setFormValue((V) => ({...V,[key]:value.target.value}));
    }
  
    const addPost = (e) => {
        e.preventDefault();
        if(ObjectUtils.isValid(formValue)) {
            dispatch(addPostBy(formValue))
            navigate('/posts');
        } else showToast('Please Fill all the required fields')
    }
    return (
        <form onSubmit={addPost}>
            <div className='card' style={{ width: '100%' }}>
                <label htmlFor="title" className='label-title'>Title:</label>
                <input id="title" type="text" className='form-input' name="title" value={formValue['title']} onChange={setFormValueHandle.bind(this,'title')} />

                <label htmlFor="body" className='label-title'>Body:</label>
                <textarea id="body" name="body" className='form-input' value={formValue['body']} onChange={setFormValueHandle.bind(this,'body')} ></textarea>

                <button type="submit" 
                disabled={!ObjectUtils.isValid(formValue)} 
                style={!ObjectUtils.isValid(formValue) ?{'cursor':'not-allowed'}:{cursor:'pointer'}}
                >Submit</button>
            </div>
        </form>
    );
}

export default AddPost;