import React, {Component} from 'react';

import Logo from '../../components/Logo/Logo';
import './Header.css';

class Header extends Component {
    render () {
        return (
            <div className='Header'>
                <Logo />  Navigations  github-TMDB
            </div>
        );
    }
}

export default Header;