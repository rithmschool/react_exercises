import React, { Component} from 'react';

class CustomDiv extends Component{
	render(){
		let styling = {
			height : this.props.height + 'px',
			width : this.props.width + 'px',
			backgroundColor : this.props.color
		}


		return <div style={styling} ></div>
	}
}

export default CustomDiv;