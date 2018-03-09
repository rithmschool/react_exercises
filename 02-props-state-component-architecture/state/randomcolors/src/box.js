import React, { Component } from 'react';

class Box extends Component{
	render(){ 
     var style = { backgroundColor: this.props.color };
		return(
            <div id="box" style={style}></div>
		);
	}
}

export default Box;