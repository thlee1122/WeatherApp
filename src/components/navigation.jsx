import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Nav extends Component {
	render() {
		return(
			<nav>
				<ul className="nav">
				  <li className="nav-logo">
				  	<img className="weather-logo" src="weather_icon.png" height="60" widht="60"/>
				  </li>
				  
				  <li className="nav-title">Weather App</li>
				  
				  <li className="nav-item" id="first-item">
				    <IndexLink to="/" className="nav-link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
				  </li>
				  
				  <li className="nav-item">
				    <IndexLink to="/about" className="nav-link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
				  </li>
				  
				  <li className="nav-item">
				    <IndexLink to="/examples" className="nav-link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>How To Use</IndexLink>
				  </li>
				</ul>
			</nav>
		)	
	}
}