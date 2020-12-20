import React from 'react';

import './Input.css';

const input = props => (
    <div>
        <input 
            className={['Input' , props.inputType].join(' ')}
            value={props.value}
            onChange={props.changed}
            placeholder={props.placeholder} />
    </div>
);

export default input;
