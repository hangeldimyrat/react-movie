import React from 'react';

import './Image.css';

const image = props => (
    <img 
        src={props.src}
        alt={props.alt}
        className={props.className}
        style={{width.props.width,height:props.height}}
    />
);

export default image;