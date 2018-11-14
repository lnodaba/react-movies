import React, { Component } from 'react';
import './App.css';
import { Route, Switch  } from "react-router-dom";
import Home from "./home/Home"
import Detail from './detail/components/Detail';
import NoMatch from './common/NoMatch';
import { connect } from 'react-redux'
class App extends Component {

 

  

  render() {
    return (
        <Switch>

          {/*Router example with extra params, proper way to use it through render attribute.*/}
          <Route exact path='/' component={Home} />

          {/*Router example without extra params.*/}
          <Route path='/detail/:id' component={Detail} /> 

          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route component={NoMatch} />
        </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(App)
