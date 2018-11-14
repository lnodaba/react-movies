import React, { Component } from 'react';

class MovieDetails extends Component {

    render() {
        return (
            <div className="panel-body">
                <p> <b>original_name: </b>{this.props.details.original_name}</p>
                <p> <b>episode_run_time: </b> {this.props.details.episode_run_time} minutes. </p>
                <p> <b>first_air_date : </b> {this.props.details.first_air_date} </p>
                <p> <b>genres : </b> {this.props.details.genres.map(a => a.name).join(", ")} </p>
                <p> <b>homepage : </b> <a target="_blank" rel="noopener noreferrer"  href={this.props.details.homepage}>{this.props.details.homepage}</a></p>
                <p> <b>in_production : </b> {this.props.details.in_production} </p>
                <p> <b>last_air_date : </b> {this.props.details.last_air_date} </p>
                <p> <b>networks : </b> {this.props.details.networks.map(a => a.name).join(", ")} </p>
                <p> <b>number_of_episodes : </b>{this.props.details.number_of_episodes}</p>
                <p> <b>number_of_seasons : </b>{this.props.details.number_of_seasons}</p>
                <p> <b>popularity : </b>{this.props.details.popularity}</p>
                <p> <b>status : </b>{this.props.details.status}</p>
                {/* TODO : // Create a Star component to show the vote average in stars */}
                <p> <b>vote_average : </b>{this.props.details.vote_average}</p>
                <p> <b>vote_count : </b>{this.props.details.vote_count}</p> 
                <p> <b>overview : </b>{this.props.details.overview}</p>
            </div>
        );
    }
}

export default MovieDetails;