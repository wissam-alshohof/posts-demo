import React from 'react';

function PostsContainer(props) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            placeContent: 'center',
            placeItems: 'center'
        }}>
            {props.children}
        </div>
    );
}

export default PostsContainer;