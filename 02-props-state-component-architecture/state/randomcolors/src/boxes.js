import React, { Component } from 'react';
import Box from './box';

class Boxes extends Component{
	





    render(){
        
        const boxList = this.props.numbers.map((n, i) => {
         	return (
                 <Box 
                    key={n}
                    color= {this.props.colors[Math.floor(Math.random()*24)]}
                   
                 />
        		);
        })
    	return(
            <div>
                <h1>Random Color Boxes</h1>
                <section> {boxList} </section>
            </div>
    		);
    }
}
Boxes.defaultProps = {
	colors :["red", "lightred", "darkred", "teal", "yellow", "magenta", "lightblue", "darkblue", "blue", "lightgrey", "grey", "darkgrey", "lightpink", "pink", "darkpink", "lightgreen", "green", "darkgreen", "lightpurple", "purple", "darkpurple", "orange", "amber", "black"],
	numbers : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
}

export default Boxes;