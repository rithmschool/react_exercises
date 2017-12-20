import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
	render() {
		const hobbies = this.props.hobbies.map(hobby => {
			return <li> {hobby} </li>;
		});
		if (this.props.age >= 21) {
			return (
				<div className="Person">
					<h3> Have a drink! </h3>
					<p>Name: {this.props.name.slice(0, 8)}</p>
					<p>Hobbies:</p>
					<ul>{hobbies}</ul>
				</div>
			);
		} else {
			return (
				<div className="Person">
					<h3> You must be 21 </h3>
					<p>Name: {this.props.name.slice(0, 8)}</p>
					<p>Hobbies:</p>
					<ul>{hobbies}</ul>
				</div>
			);
		}
	}
}

export default Person;
