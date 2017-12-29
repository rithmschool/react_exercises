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
    	return this.props.removeGif;
    }

    handleChange(e){
        this.setState(
        {
            [e.target.name]: e.target.value
        });
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
             <form onSubmit={this.handleSubmit}>
                 <div>
                     <input
                        type="text"
                        value={this.state.category}
                        onChange = {this.handleChange}
                        name = "category"
                        placeholder = "Search for Giphy's category"
                     />
                 </div>
                 <div>
                     <input type="submit" value="Search Giphy" />
                 </div>
                 <div>
                     <button onClick={this.removeGif}>Remove All Giphies</button>
                 </div>
             </form>    

    		);
    }



}

export default GitForm;