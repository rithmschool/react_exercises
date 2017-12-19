class MyFirstComponent extends React.Component {
	render() {
		return (
			<h1>This is my first component!</h1>
		)
	}
}

class MySecondComponent extends React.Component {
	render() {
		return (
			<h2>This is my second component</h2>
		)
	}
}

class NamedComponent extends React.Component {
	render() {
		return(
			<p>My name is {this.props.name}!</p>
		)
	}
}

class App extends React.Component {
  render() {
    return (
       <div>
       		<MyFirstComponent />
       		<MySecondComponent />
       		<NamedComponent name='Trevor'/>
       </div>
    );
  }
}



ReactDOM.render(
    <App />,
    document.getElementById('app')
);