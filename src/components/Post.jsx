import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/posts.css';
import { deletePostById, updatePostContent } from '../state/actions/postsActions';

const Post = ({post,edit=false}) => {
    const {state} = useLocation();    
    const dispatch = useDispatch();
    const [titleText, bodyText] = [useRef(null),useRef(null)];
    //retrieve post data from routing when edit
    if(!post) {
        post = state;
    }
    const navigate = useNavigate()
    const editPost = () => {
        navigate(`/posts/${post.id}`,{state:post});
    }
    const deletePost = () => {
        dispatch(deletePostById(post.id))
    }
    const save = () => {
        dispatch(updatePostContent({
            ...post,
            title:titleText.current.innerText,
            body:bodyText.current.innerText,
        }))
        return navigate('/posts',{relative:false});
    }
    return (
        <div className={edit ? 'card card-edit' : 'card'} >
            <div className={edit ? 'title title-edit' : 'title'} contentEditable={edit} ref={titleText}>
                {post.title} 
                {!edit && (<div style={{display:'inline-flex',justifyContent:'space-between'}}><span className='material-symbols-outlined' 
                      style={{fontSize: 'smaller' ,cursor:'pointer',display:'inline-block' }}
                      onClick={editPost}>
                    edit
                        </span>

                        <span className='material-symbols-outlined' 
                      style={{fontSize: 'smaller' ,cursor:'pointer' ,display:'inline-block' }}
                      onClick={deletePost}>
                    delete
                        </span></div>)
                }
            </div>
            <p className={edit? "body body-edit":"body"} contentEditable={edit} ref={bodyText}>{post.body}</p>
            <div className={edit? "actions":"hidden"}>
                <button type='button' className='button' onClick={save} >Save</button>
            </div>
        </div>
    );
}

export default Post;