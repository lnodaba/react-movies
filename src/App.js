import React, { Component } from 'react';
import './App.css';
import { Route, Switch  } from "react-router-dom";
import TVRepository from './repositories/TVRepository'
import Home from "./home/Home"
import Detail from './detail/Detail';
import NoMatch from './common/NoMatch';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      movies: [],
      page: 0
    };
    this.repo = new TVRepository();
  }

  doSearch() {
    this.repo.search(this.state.searchTerm)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          movies: data.results
        });
      });
  }

  onSearchInputChange(event) {
    const searchTerm = event.target.value;
    this.setState({ searchTerm: searchTerm });
  }

  onSearchInputKeyDown(event) {
    if (event.key === 'Enter') {
      this.doSearch();
    }
  }

  render() {
    return (
        <Switch>

          {/*Router example with extra params, proper way to use it through render attribute.*/}
          <Route exact path='/' 
            render={() => (<Home searchTerm={this.state.searchTerm}
              onChange={evt => this.onSearchInputChange(evt)}
              onClick={() => this.doSearch()}
              onEnter={event => this.onSearchInputKeyDown(event)}
              movies={this.state.movies} />)} />

          {/*Router example without extra params.*/}
          <Route path='/detail/:id' component={Detail} /> 

          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route component={NoMatch} />
        </Switch>
    );
  }
}

export default App;
