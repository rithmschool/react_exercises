class Tweet extends React.Component{
   render(){
   	     return(
             <div>
             	<p> {this.props.name}'s tweeted on {this.props.date}: </p>
             	<h3> {this.props.message} </h3>
             </div>
   		);
   }
}

class App extends React.Component {
   render(){
   	return(
        <div>
            <img src="https://i.amz.mshcdn.com/VW3dewbfIRLk7Sr2gXv4DwihLek=/1200x627/2012%2F12%2F04%2F02%2Fwhyistwitte.ce9.jpg" />
        	<Tweet username="AnnSmith" name = "Ann" date = {new Date().toDateString()} message="This is Ann's tweet!!" />
        	<Tweet username="BrianSmith" name = "Brian" date = {new Date().toDateString()} message="This is Brian's tweet!!" />
        	<Tweet username="JulianSmith" name = "Julian"  date = {new Date().toDateString()} message="This is Julian's tweet!!" />
        </div>

   		);
   }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);