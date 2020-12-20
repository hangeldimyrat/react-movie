import React from 'react';

import './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigation = () => (

    <div className='Navigation'>
        <NavigationItem title='Movies'>
            <a href='#'>Link</a>
            <a href='#'>Link</a>
            <a href='#'>Link</a>
        </NavigationItem>

        <NavigationItem title='TV shows'>
            <a href='#'>Link</a>
            <a href='#'>Link</a>
            <a href='#'>Link</a>
        </NavigationItem>

        <NavigationItem title='Genres'>
            <a href='#'>Link</a>
            <a href='#'>Link</a>
            <a href='#'>Link</a>
        </NavigationItem>
    </div>
);

export default navigation;
