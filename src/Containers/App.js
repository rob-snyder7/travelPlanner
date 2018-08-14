import React, { Component } from 'react';
import './App.css';
import WorldMap from '../Components/WorldMap';
import InfoPage from './InfoPage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 0,
      country: 'none'
    }
  }

  onRouteChange = (event) => {
    if (event.properties.NAME === 'Russia'){
      console.log('nope')
    } else {
      this.setState({route: 1})
      this.setState({country: event.properties.NAME})
    }
  }

  onBack = () => {
    this.setState({route: 0})
    this.setState({country: 'none'})
  }

  

  render() {

    const displayPage = [<WorldMap onRouteChange={this.onRouteChange}/>, <InfoPage onBack={this.onBack} country={this.state.country}/>]

    return (
      <div className='App'>
        {displayPage[this.state.route]}
      </div>
    );
  }
}

export default App;
