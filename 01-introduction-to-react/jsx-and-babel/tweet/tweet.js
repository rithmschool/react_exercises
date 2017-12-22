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
export default Tweet;
