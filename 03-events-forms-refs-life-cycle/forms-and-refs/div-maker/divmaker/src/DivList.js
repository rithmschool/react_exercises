import React, {Component} from 'react';
import DivForm from './DivForm';


class ListDiv extends Component {
	constructor(props){
		super(props)
		this.state = {
			div: []
		}
		this.handleAdd = this.handleAdd.bind(this);
	}
	handleAdd(DivMAKER3000){
		this.setState({
			div:this.state.div.concat(DivMAKER3000)
		})
	}

render() {
    let BOX3000 = this.state.div.map((box,index) => (
      <div 
     style={{
          height: box.height + "px",
          width: box.width + "px",
          backgroundColor: box.backgroundColor
        			}} 
        key={index}
      			/>
  ));

    return (
      <div>
   		<h1>ARE U RDY FOR DA DIV 3000 MAKER ULTRA?</h1>
        <DivForm add={this.handleAdd}/>
        {BOX3000}
             <h1>BEHOLD THE REVOLUTIONARY TECHNOLOGY</h1>
      </div>
    );
  }
}

export default ListDiv




