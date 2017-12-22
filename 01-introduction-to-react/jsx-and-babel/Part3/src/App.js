import React, { Component } from "react";
import Person from "./Person";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div>
				<Person
					age={21}
					name="Allie"
					hobbies={["yoga", "programming"]}
				/>
				<Person
					age={22}
					name="Jay"
					hobbies={[
						"writing",
						"jogging",
						"eating",
						"photographing",
						"dancing"
					]}
				/>
				<Person
					age={20}
					name="Marjorie Elina Lauren"
					hobbies={["skiing"]}
				/>
			</div>
		);
	}
}

export default App;
