import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class WeatherForm extends Component {
	render() {
		return (
			<div className="message-form">
				<h2 id="message-form-title">Get Weather</h2>
				<SearchBar />
				<WeatherList />
			</div>
		)
	}
}