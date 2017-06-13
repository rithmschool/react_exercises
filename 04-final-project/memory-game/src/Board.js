import React, { Component } from 'react';
import Card from './Card';
import ResetButton from './ResetButton';
import Score from './Score';

class Board extends Component {

  constructor(props) {
    super(props)
    this.reset = this.reset.bind(this);
    this.state = {
      cards: this.props.cards,
      turns: this.props.totalTurns,
      disabled: this.props.disabled,
      win: false
    }
  }

  playTurn(id) {
    // check if card is enabled and face down
    if(this.state.disabled === false && this.state.cards[id].side === "down") {

      // actually flip the card on the screen
      this.flipCard(id);
    }
  }

  flipCard(id) {
    // flip card up in new array
    let cards = this.state.cards.slice();
    if (cards[id].side === "down") {
      cards[id].side = "up";
    }

    // if there are two cards up:
    let numCardsUp = cards.filter((card) => {
      return card.side === "up";
    });

    if(numCardsUp.length === 2) {
      // check for a match
      this.checkForMatch(cards);
    } else {
      // set state to flip card up
      this.setState({ cards });
    }
  }

  checkForMatch(cards) {
    // if the two cards that are up have matching colors
    var colorsToMatch = [];
    this.state.cards.forEach((card) => {
      if (card.side === "up") {
        colorsToMatch.push(card.color);
      }
    });

    if (colorsToMatch[0] === colorsToMatch[1]) {
      let cards = this.state.cards.map((card) => {
        if (card.side === "up") {
          card.side = "matched";
        }
        return card
      });
  
      // update state
      this.setState( {cards}, () => this.checkForWin(this.state.cards));
      
    } else {
      // disable cards
      this.setState( { 
        disabled: true
      } );

      // check for loss
      this.checkForLoss();

      // flip cards back after 1 second
      setTimeout( () => {
        this.flipCardsBack(cards);
      },1000);
    }
  }

  checkForWin(cards) {
    // if all cards are matched
    let numCardsMatched = cards.filter((card) => {
      return card.side === "matched";
    });
    if (numCardsMatched.length === numCards) {
      this.youWin();
    }
  }

  checkForLoss() {
    // check for 1 turn since we haven't actually subtracted the turn yet
    if(this.state.turns === 1) {
      this.youLose();
    }
  }

  flipCardsBack(cards) {
    // flip back any "up" cards
    cards.forEach((card, i) => {
      if (card.side === "up") {
        card.side = "down";
      }
    });

    // lose a turn and reset prevColor and endGameCounter
    this.setState( {
      turns: this.state.turns - 1, 
      disabled: false,
      cards: cards
    } );
  }

  youWin() {
    setTimeout( () => {
      this.setState ({
        win: true,
        disabled: true
      })
    }, 250); 
  }

  youLose() {
    // prevent card flipping
    this.setState({
      disabled: true
    })
  }

  reset() {
    // shuffle cards
    let cards = this.props.cards.slice();
    this.state.cards.forEach((card, i) => {
      card.side = "down";
    })
    cards = this.shuffle(cards);

    this.setState({
      cards: cards,
      turns: this.props.totalTurns,
      disabled: this.props.disabled,
      win: false
    })
  }

  shuffle(array) {
    let curIndex = array.length, tempVal, randomIndex;
    while (curIndex !== 0) {
      randomIndex = Math.floor(Math.random() * curIndex);
      curIndex--;

      tempVal = array[curIndex];
      array[curIndex] = array[randomIndex];
      array[randomIndex] = tempVal;
    }
    return array;
  }

  render() {

    let cards = this.state.cards.map((card, i) => (
      <Card 
        key={i} 
        side={card.side}
        color={card.color}
        handleFlip={this.playTurn.bind(this, i)}
      />
    ));

    return (
      <div>
        <div>
          {cards}
        </div>
        <Score 
          turns={this.state.turns} 
          win={this.state.win} 
          totalTurns={this.props.totalTurns}
        />
        <ResetButton handleReset={this.reset}/>
      </div>
    )
  }
}


export default Board;


// set up board

const colorObj = {
  1: "purple",
  2: "blue",
  3: "green",
  4: "yellow",
  5: "red",
  6: "pink",
  7: "orange",
  8: "lightblue"
}

let colorCount = {
  "purple": 0,
  "blue": 0, 
  "green": 0,
  "yellow": 0,
  "red": 0,
  "pink": 0,
  "orange": 0,
  "lightblue": 0
}

let cards = [];
let numCards = 16;
let random;

for (let i=0; i<numCards; i++) {
  cards[i] = {};
  cards[i].id = i;
  cards[i].side = "down";
  cards[i].status = "enabled";
  random = Math.floor(Math.random()*8) + 1;
  while(colorCount[colorObj[random]] > 1) {
    random = Math.floor(Math.random()*8) + 1;
  }
  cards[i].color = colorObj[random];
  colorCount[colorObj[random]]++;
}

Board.defaultProps = { cards };

