import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component{
	render(){
		return(
			<div className="nav">
				<ul>
					<li><Link to="/todos">Home</Link></li>
					<li><Link to="/todos/new">Add To Do</Link></li>
				</ul>
			</div>
			)
	}
}

export default Nav;