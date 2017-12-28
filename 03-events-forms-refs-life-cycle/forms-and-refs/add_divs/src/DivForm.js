import React, {Component} from 'react';

//one form is one div!!
class DivForm extends Component{
    constructor(props){
    	super(props);
    	
    	this.state = {
            height : '',
            width :'',
            backgroundColor : ''
    	}
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    }//end constructor

    handleChange(e){
    	// debugger
        this.setState({[e.target.name] : e.target.value});
    }
    //one form is one div!!
    handleSubmit(e){
    	// debugger
        e.preventDefault();
        this.props.addDiv(this.state);
        //this.width.focus();
    }

    render(){
    	return(
            <div id="con">
                <form onSubmit = {this.handleSubmit}>
                     <header>
                        <h1>Creating Div's </h1>
                        <p>Please enter the details:</p>
                     </header>
                    <div id="inputFields">
	                    <div>    
		                    <input
		                        type = "number"
		                        name = "width"
		                        value = {this.state.width}
		                        onChange = {this.handleChange}
		                        placeholder = "Add width"
		                    />
	                    </div>
	                    <div>
	                      <input
	                            type = "number"
	                            name = "height"
	                            value = {this.state.height}
	                            onChange = {this.handleChange}
	                            placeholder = "Add height"
	                        />  
		                </div>    
	                    <div>
		                        <input
		                            type = "string"
		                            name = "backgroundColor"
		                            value = {this.state.value}
		                            onChange = {this.handleChange}
		                            placeholder = "Add background color"
		                        />
		                </div>

		                <div>
	                       <button> Submit </button>
		                </div> 
		            </div>   
                </form>
            </div>
    	);
    }
}

export default DivForm;