import React, { Component } from 'react';
import HomeMovieList from './HomeMovieList';
import HomeHeader from './HomeHeader'

class Home extends Component {

    render(props) {
        return (        
            <div className="container" >
                <HomeHeader title={"React Movies"}/>
                <HomeMovieList/>
            </div>
        );
    }
}

export default Home;