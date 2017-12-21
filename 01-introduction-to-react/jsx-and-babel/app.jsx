class FirstComponent extends React.Component {
    render() {
        return (
        <h1>This is my first component</h1>
        )
    }
}

class SecondComponent extends React.Component {
    render() {
        return (
            <h2>This is my second component</h2>
        )
    }
}

class NamedComponent extends React.Component {
    render(){
        return (
            <p>My name is {this.props.name}</p>
        )
    }
}

class Tweet extends React.Component {
    render(){
        return (
            <div className="first">
                <p>Username is {this.props.username}</p>
                <p>Name is {this.props.name}</p>
                <p>Date is {this.props.date}</p>
                <p>Message is {this.props.message}</p>
            </div>
        )
    }
}

class Person extends React.Component {
    render(){
        var name = this.props.name;
        var listOfHobbies = this.props.hobbies.map((p,i) => <li key={i}> {p}</li>)
        return (
            <div>
                <p>Learn some more information about this person</p>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <div>{this.props.age >= 21 ?
                    <h3>Have a drink!</h3>
                    :
                    <h3>You must be 21</h3>
                    }
                </div>
                <div>{name.length > 8 ?
                    <h3>{name.slice(0,6)}</h3>
                    :
                    <h3>{name}</h3>
                    }
                </div>
                <div>
                    <ul> Hobbies
                     {listOfHobbies}
                    </ul>
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    render(){
        var age = this.props.age
        var tweets = [
            {
                username: "Adele",
                name: "Adele",
                date: "Sept9",
                message: "Hellooo",
                hobbies: ["bowling","watching tv","drinking beer"]
            },
            {
                username: "Chitwant",
                name: "Chitwant",
                date: "Sept9",
                message: "HIIII",
                hobbies: ["bowling","watching tv","drinking beer"]
            },
            {
                username: "Kevin",
                name: "Kevin",
                date: "Sept9",
                message: "YAYYY",
                hobbies: ["bowling","watching tv","drinking beer"]
            }

        ]
        var tweetComp = tweets.map((p,i) => (
            <Tweet username={p.username} name={p.name} date={p.date} message={p.message} hobbies={p.hobbies} key={i} />
        ));
        return (
            <div>
                <FirstComponent />
                <SecondComponent />
                <NamedComponent name="Adele" />
                {tweetComp}
                <Person name="AVERYLONGNAME" age={30} hobbies={["bowling","watching tv","drinking beer"]}/>
                <Person name="John" age={19} hobbies={["sleeping","reading","dancing"]}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));