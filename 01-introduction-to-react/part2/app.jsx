class Tweet extends React.Component {
	render(){
		return(
			<div>
				<h5>{this.props.username}</h5>
				<h6>{this.props.date}</h6>   
				<p>{this.props.message}</p>
			</div>
			)
	}
}

class App extends React.Component {
	render(){
		return(
			<div>
				<h1>Latest tweets</h1>
				<Tweet username="ZSS" date="12.19.2017" message="hello world" />
				<Tweet username="ZSS" date="12.18.2017" message="cats are cute" />
				<Tweet username="ZSS" date="12.17.2017" message="winston is cute" />
			</div>
			)

	}

}

ReactDOM.render(<App />, document.getElementById('app'));