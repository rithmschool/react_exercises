class Tweet extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.tweet}</p>
        <h6>{this.props.username}</h6>
        <h6>{this.props.date}</h6>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tweet App</h1>
        
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);