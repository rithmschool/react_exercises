class Person extends React.Component {
  render() {
    let drink_message = "";

      if( this.props.age >= 21){
        drink_message = "Toss it up! have a drink!"
      } else {
        drink_message = "Sorry, theres some milk in the fridge for you."
      }
      name = this.props.name;
      if(this.props.name.length > 8) {name = name.substr(0,6)}
    return (
      <div>
        <p>Learn some information about {name}.</p>
  			<p>{this.props.age}</p>
  			<p>{this.props.hobbies}</p>
    		<p>{drink_message}</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <div>
        <h1>Tweet App</h1>
        <Person name="Elizabethmarie" age={32} hobbies={["hobby1 ", "hobby2 ", "hobby3"]} />
        <Person name="Billy" age={18} hobbies={["hobby1 ", "hobby2 ", "hobby3"]} />
        <Person name="Christopher" age={22} hobbies={["hobby1 ", "hobby2 ", "hobby3"]} />
      </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
