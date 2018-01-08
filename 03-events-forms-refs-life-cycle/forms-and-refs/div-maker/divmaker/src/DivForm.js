import React,{Component} from 'react';

class DivForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			width: '',
			height:'',
			backgroundColor: 'Green'
		}
			this.handleChange = this.handleChange.bind(this)
			this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event){
		event.preventDefault()
		this.props.add(this.state);
		
	}


	handleChange(event){
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	render(){
		return(
			<form onSubmit = {this.handleSubmit}>
			<div>
				Height:
				<input 
				type ='number'
				value = {this.state.height}
				onChange = {this.handleChange}
				name = 'height'
				/>
			</div>
				<div>
				Width:
				<input
				type = 'number'
				value = {this.state.width}
				onChange = {this.handleChange}
				name = 'width'
				/>
				</div>
					<div>
					BackgroundColor:
					<input
					type = 'color'
					value = {this.state.backgroundColor}
					onChange = {this.handleChange}
					name ='backgroundColor'
					/>
					</div>
					<input type ='submit' value = 'Add a div'/>
					</form>
			)
	}
}

export default DivForm;









