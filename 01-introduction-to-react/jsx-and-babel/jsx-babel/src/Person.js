import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';

class Person extends Component {
  render() {
  	let age;
  	if (this.props.name.length < 8) {
  		age = <p className='center'>{this.props.name}</p>;
  	} else {
  		age = <p className='center'>{this.props.name.slice(0, 7)}</p>
  	}

    return (
    	<div>
    		<Thumbnail>
          <p className='center'>Learn some information about this person</p>
          {age}
          {this.props.age >= 21 ?
          <p className = 'center'>Have a drink!</p>
          :
          <p className = 'center'>You must be 21</p>
          }
          <ul>
          {this.props.hobbies.map(hobby => <li>{hobby}</li>)}
          </ul>
        </Thumbnail>

    	</div> 	
    );
  }
}


export default Person;