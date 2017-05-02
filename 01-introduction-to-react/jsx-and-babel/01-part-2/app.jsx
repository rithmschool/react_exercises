class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <span>{this.props.name}</span>
        <span className="username">@{this.props.username}</span>
        <span className="date">{this.props.date}</span>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Tweet 
          name="Matt Lane"
          username="mmmaaatttttt"
          date={new Date().toDateString()}
          message="This app will disrupt everything!!"
        />
        <Tweet 
          name="Elie Schoppik"
          username="eschoppik"
          date={new Date().toDateString()}
          message="#Ilovehashtags"
        />
        <Tweet 
          name="Tim Garcia"
          username="TimGarcia0"
          date={new Date().toDateString()}
          message="Follow me on Twitter!"
        />
      </div>
    )
  }
}

// lets put this on the DOM
ReactDOM.render(<App/>, document.getElementById("app"));
