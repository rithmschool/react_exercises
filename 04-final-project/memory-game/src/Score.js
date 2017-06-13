import React, { Component } from 'react';
import "./Score.css";

class Score extends Component {

  

  render() {

    let score;

    if (this.props.win === true) {
      score = `You win in ${this.props.totalTurns - this.props.turns} turns!`
    } else if (this.props.turns === 0) {
      score = "You lose!"
    } else if (this.props.turns === 1) {
      score = "Careful! Only one turn remaining."
    } else {
      score = `You have ${this.props.turns} turns remaining.`
    }

    return (

      <h3 className="score">
        {score}
      </h3>

    )
  }
}


export default Score;