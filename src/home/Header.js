import React, { Component } from 'react';
import Search from './Search';

class Header extends Component {

    render(props) {
        return (
            <div className="navbar navbar-default ">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="\">React Movies</a>
                </div>
                <Search
                    searchTerm={this.props.searchTerm}
                    onChange={this.props.onChange}
                    onClick={this.props.onClick}
                    onEnter={this.props.onEnter}
                />
            </div>
        </div>
        );
    }
}

export default Header;