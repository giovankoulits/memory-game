//Components
import Card from './Card/Card';
import MyModal from './Modal/MyModal';
//Hooks
import { useEffect, useState } from 'react';
import { shuffle } from 'lodash';

//Styles
import './index.css';

const App = () => {
  //States
  const [cards, setCards] = useState([]);
  const [twoCards, setTwoCards] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const [numOfTries, setNumOfTries] = useState(0);

  const [renderCount, setRenderCount] = useState(0);
  const numOfCards = 24;

  /* FUNCTIONS */
  //Count Renders

  //Create Deck
  useEffect(() => {
    let deck = [];
    //Get random cards for deck
    while (deck.length < numOfCards) {
      let randomIndex = Math.floor(500 * Math.random());
      if (!deck.includes(randomIndex)) {
        let card = {
          id: randomIndex,
          turned: false,
        };
        deck.push(card, card);
      }
    }
    setCards(() => {
      let shuffledDeck = shuffle(deck);
      let indexedDeck = shuffledDeck.map((card, index) => ({ ...card, index }));
      return indexedDeck;
    });
  }, [endGame]);

  useEffect(() => {
    setRenderCount((prev) => prev + 1);
  }, [cards]);

  /*   Check Right or Wrong and set
  duration of turned card */
  useEffect(() => {
    //let timer1 = setTimeout(() => {
    if (twoCards.length === 2) {
      checkTurnedCards();
    }
    /*  }, 2000);
    return () => {
      clearTimeout(timer1);
    }; */
  }, [turnCard]);

  function turnCard(id, index) {
    //Disable action on clicking the same card
    if (twoCards[0] && twoCards[0].index === index) {
      return;
    }

    if (twoCards.length < 2) {
      let newCards = Array.from(cards);
      let clickedCard = { id, turned: true, index };
      newCards.splice(index, 1, clickedCard);
      setCards(newCards);
      setTwoCards((prevCards) => [...prevCards, clickedCard]);
    }
    if (twoCards.length === 1) {
      setNumOfTries((prev) => prev + 1);
    }
  }

  function checkIfEnd() {
    let cardsCopy = Array.from(cards).find((card) => !card.turned);
    if (!cardsCopy) {
      setTimeout(() => {
        setEndGame(true);
      }, 1000);
    }
  }

  function checkTurnedCards() {
    let card1 = twoCards[0];
    let card2 = twoCards[1];

    //Do when current two cards are not the same
    if (card2.id && card1.id !== card2.id) {
      setTimeout(() => {
        card1.turned = false;
        card2.turned = false;
        let deckCopy = Array.from(cards);
        deckCopy.splice(card1.index, 1, card1);
        deckCopy.splice(card2.index, 1, card2);
        setCards(deckCopy);
        setTwoCards([]);
      }, 2000);
      //Do when current two cards are the same
    } else {
      setTwoCards([]);
      checkIfEnd();
    }
  }

  //Modal Funcs
  function closeModal() {
    window.location.reload(true);
  }

  return (
    <>
      <h1 className='fade-in-down'>MEMORY GAME</h1>
      <h2 className='fade-in-down'>Find All Pairs</h2>
      <MyModal open={endGame} close={closeModal} tries={numOfTries} />
      <div className='cards-container'>
        {cards.map((card) => (
          <Card
            firstRender={renderCount}
            onclick={turnCard}
            key={card.id + Math.floor(12345453 * Math.random())}
            turned={card.turned}
            id={card.id}
            index={card.index}
          />
        ))}
      </div>
    </>
  );
};

export default App;
