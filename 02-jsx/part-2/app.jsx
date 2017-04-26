class Person extends React.Component {
  

  render() {
    let drinkText = this.props.age >= 21 ?
      "Have a drink!" :
      "You must be 21.";

    let hobbies = this.props.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>) 

    return (
      <div>
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {this.props.name.slice(0,6)}</li>
          <li>Age: {this.props.age}</li>
          <ul>Hobbies
            {hobbies}
          </ul>
        </ul>
        <h3>{drinkText}</h3>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Person 
          name="Homer"
          age={38}
          hobbies={["bowling","watching tv","drinking beer"]}
        />
        <Person
          name="Marge"
          age={34}
          hobbies={["painting","gambling"]}
        />
        <Person
          name="Bart"
          age={10}
          hobbies={["skateboarding","making prank calls"]}
        />
        <Person
          name="Lisa"
          age={8}
          hobbies={["reading","saxophone","eating vegetables"]}
        />
      </div>
    )
  }
}

// lets put this on the DOM
ReactDOM.render(<App/>, document.getElementById("app"));
