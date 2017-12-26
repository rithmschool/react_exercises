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
	colors :["red", "#A1CAF1", "#00FFFF", "teal", "yellow", "magenta", "lightblue", "darkblue", "blue", "#9966CC", "#FF033E", "#551B8C", "#66B447", "pink", "#7FFFD4", "lightgreen", "green", "darkgreen", "#FDEE00", "purple", "#007FFF", "orange", "#F4C2C2", "black"],
	numbers : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
}

export default Boxes;