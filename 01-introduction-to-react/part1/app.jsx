class FirstComponent extends React.Component {
  render() {
    return (
       <div>
         <h1>My very first component!</h1>
       </div>     
    );
  }
}
class SecondComponent extends React.Component {
  render() {
    return (
       <div>
         <h1>My second component!</h1>
       </div>
    );
  }
}
class ThirdComponent extends React.Component {
  render() {
    return (
       <div>
         <p>My name is {this.props.name}</p>
       </div>
       
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Connected to App</h1>
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent name="viki" />
      </div>
       
    );
  }
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);