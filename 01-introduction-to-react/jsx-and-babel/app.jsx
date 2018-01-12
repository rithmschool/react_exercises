
// part 1
class FirstComponent extends React.Component {
  render() {
    return (
       <div>
         <h1>My very first component</h1>
       </div>
    );
  }
}

class SecondComponent extends React.Component {
  render(){
    return (
      <div>
        <h2>My second component</h2>
      </div>
    )
  }
}

class NamedComponent extends React.Component {
  render() {
    return (
      <p>Hi, my name is {this.props.name}!</p>
    )


  }
}
// part 2
class Tweet extends React.Component {
  render() {
    return (
      <div>
        {/* name */}
        <span>{this.props.name}</span>
        {/* username */}
        <span className="username">@{this.props.username}</span>
        {/* date */}
        <span className="date">{this.props.date}</span>
        {/* message */}
        <p>{this.props.message}</p>
      </div>
    )
  }
}
// part 3
class Person extends React.Component {
  render() {
    let drinkAllowed = this.props.age >= 21 ? "Have a drink!" : "You must be 21";
    let hobbies = this.props.hobbies.map((hobby,curr) => <li key={curr}>{hobby}</li>)
    return (
      <div>
        <p>Learn some information about this person</p>
        <ul>
          <li> Name: {this.props.name.slice(0,6)}</li>
          <li> Age: {this.props.age}</li>
          <ul> Hobbies:
            {hobbies}
          </ul>
        </ul>
        <h3>{drinkAllowed}</h3>
      </div>
    )
  }
}



class App extends React.Component {
  render(){
    return (
      <div>
        <FirstComponent />
        <SecondComponent />
        <NamedComponent name= "Jette"/>
        <Tweet name= "Jette" username= "rebelskum" date={new Date()} message= "Omg, have you seen the new Star Wars movie?!"/>
        <Tweet name= "Michelle" username= "curlygirl" date={new Date()} message= "Omg, no i haven't seen the new Star wars movie"/>
        <Tweet name= "Vicki" username= "mamaOwl" date={new Date()} message= "Omg, how was the new Star Wars movie @Rebelskum"/>
        <Person name="Sean" age={36} hobbies={['crossfit', 'basketball', 'football']}/>
        <Person name="Stephen" age={30} hobbies={['coding', 'biology', 'reading']}/>
        <Person name="Allie" age={19} hobbies={['yoga', 'cooking', 'coding']}/>
      </div>
    )
  }
}



ReactDOM.render(
    <App />,
    document.getElementById('app')
);
