import React from 'react';

function Toast(props) {
    const destroy =() => {
    }
    return (
        <div className='toast'>
            <div className='exit'>
            <span className="material-symbols-outlined" onClick={destroy}>close</span>
            </div>
            {props.message}
        </div>
    );
}

export default Toast;