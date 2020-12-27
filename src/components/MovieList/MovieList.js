import React from 'react';

import './MovieList.css';
import Image from '../UI/Image/Image';

const movieList = props => (
    <div className='Container'>
        <p className='Title'>Popular Movies</p>
        <div className='List-Container'>
            <div className='Movie-Container'>
                <Image width={175}
                       height={260}
                       src={require('../../assets/poster.jpg').default}
                       alt='poster'
                       className='Poster-Image'
                 />
                 <div className='Movie-Vote-Container'>
                     <p className='Movie-Star-Icon'>
                         <i className='fas fa-star' />
                     </p>
                     <div>
                         <p className='Movie-Vote-Average'>8.4</p>
                     </div>
                 </div>
                 <p className='Movie-Title'>Interstellar</p>
            </div>
        </div>
    </div>
);

export default movieList;