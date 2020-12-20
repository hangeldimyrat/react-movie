import React, {Component} from 'react';
import {FaGithub} from 'react-icons/fa';

import Logo from '../../components/Logo/Logo';
import './Header.css';
import Navigation from '../../components/Navigation/Navigation';
import Link from '../../components/UI/Link/Link';

class Header extends Component {
    render () {
        return (
            <div className='Header'>
                <Logo />  
                <Navigation />  
                <Link 
                title='Github Repo'
                size={23}
                color='whitesmoke'
                url='https://github.com/hangeldimyrat/react-movie'><FaGithub /></Link>
            </div>
        );
    }
}

export default Header;