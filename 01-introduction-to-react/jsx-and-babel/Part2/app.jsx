class Person extends React.Component {
  render() {
    
    var ageInfo = this.props.age >= 21 ?
      <h3>have a drink!</h3> :
      <h3>you must be 21</h3>

    var nameShort = this.props.name.length > 8 ?
      <p>{this.props.name.slice(0,6)}</p> :
      <p>{this.props.name}</p>

    var hobbies = this.props.hobbies.map(function(eachHobby, i) {
      return <li key={i}>{eachHobby}</li>
      })

    return <div>Learn some information about this person
      {ageInfo}
      {nameShort}
      <ul>
        {hobbies}
      </ul>  
    </div>
  }
}

class App extends React.Component {
  render() {
    return <div>
      <Person
        name="Katie"
        age="24"
        hobbies={["swimming","sleeping"]}
      />

      <Person
        name="Here's a long time"
        age="1"
        hobbies={["playing","reading"]}
      />

      <Person
        name="Moxie"
        age="7"
        hobbies={["walking with Tim","wanting to go on a walk"]}
      />
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));