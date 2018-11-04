import React, { Component } from 'react';
import Modal from '../common/Modal'
import { decorated, itemSettings } from '../utils/decorated';
import { Thumbnail } from 'react-bootstrap';

let Overview = (props) => {
    let episode = props.episode; 

    return ( 
      <div className="panel-body">
        <p><b>name : </b>{episode.name}</p>
        <p><b>air_date : </b>{episode.air_date}</p>
        <p><b>episode_number : </b>{episode.episode_number}</p>
        <p><b>overview : </b>{episode.overview}</p>
        <p><b>vote_average : </b>{episode.vote_average}</p>
        <p><b>vote_count : </b>{episode.vote_count}</p>
      </div>
      ); 
}

let Dudes = (props) => { 
  let guests = props.dudes.map((value) => {
    return (
      <Thumbnail key={value.credit_id} src={`http://image.tmdb.org/t/p/w150_and_h225_bestv2/${value.profile_path}`} alt="242x200">
          <h3>{value.name}</h3>
      </Thumbnail>
    );
  })

  return (
    <div className="max360">
      {guests}
    </div>
  ); 
}

const DecoratedOverview = decorated(Overview, itemSettings("Overview :", "col-md-6 nopadding"));
const DecoratedGuests = decorated(Dudes, itemSettings("Guests :", "col-md-3 "));
const DecoratedCrew = decorated(Dudes, itemSettings("Crew :", "col-md-3 nopadding"));


function EpisodeModal(props){
  let episode = props.episode;
  console.log(episode);
  return (
    <div className="episode-modal">
      <DecoratedOverview episode={episode}/>
      <DecoratedGuests dudes={episode.guest_stars}/>
      <DecoratedCrew dudes={episode.crew} />
    </div>
  );
}

class EpisodeBody extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {

    let episode = this.props.episode;
    return (
      <div className="panel-body">
        <p><b>name : </b>{episode.name}</p>
        <p><b>air_date : </b>{episode.air_date}</p>
        <p><b>episode_number : </b>{episode.episode_number}</p>
        <p><b>overview : </b>{episode.overview}</p>
        <p><b>vote_average : </b>{episode.vote_average}</p>
        <p><b>vote_count : </b>{episode.vote_count}</p>
        <button type="submit" className="btn btn-default" onClick={(e) => this.showModal()}>More Details</button>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <EpisodeModal episode={this.props.episode} />
        </Modal>
      </div>
    );
  }
}

  
function Episodes(props){
  return props.episodes.map( (episode,index) => {

    return (
        <li key={index} 
            role="presentation" 
            className={props.selectedEpisodeIndex === index ? "active" : "" }>
          <a onClick={ (e) => props.selectEpisode(e,index) } href="\">{index + 1 }</a>
        </li>
      );
  });
}

export default class SeasonBody extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      details: this.props.details,
      selectedEpisodeIndex : 0
    };
  }

  selectEpisode(e,index){
    e.preventDefault();
    this.setState({selectedEpisodeIndex : index});
  }

  render(){
    let selectedEpisodeIndex = this.state.selectedEpisodeIndex;
    let details = this.props.details;
    if(details === null){
      return "Loading...";
    }

    const selectedEpisode = details.episodes[selectedEpisodeIndex];
    return (
      <>
        <p> <b>air_date: </b> {details.air_date} </p>
        <p> <b>overview : </b> {details.overview} </p>
        <ul className="nav nav-pills navbar-default">
          <Episodes episodes={details.episodes}
                    selectedEpisodeIndex={selectedEpisodeIndex}
                    selectEpisode={ (e,index) => this.selectEpisode(e,index)}/>
        </ul>
        <EpisodeBody episode={selectedEpisode} />
      </>
    );
  }
}