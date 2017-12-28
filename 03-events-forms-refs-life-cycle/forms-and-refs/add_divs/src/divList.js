import React, {Component} from 'react';
import DivForm from "./DivForm"

class DivList extends Component{
	constructor(props){
		super(props);

	    this.state={
            divList : []
	    };
        this.handleAdd=this.handleAdd.bind(this);
	}
    
	handleAdd(newDiv){
		this.setState({ divList: [newDiv, ...this.state.divList] });
	}


	render(){
	    let divs = this.state.divList.map((d, i)=>(
            <div 
                style={{
                	    height: d.height + "px",
                        width: d.width + "px",
                        backgroundColor: d.backgroundColor
                       }}
                key = {i}
            />
	    ));

		return(
            <div>
                <DivForm addDiv={this.handleAdd} />
                    <div id="listArea">
                        {divs}
                    </div>    
            </div>
		);
	}
}

export default DivList;

//  // handleRemove(idx) {
//  //    const { instructors } = this.state;
//  //    const newInstructors = instructors
//  //      .slice(0, idx)
//  //      .concat(instructors.slice(idx + 1));
//  //    this.setState({
//  //      instructors: newInstructors
//  //    });
//  //  }

//   render() {
//     let instructors = this.state.instructors.map((name, idx) => (
//       <Instructor
//         removeInstructor={this.handleRemove.bind(this, idx)}
//         name={name}
//         key={idx}
//       />
//     ));
//     return <div>{instructors}</div>;
//   }
// }