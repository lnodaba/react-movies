import React, { Component } from 'react';

class Search extends Component {

    render(props) {
        return (
            <div className="navbar-form navbar-right">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" 
                 value={this.props.searchTerm}
                 onChange={this.props.onChange}
                 onKeyPress={this.props.onEnter}
                />
            </div>
            <button type="submit" className="btn btn-default" onClick={this.props.onClick}>Search</button>
            </div>
        );
    }
}

export default Search;