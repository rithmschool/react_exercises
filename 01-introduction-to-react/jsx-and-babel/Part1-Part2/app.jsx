class Tweet extends React.Component {
  render() {
    return <div>
      <h2>{this.props.username}'s tweet: </h2>
      <p className={this.props.username}>{this.props.message} - {this.props.name} ({this.props.date})</p>
    </div>
  }
}

class App extends React.Component {
  render() {
    return <div>
      <Tweet
        username="blythe"
        name="Blythe the Toddler" 
        date="6/5/2017" 
        message="React is awesome!"
      />
      <Tweet
        username="whiskey"
        name="Whiskey the Dog" 
        date="6/3/2017" 
        message="Woof woof!"
      />
      <Tweet
        username="moxie"
        name="Moxie the Cat" 
        date="6/7/2017" 
        message="Meow Meow! Take me for a walk, Tim!"
      />
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById("app"));