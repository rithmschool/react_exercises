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
    return <div>
        <h1>Tweet App</h1>
        <Tweet tweet="Craft beer cloud bread venmo, XOXO chambray dreamcatcher letterpress." username="diddyDad84" date="10/21/2017" />
        <Tweet tweet="Food truck man bun franzen, authentic edison bulb lo-fi taiyaki chambray jean shorts." username="diddyDad84" date="3/12/2017" />
        <Tweet tweet="VHS ethical cliche migas disrupt four loko. Af cloud bread whatever try-hard." username="diddyDad84" date="1/01/2017" />
      </div>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);