import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    render (){
        return (
            <div>
                <div className='top'>
                    <img className="splash-image" src='/static/images/pancake.png' />
                </div>
            </div>
        )
    }
};

export default Splash;