import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import TVRepository from '../repositories/TVRepository';

class Season extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      isLoading: false,
      initialized: false,
      tvId: this.props.tvId,
      overview: this.props.details,
      details: null
    };
    this.repo = new TVRepository();
  }

  panelToggleHandler(evt) {
    let open = !this.state.open;
    this.setState({ open: open });
  
    if (!this.state.initialized && open) {
      this.init();
    }
  }

  init() {
    this.setState({ isLoading: true });

    this.repo.getSeason(this.state.tvId,this.state.overview.season_number)
    .then(results => {
        return results.json();
    })
    .then(data => {
        this.setState({
            details: data,
            isLoading: false,
            initialized : true
        });
    });
  }


  render() {
    let body = null;
    if(this.state.isLoading){
      body = "Loading..."
    }

    if(this.state.initialized){
      body = JSON.stringify(this.state.details);
    }

    return (
      <Panel id="Season"
        bsStyle="success"
        expanded={this.state.open}
        onToggle={() => { }} >
        <Panel.Heading>
          <Panel.Title className="pointer" onClick={(evt) => this.panelToggleHandler(evt)}>
            {this.props.details.name}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            {body}
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    );
  }
}

export default Season;