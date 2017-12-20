class FirstComponent extends React.Component {
	render() {
		return (	
			<div>
				<h1>"Our very first component"</h1>
			</div>
			);
	}

}

class SecondComponent extends React.Component {
	render() {
		return (	
			<div>
				<h2>"Our second component"</h2>
			</div>
			);
	}

}


class NamedComponent extends React.Component {
	render() {
		return (	
			<div>
				<p>Our names are { this.props.name } </p>
			</div>
			);
	}

}

class Tweet extends React.Component {
	render() {
		return (	
			<div>
			<p className="tweet-info"><span className="tweeter"> @{ this.props.username }</span> <span> tweeted on  { this.props.date }: </span></p>
				<h4 className="tweet">{ this.props.message } </h4>
			</div>
			);
	}

}



class Person extends React.Component {
	render() {
		let drink;
		if(this.props.age >= 21) {
			drink = <h3 className="drink-title">Have a drink!</h3>;
		}
		else {
			drink = <h3 className="drink-title">You must be 21.</h3>
		}
		name = this.props.name;
		if(this.props.name.length > 8) {name = name.substr(0,6)}
		let hobbiesList = this.props.hobbies;
		let hobbies = hobbiesList.map((hobby) => <li>{hobby}</li>);
		
		// for(let i = 0; i <hobbiesList.length; i++) {
			
		// 		<li>hobbiesList[i]</li>
		return (	
			<div>
				<p className="person-title">Learn some information about {name}:</p>
				<p className="person-info">Age: {this.props.age} </p>
				<p className="person-info">{name}'s hobbies:</p>
				<ul>
				{hobbies}
				</ul>
				<p className="drink-title">{drink} </p>
			</div>
			);
	}

}

class App extends React.Component {
	render() {
		let date = new Date().toDateString();
		return (
			 <div>
				 <h1 className='part-title'>Part 1 answers!</h1>
				 <FirstComponent />
				 <SecondComponent />
				 <NamedComponent name="Stephen & Andre"/>
				 <h2 className='part-title'>Part 2 answers!</h2>
				 <Tweet username="Tom" date= { date }  message="This is a fascinating tweet!"/>
				 <Tweet username="Dick" date={ date } message="This is Dick's  fascinating tweet!"/>
				 <Tweet username="Harry" date={ date } message="This is Harry's fascinating tweet!"/>
		<h2 className='part-title'>Part 3 answers!</h2>
		<Person name="Haberdasher" age={15} hobbies={['basketball', 'riding motorcycles', 'skydiving']} />
		<Person name="Tchaikovsky" age={177} hobbies={['violin', 'orchestration', 'bocce ball']} />
		<Person name="Avicii" age={28} hobbies={['keyboard', 'pressing play', 'music']} />

			 </div>

		);
	}
}
ReactDOM.render(
		<App />,
		document.getElementById('app')
);

