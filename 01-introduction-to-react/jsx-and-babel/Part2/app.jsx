class Tweet extends React.Component {
	render() {
		return (
			<div className="tweet">
				<p className="inline"> {this.props.date} </p>
				<p className="inline"> {this.props.username}</p>
				<p className="inline"> {this.props.name} </p>
				<p> {this.props.message} </p>
			</div>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<Tweet
					username="alliejant"
					name="allie"
					date="12/19/17"
					message="hi"
				/>
				<Tweet
					username="jant"
					name="jay"
					date="12/19/17"
					message="hello"
				/>
				<Tweet
					username="writer"
					name="rodney"
					date="12/19/17"
					message="bye"
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
