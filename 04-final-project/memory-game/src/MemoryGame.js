import React, {Component} from 'react';
import Card from './Card'


// A card can be in 1 of 3 CardStates
// HIDING - the card is not being shown
// SHOWING - the card is being shown but does not have a match yet
// MATCHING - the card is being shown and has a match.
//            the card should never move from MATCHING to another state during
//            game play.
const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
}

// Fisher-Yates shuffle algorithm
// This is a standard algorithm for shuffling an array of data
function shuffle(arr) {
  var currentIndex = arr.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
}

export default class MemoryGame extends Component {
  constructor(props) {
    super(props);

    // The cards that we will use for our state.
    let cards = [
      {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
      {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
    ];

    // Shuffle the cards
    cards = shuffle(cards);

    // The state is the array of cards and the noClick boolean.
    // If noClick is true, no cards can be clicked.
    // noClick is used to stop a user from clicking while 2 incorrect cards are
    // being shown.
    this.state = {cards, noClick: false};

    // binding this.clickCard to this (the MemoryGame component), so that
    // this.setState can be used inside of clickCard
    this.clickCard = this.clickCard.bind(this);
  }

  clickCard(id) {

    // The function looks through all of the cards in an array and
    // creates a new object for each card that matches the id in the
    // idsToChange array.  The new object will have newCardState
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map((card) => {
        if (idsToChange.includes(card.id)) {
          return {
            ...card,
            cardState: newCardState
          };
        }
        return card;
      });
    }

    // Finding the card that was clicked in the array of cards
    const foundCard = this.state.cards.find((c) => c.id === id);

    // If the state is not allowing us to click, or if the card that was
    // found is not currently hidden, then do nothing
    if (this.state.noClick || foundCard.cardState !== CardState.HIDING) {
      return;
    }

    // Create a SHALLOW copy of the cards array.  Since this is only a shallow
    // copy (the array is new, but the objects in the array are still the original
    // object), we must create a copy of the cards we want to change.
    let cards = this.state.cards.slice();

    // noClick will be false, unless we are in a state where we clicked 2 cards
    // and they do not match
    let noClick = false;

    // map the card that was clicked to have a state of SHOWING
    cards = mapCardState(cards, [id], CardState.SHOWING);

    // Find all of the cards in the newly mapped array that have the state SHOWING
    const showingCards = cards.filter((c) => c.cardState === CardState.SHOWING);

    // Create an array of ids from the showing cards
    const ids = showingCards.map(c => c.id);


    if (showingCards.length === 2 &&
        showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
      // If there are 2 cards showing and the cards have matching colors, then
      // we have a match!  Change the card state's to MATCHING

      // Changing both card states to MATCHING
      cards = mapCardState(cards, ids, CardState.MATCHING);
    } else if (showingCards.length === 2) {
      // If there are 2 cards showing, but they are not matching, we need to hide them.
      // We have to allow the user to see the second card that she clicked on, so the
      // setTimeout changes the card state after 1.5 seconds.

      // Change the cards with state SHOWING to HIDING.
      let hidingCards = mapCardState(cards, ids, CardState.HIDING);
      setTimeout(() => {
        // set the state of the cards to HIDING after 1.5 seconds
        this.setState({cards: hidingCards, noClick: false});
      }, 1500);
      // We do not want the cards to be clicked on for that 1.5 second peroid.
      noClick = true;
    }

    // Sets the state of the cards array and noClick
    this.setState({cards, noClick});
  }

  render() {
    const cards = this.state.cards.map((card) => (
      <Card
        key={card.id}
        showing={card.cardState !== CardState.HIDING}
        backgroundColor={card.backgroundColor}
        onClick={() => this.clickCard(card.id)}
        />
    ));

    return <div>{cards}</div>;
  }
}
