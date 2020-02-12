import React from 'react';
import { Link } from 'react-router-dom';
import resetCSS from '../../stylesheets/reset.css';
import splashCSS from '../../stylesheets/splash.css';
import BusinessSearch from '../business/business_search';

class Splash extends React.Component {
    render (){
        return (
            <div>
                <div className='top'>
                    {/* <img className="splash-image" src='/static/images/pancake.jpg'/> */}
                    <div className='nav'>
                        <div className='nav-left'>
                            <span>Write a Review</span>
                            <span>Events</span>
                            <span>Talk</span>
                        </div>
                        <div className='nav-right'>
                            <span><Link className='login' to='/login'>Log In</Link></span>
                            <span><Link className='signup' to='/signup'>Sign Up</Link></span>
                        </div>
                    </div>
                    <a href="/" className='logo'>
                        <img className="icon-image" src='/static/images/whooplogo.png' />
                    </a>
                    <BusinessSearch />
                    <div className='top-category'>
                        <span><i className="fas fa-wrench"></i> Plumbers</span>
                        <span><i className="fas fa-utensils"></i> Restaurants</span>
                        <span><i className="fas fa-home"></i> Home Services</span>
                        <span><i className="fas fa-truck"></i> Delivery</span>
                    </div>
                </div>
                <div className='middle'>
                    <div className='category'>
                        <span>Browse Businesses by Category</span>
                        <div className='category-top'>
                            <img className='restaurants' src='/static/images/restaurants.png' />
                            <img className='shopping' src='/static/images/shopping.png' />
                            <img className='nightlife' src='/static/images/bar.png' />
                            <img className='active' src='/static/images/active.png' />
                        </div>
                        <div className='category-bottom'>
                            <img className='spa' src='/static/images/spa.png' />
                            <img className='auto' src='/static/images/automotive.png' />
                            <img className='home' src='/static/images/home.png' />
                            <img className='more' src='/static/images/more.png' />
                        </div>
                    </div>
                    <div className='apps'>
                        <span>Whoop Mobile Apps</span>
                        <div className='app-images'>
                            <a href="https://www.apple.com/ios/app-store/">
                                <img className='apple' src='/static/images/apple.png' />
                            </a>
                            <a href="https://play.google.com/store/apps?&utm_source=na_Med&utm_medium=hasem&utm_content=Jul0119&utm_campaign=Evergreen&pcampaignid=MKT-DR-na-us-1000189-Med-hasem-ap-Evergreen-Jul0119-Text_Search_SKWS-id_100744_%7cEXA%7cONSEM_kwid_43700045371544925&gclid=CjwKCAiAvonyBRB7EiwAadauqTgOMDkhILxIv-PZNO77ZhCVDQRXCxarwNysr14DuYQoI39f6hCW4xoCZSgQAvD_BwE&gclsrc=aw.ds">
                                <img className='android' src='/static/images/android.png' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <img className='building' src='/static/images/footer.png' />
                </div>
            </div>
        )
    }
};

export default Splash;