// PART 1 

// class MyFirstComponent extends React.Component {
// 	render() {
// 		return (
// 			<h1>This is my first component!</h1>
// 		)
// 	}
// }

// class MySecondComponent extends React.Component {
// 	render() {
// 		return (
// 			<h2>This is my second component</h2>
// 		)
// 	}
// }

// class NamedComponent extends React.Component {
// 	render() {
// 		return(
// 			<p>My name is {this.props.name}!</p>
// 		)
// 	}
// }


// class App extends React.Component {
//   render() {
//     return (
//        <div>
//        		<MyFirstComponent />
//        		<MySecondComponent />
//        		<NamedComponent name='Trevor'/>
//        </div>
//     );
//   }
// }


// PART 2

// class Tweet extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<p className='primary-text'>{this.props.username}</p>
// 				<p>{this.props.name}</p>
// 				<p>{this.props.date}</p>
// 				<p>{this.props.message}</p>
// 			</div>
// 		)
// 	}
// }

// class App extends React.Component {
// 	render() {
// 		var style = {color: 'red'};
// 		return (
// 			<div>
// 				<p className="primary-text">This should be large blue text</p>
// 				<Tweet username='thoy19' name='Trevor' date='12/20/2017' message='This is my first react tweet :))'/>
// 				<Tweet username='thoy19' name='Trevor' date='12/20/2017' message='This is my first react tweet :))'/>
// 				<Tweet username='thoy19' name='Trevor' date='12/20/2017' message='This is my first react tweet :))'/>
// 			</div>
// 		)
// 	}
// }


// PART 3

class Person extends React.Component {
	render() {
			var name = this.props.name;
			var age = this.props.age;
			var hobbies = this.props.hobbies;
			var canDrink = 'have a drink!'
			var cannotDrink = 'you must be 21'

		return (
			<div>
			<p>Learn some information about this person!</p>
			{ name.length > 8 ? 
				<h2>{ name.slice(0,6) }</h2>
				:
				<h2>{ name }</h2>
			}
			{age >= 21 ? 
				<h3>{ canDrink }</h3>
				:
				<h3>{ cannotDrink }</h3>
			}
			<p>Your hobbies:</p>
			<ul>
				{ hobbies.map(hobby => {
					return <li>{ hobby }</li>;
				})}
			</ul>
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<Person name='Samwellbaggins' age='21' hobbies={['adventures','rings','frodo','eating','frodo']}/>
			</div>
		)
	}
}



ReactDOM.render(
    <App />,
    document.getElementById('app')
);