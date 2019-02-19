import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import HomeContainer from './HomeContainer'

class App extends Component {

  render() {
    return (
      <div className="app">
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomeContainer}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;