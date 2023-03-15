import React from 'react';

import './../assets/home.css';

function Home(props) {
    return (
        <div className='home'>
            {props.text ?? " Welcome to the Posts app"}
        </div>
    );
}

export default Home;