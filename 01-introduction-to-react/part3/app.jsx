class Person extends React.Component {
	render(){
			let drinkText = this.props.age >= 21 ? "Have a drink!" : "You must be 21!"
			let hobbies = this.props.hobbies.map(hobby => <li>{hobby}</li>)
			return(
			<div>
			<p>Learn some information about this person:</p>
			<p> {this.props.name} </p>
			<p> {this.props.age} </p>
			<ul>Hobbies
				{hobbies}
			</ul>
			<h3>{drinkText}</h3>
			</div>
			)
	}

}

class App extends React.Component{
	render(){
		return(
			<div>
				<h1>All the people</h1>
				<Person name="Zejian" age="30" hobbies={["coding", "fishing", "drawing"]} />
				<Person name="Winston" age="9" hobbies={["snacks", "snacks", "snacks"]}/>
				<Person name="Alyn" age="24" hobbies={["law", "law", "law"]}/>
			</div>


			)

	}

}

ReactDOM.render(<App />, document.getElementById('app'));