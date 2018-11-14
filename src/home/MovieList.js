import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
class MovieList extends Component {

  createInfo(value){
    return (<p>
              {value.first_air_date.length > 0 &&
                <span className="label label-info">Aired on {value.first_air_date}</span>
              }&nbsp;
              <span className="label label-success">{value.vote_average} points out of 10</span>&nbsp;
              <span className="label label-danger">{value.vote_count} votes</span>
            </p>
    );
  }

  createMovieCard(value){
    return (<div key={value.id} className="col-sm-6 col-md-4">
              <div className="thumbnail"  style={ {height:662 }} >
                <img src={"http://image.tmdb.org/t/p/w300_and_h450_bestv2/" + value.poster_path}  alt="..."></img>
                <div className="caption">
                  <h1>{value.title}</h1>
                  {this.createInfo(value)}
                  <p style={ {maxHeight : 100}} className="ellipsis">{value.overview}</p>
                </div>
              </div>
              <Link to={`/detail/${value.id}`} className="btn btn-primary bottom-right">Details</Link>
            </div>);
  }

  createTable(movies) {
    let array = []
    if (movies === undefined) {
      return array;
    }

    for (let value of movies) {
      array.push(this.createMovieCard(value));
    }

    return array
  }

  render() {
    return (
      <div className="row">
        {this.createTable(this.props.movies)}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    movies: state.tvShows.items
  }
}

export default connect(
  mapStateToProps,
)(MovieList)