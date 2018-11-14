import React, { Component } from 'react';
import HomeSearch from './HomeSearch';

class HomeHeader extends Component {

    render(props) {
        return (
            <div className="navbar navbar-default ">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="\">React Movies</a>
                </div>
                <HomeSearch/>
            </div>
        </div>
        );
    }
}

export default HomeHeader;