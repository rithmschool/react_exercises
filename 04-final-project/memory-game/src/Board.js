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
      endGameCounter: this.props.endGameCounter,
      turns: this.props.turns,
      prevColor: this.props.prevColor,
      disabled: this.props.disabled
    }
  }

  playTurn(id) {
    // check if card is enabled and face down
    if(this.state.disabled === false && this.state.cards[id].side === "down") {

      // actually flip the card on the screen and upate state
      let tempState = this.flipCard(id);
        
      // if it's an even turn, check for a match
      let curColor = this.state.cards[id].color;
      if(tempState.endGameCounter % 2 === 0) {
        // check for a match
        this.checkForMatch(curColor, this.state.prevColor, tempState);
      
      } else {
        // set state and update previous color
        this.setState({ 
          prevColor: curColor
        });
      }
    }
  }

  flipCard(id) {
    let cards = this.state.cards.slice();
    if (cards[id].side === "down") {
      cards[id].side = "up";
    }
    let endGameCounter = this.state.endGameCounter + 1;
    let tempState = {};
    tempState.cards = cards;
    tempState.endGameCounter = endGameCounter;
    this.setState({cards});
    return tempState;
  }

  checkForMatch(curColor, prevColor, tempState) {
    if(curColor === prevColor) {
      // check for win (keep both cards up and don't lose a turn)
      this.checkForWin(tempState);
      debugger
      this.setState ( {
        endGameCounter: tempState.endGameCounter
      });
    } else {
      // disable cards
      tempState.disabled = true;

      // check for loss
      this.checkForLoss();

      // flip cards back after 1 second
      setTimeout( () => {
        this.flipCardsBack(curColor, prevColor, tempState);
      },1000);
    }
    return tempState;
  }

  checkForWin(tempState) {
    if(tempState.endGameCounter === numCards) {
      this.youWin();
    }
  }

  checkForLoss() {
    // check for 1 turn since we haven't actually subtracted the turn yet
    if(this.state.turns === 1) {
      this.youLose();
    }
  }

  flipCardsBack(curColor, prevColor, tempState) {
    // flip back the last two cards (any cards with curColor or prevColor)
    tempState.cards.forEach((card, i) => {
      if (card.color === curColor || card.color === prevColor) {
        card.side = "down";
      }
    });

    // lose a turn and reset prevColor and endGameCounter
    this.setState( {
      turns: this.state.turns - 1, 
      prevColor: "lightgray",
      disabled: false,
      cards: tempState.cards,
      endGameCounter: tempState.endGameCounter - 2
    } );
  }

  youWin() {
    setTimeout( () => {
      // show you win alert
      // show a button to play again
    }, 250); 
  }

  youLose() {
    // prevent card flipping
    this.setState( {
      disabled: true
    } )
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
      endGameCounter: this.props.endGameCounter,
      turns: this.props.turns,
      prevColor: this.props.prevColor,
      disabled: this.props.disabled
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


    const cards = this.state.cards.map((card, i) => (
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
        <Score turns={this.state.turns}/>
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

