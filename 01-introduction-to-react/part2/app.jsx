class Tweet extends React.Component{
   render(){
   	     return(
             <div>
             	<p> {this.props.name}'s' tweeted on {this.props.date}: </p>
             	<h3> {this.props.message} </h3>
             </div>
   		);
   }
}

function displayDate(){
    let date = new Date();
    let utcDate = new Date(date.toUTCString());
    utcDate.setHours(utcDate.getHours()-8);
    let usDate = new Date(utcDate);
    return usDate.toUTCString();
}

class App extends React.Component {
   render(){
   	return(
        <div>
        	<Tweet username="AnnSmith" name = "Ann" date={displayDate()} message="This is Ann's tweet!!" />
        	<Tweet username="BrianSmith" name = "Brian" date={displayDate()} message="This is Brian's tweet!!" />
        	<Tweet username="JulianSmith" name = "Julian"  date={displayDate()} message="This is Julian's tweet!!" />
        </div>

   		);
   }
}
ReactDOM.render(
	<App />,
	document.getElementById('app')
);