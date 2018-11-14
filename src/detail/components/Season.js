import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import SeasonBody from "./SeasonBody";
import TVRepository from '../../repositories/TVRepository';

class Season extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
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

    this.repo.getSeason(this.state.tvId, this.state.overview.season_number)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          details: data,
          isLoading: false,
          initialized: true
        });
      });
  }

  render() {
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
            <SeasonBody details={this.state.details}/>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    );
  }
}

export default Season;