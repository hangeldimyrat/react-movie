import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './SlideShow.css';
import img from '../../assets/backdrop.jpg';

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
                    <div className='Movie-Name'>Interstellar</div>
                </div>
            </div>
        </Slide>
    </div>
);

export default slideShow;