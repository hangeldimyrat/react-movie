import React, {Component} from 'react';

import Logo from '../../components/Logo/Logo';
import './Header.css';
import Navigation from '../../components/Navigation/Navigation';

class Header extends Component {
    render () {
        return (
            <div className='Header'>
                <Logo />  
                <Navigation />  github-TMDB
            </div>
        );
    }
}

export default Header;