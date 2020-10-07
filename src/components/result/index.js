import React from 'react';
import './style.css';

export default function Result({type}) {

    let image = type == 'loading' ? 
    'https://static.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif' 
    : 'https://sterngoff.com/wp-content/uploads/No-Results.svg';

    return <div  className='result'>
    <img src={image} alt='image' />
    <div className='text' data-testid='app-status' >
        { type === 'loading' ? 'Loading...' : 'No Related Results'}
    </div>
        </div>
}