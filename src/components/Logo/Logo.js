import React from 'react';

import './Logo.css';

const logo = () => (
    <div className='Logo'>
        <img src={require('../../assets/logo.png').default} alt='logo' />
        <div>
            <p className='Logo-Name'>MRT-DEV</p>
            <p className='App-Name'>movie</p>
        </div>
    </div>
);

export default logo;