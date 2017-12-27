import React, {Component} from 'react';

class CustomLink extends Component{
	render(){
		var link;
		if(this.props.url !== "#"){

	        link = <a href={this.props.url} target="_blank">{this.props.text}</a>
		}else{
			link = <a href={this.props.url}>{this.props.text}</a>
		}
		return(
			<div>
				{link}
			</div>
		);
	}
}

export default CustomLink;