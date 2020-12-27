import React, {Component} from 'react';

import './Home.css';
import SlideShow from '../../components/SlideShow/SlideShow';

class Home extends Component {
    render () {
        return (
            <div className='Home'>
                <div className='Most-Popular'>
                    <SlideShow />
                </div>
                <div>
                    MovieList
                </div>
            </div>
        );
    }
}

export default Home;