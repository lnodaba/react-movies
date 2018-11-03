import React, { Component } from 'react';
import MovieList from './MovieList';
import Header from './Header'

class Home extends Component {

    render(props) {
        return (        
            <div className="container" >
                <Header title={"React Movies"}
                searchTerm={this.props.searchTerm}
                onChange={this.props.onChange}
                onClick={this.props.onClick}
                onEnter={this.props.onEnter}
                />
                <MovieList
                movies={this.props.movies} />
            </div>
        );
    }
}

export default Home;