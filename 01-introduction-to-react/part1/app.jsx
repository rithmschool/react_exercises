class FirstComponent extends React.Component {
	render() {
		return (
			<div>
				<h1>My very first component</h1>
			</div>
		);
	}
}

class SecondComponent extends React.Component {
	render() {
		return (
			<div>
				<h2>My second component</h2>
			</div>
		);
	}
}

class NamedComponent extends React.Component {
	render() {
		return (

			<p>My name is {this.props.name}</p>
			);
	}
}

class App extends React.Component {
	render(){
		return (
			<div>
				<FirstComponent />
				<SecondComponent />
				<NamedComponent name = "Zejian" />
			</div>	
			);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
