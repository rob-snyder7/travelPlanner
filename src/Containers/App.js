import React, { Component } from 'react';
import './App.css';
import WorldMap from '../Components/WorldMap';
import InfoPage from './InfoPage';
import { AvailableCountries } from '../Utils/Data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 0,
      error: 0,
      country: 'none'
    }
  }

  onRouteChange = (event) => {
    this.setState({country: event.properties.NAME})
    if (AvailableCountries.includes(event.properties.NAME)){
      this.setState({route: 1})
      this.setState({error: 0})
    } else {
      this.setState({error: 1})
      console.log('nope')
    }
  }

  onBack = () => {
    this.setState({route: 0})
    this.setState({error: 0})
    this.setState({country: 'none'})
  }


  render() {

    const displayPage = [<WorldMap onRouteChange={this.onRouteChange}/>, <InfoPage onBack={this.onBack} country={this.state.country}/>]
    const dispalyError = ['',<div className='alert alert-warning f2-ns f5'>{this.state.country} is not available. Select another one!</div>]

    return (
      <div className='App'>
        {displayPage[this.state.route]}
        {dispalyError[this.state.error]}
      </div>
    );
  }
}

export default App;
