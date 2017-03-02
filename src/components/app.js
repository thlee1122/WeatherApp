import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Nav from './navigation';
import WeatherForm from './WeatherForm';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Nav/>
      	<div className="row">
	      	<WeatherForm/>
      	</div>
      </div>
    );
  }
}
