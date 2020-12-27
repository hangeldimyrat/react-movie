import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {BsArrowRightShort} from 'react-icons/bs';

import './SlideShow.css';
import img from '../../assets/backdrop.jpg';
import Button from '../UI/Button/Button';

const slideShow = props => (

    <div className='slide-container'>
        <Slide>
            <div className='each-slide'
                style={{
                    width:'100%',
                    height:'100%',
                    backgroundImage: `url(${img})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'
                }}>
                <div className='Content'>
                    <div className='Opacity'>
                        <div className='Content-Info'>
                            <p className='Movie-Name'>Interstellar <span className='Release-Date'>(2009)</span></p>
                            <div className='Vote-Container'>
                                <p className='Star-Icon'>
                                    <i className='fas fa-star' />
                                </p>
                                <div>
                                    <p className='Vote-Average'>8.4<sup className='Vote-Count'>(333)</sup></p>
                                </div>
                            </div>   
                            <p className='Overview'>
                                Lorem ipsum dolor sit amet  simple slideshow component built with react that supports slide, fade and zoom effects. For full documentation click here
                            </p>
                            <ul>
                                <li className='Genres'>Action,</li>
                                <li className='Genres'>Adventure,</li>
                                <li className='Genres'>Fantasy,</li>
                                <li className='Genres'>Drama</li>
                            </ul>
                            <Button btnType='Go-Detail'>
                                Go Detail <BsArrowRightShort style={{fontSize:20}}/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='each-slide'
                style={{
                    width:'100%',
                    height:'100%',
                    backgroundImage: `url(${img})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'
                }}>
                <div className='Content'>
                    <div className='Opacity'>
                        <div className='Content-Info'>
                            <p className='Movie-Name'>Interstellar <span className='Release-Date'>(2009)</span></p>
                            <div className='Vote-Container'>
                                <p className='Star-Icon'>
                                    <i className='fas fa-star' />
                                </p>
                                <div>
                                    <p className='Vote-Average'>8.4<sup className='Vote-Count'>(333)</sup></p>
                                </div>
                            </div>   
                            <p className='Overview'>
                                Lorem ipsum dolor sit amet  simple slideshow component built with react that supports slide, fade and zoom effects. For full documentation click here
                            </p>
                            <ul>
                                <li className='Genres'>Action,</li>
                                <li className='Genres'>Adventure,</li>
                                <li className='Genres'>Fantasy,</li>
                                <li className='Genres'>Drama</li>
                            </ul>
                            <Button btnType='Go-Detail'>
                                Go Detail <BsArrowRightShort style={{fontSize:20}}/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            
        </Slide>
    </div>
);

export default slideShow;