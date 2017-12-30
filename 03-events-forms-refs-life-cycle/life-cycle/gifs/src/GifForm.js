import React, {Component} from 'react'


class GitForm extends Component{
    
    constructor(props){
    	super(props);
    	this.state={
            category : ""
    	}
    	this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeGif = this.removeGif.bind(this);
    }
    
    removeGif(){
    	return this.props.removeGifs();
    }

    handleChange(e){
        this.setState(
        {
            [e.target.name]: e.target.value
        });
     }

    componentDidMount() {
	    let randomTerms = ["happy", "funny", "baby", "silly", "party", "dance", "sing", "music", "jump", "run"];
	    fetch(`https://api.giphy.com/v1/gifs/search?q=${randomTerms[Math.floor(Math.random()*randomTerms.length)]}&api_key=dc6zaTOxFJmzC`)
	      .then(r => r.json())
	      .then(r => {
	        this.props.getGif(r)
	      })
    }
  
    handleSubmit(e){
        e.preventDefault();
        //this.props.ajaxCall(this.state);
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.category}&api_key=dc6zaTOxFJmzC`)
        .then(r => r.json())
        .then(r => {
            this.props.getGif(r)
         })
         this.setState({
            category: ''
         })
     }

    render(){
    	return(
    		<div>
	             <form onSubmit={this.handleSubmit}>
	                <div className="search__container">
					    <p className="search__title">
					        Go ahead, hover over and search for gif
					    </p>
	                     <input
	                        className="search__input"
	                        type="text"
	                        value={this.state.category}
	                        onChange = {this.handleChange}
	                        name = "category"
	                        placeholder = "Search"
	                     />
	                 </div>
	             </form>    
	             <div>
	                     <button onClick={this.removeGif}>Remove All Giphies</button>
	             </div>
            </div>
    		);
    }



}

export default GitForm;