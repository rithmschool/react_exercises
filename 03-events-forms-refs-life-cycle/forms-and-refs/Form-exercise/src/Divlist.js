import React, { Component } from 'react';
import Newdivform from "./Newdivform"
import Div from "./Div"

class Divlist extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		divs: [
	  		{
	  			id: "1",
	  			height: "200",
	  			width: "200",
	  			color: "blue"
	  		}, {
	  			id: "2",
	  			height: "200",
	  			width: "200",
	  			color: "red"
	  		}, {
	  			id: "3",
	  			height: "200",
	  			width: "200",
	  			color: "green"
	  		}
	  	]
  	}

  	this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(newDiv){
  	this.setState({divs: [newDiv, ...this.state.divs]})
  }

  render() {
    const divs = this.state.divs.map(div => (
    	<Div
    		key={div.id}
    		height={div.height}
    		width={div.width}
    		color={div.color}
    	/>
    ))
    return (
      <div>
      	<Newdivform addDiv={this.handleAdd} number={this.state.divs.length}/>
        <h1>I have {this.state.divs.length} Divs</h1>
        {divs}
      </div>
    );
  }
}

export default Divlist;