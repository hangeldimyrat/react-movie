import React, {Component} from 'react';
import {FaGithub} from 'react-icons/fa';
import {IoIosSearch} from 'react-icons/io';

import Logo from '../../components/Logo/Logo';
import './Header.css';
import Navigation from '../../components/Navigation/Navigation';
import Link from '../../components/UI/Link/Link';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Header extends Component {
    render () {
        return (
            <div className='Header'>
                <div className='HeaderLeft'>
                    <Logo />  
                    <Navigation />
                    <div style={{display:'flex',alignItems:'center'}}>
                        <Input inputType='SearchInput' placeholder='Search...' />
                        <Button btnType='SearchButton'>
                            <IoIosSearch />
                        </Button>
                    </div>
                </div>
                <div className='HeaderRight'>
                    <Link 
                        title='Github Repo'
                        size={23}
                        color='whitesmoke'
                        url='https://github.com/hangeldimyrat/react-movie'><FaGithub />
                    </Link>

                    <Link 
                        title='tmdb'
                        url='https://www.themoviedb.org'>
                            <img height='20'
                                alt='tmdb'
                                src={require('../../assets/referenceLogo.png').default}/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;
