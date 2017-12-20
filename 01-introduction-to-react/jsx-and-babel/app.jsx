//part 1
class FirstComponent extends React.Component {
	render() {
		return (
			<h1>My very first component.</h1>
		)
	}
}

class SecondComponent extends React.Component {
	render(){
		return (
			<h2>My second component.</h2>
		)
	}
}

class NamedComponent extends React.Component {
	render(){
		return (
			<p>My name is {this.props.name}.</p>
		)
	}
}

//part 2
class Tweet extends React.Component {
	render (){
		return (
			<div className="tweet">
				<h1>{this.props.name}</h1>
				<h3>{this.props.username}</h3>
				<p>{this.props.message}</p>
				<h5>{this.props.date}</h5>
			</div>
		)	
	}
}
class App extends React.Component {
	render(){
		return (
			<div>
			< Tweet name="Bob" username="bob1994" message="hello world!" date = "jan 1, 1994"/>
			< Tweet name="Becky" username="rebecca1" message="just had a baby today nbd #lifegoals" date="jan 1, 1994" />
			< Tweet name="Ron" username="ithinkimsobadass" message="can't sleep.... fml" date="jan 2, 1994" />
			</div>
		)
	}
}

//part3

class Person extends React.Component {
	render(){
		const hobbies = this.props.hobbies.map(hobby => {
			return <li>{hobby}</li>
		});

		return (
			<div>
				<p>Learn some more about this person</p>
				<h1>{this.props.name}</h1>
				<h3>{this.props.age}</h3>
				{this.props.age >= 21 ? 
					<h3>Have a drink!</h3>
					:
					<span></span>
				}	
				<ul> Hobbies:
					{hobbies}
				</ul>	
			</div>	
		)
	}
}

ReactDOM.render(
<FirstComponent />,
document.getElementById('first')
);

ReactDOM.render(
<SecondComponent />,
document.getElementById('second')
);

ReactDOM.render(
<NamedComponent name="Foo" />,
document.getElementById('named')
);

ReactDOM.render(
< App />,
document.getElementById('App')
);

ReactDOM.render(
<div>
	<Person name="Mr. Chen" age="80" hobbies={["drinking tea","watching music tv"]} />
	<Person name="Maria" age="12" hobbies={["soccer","video games", "Star Wars trivia"]} />
	<Person name="Roberta" age="45" hobbies={["running", "growing orchids"]} />
</div>,
document.getElementById("people")	
);