class Person extends React.Component{

	render(){
        let message;
        if(this.props.age > 21){
        	message = "Have a drink!"
        }else{
            message = "You must be 21!"
        }

        let name;
        if(this.props.name.length > 8){
            name = this.props.name.slice(0,6);
        }else{
        	name = this.props.name;
        }

       var list;
       var hobbieArr = [];
       var hobbies = this.props.hobbies;
       for (let i=0; i < hobbies.length; i++){
       	        hobbieArr.push (<li key={i}>{hobbies[i]}</li>);
       }

		return(

			<div>
	             <h2>Learn some information about {name}:</h2>
	             <p>{message}</p>
	             <h4>Favorite Hobies:</h4>
	             <ul>{hobbieArr}</ul>
	        </div> 

			);
	}
}

class App extends React.Component{
	render(){
		return (
             <div id="inner">
                 <img src = "http://www.animated-gifs.eu/category_kitchen/kitchen-beer/0057.gif" alt = "drinking gif" />
			     <Person name = "Annnnnnnnnnnn" age = {23} hobbies = {["Swimming", "Running", "Fishing"]} />
			     <Person name = "Mike" age = {19} hobbies = {["Flying", "Munching", "Sleeping"]} />
			     <Person name = "Ommmmmmmmmmm" age = {1} hobbies = {["Skiing", "Diving", "Snorkling"]} />
             </div>
			);
	}
}

ReactDOM.render(
    <App />, document.getElementById('app')
	)