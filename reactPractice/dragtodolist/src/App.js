import { React, useState } from 'react';
import { Card } from './components/card/Card';
import { CardForm } from './components/cardForm/CardForm';
import {v4 as uuid} from 'uuid';
import './app.css';


function App() {
  const [cards, setCards] = useState([
    {id: uuid(), header: 'Header 1', content: 'Content 1', order: 1},
  ]);
  const [newCard, setNewCard] = useState({});
  const [currentCard, setCurrentCard] = useState(null);

  const addCard = (newCard) => {
    console.log("New Card --------------------",newCard)
    setCards([...cards, {...newCard, order: cards.length + 1}]);
  }

  const dragStartHandler = (e, card) => {
    setCurrentCard(card);
  }
  const dragOverHandler = (e, card) => {
    e.preventDefault();
  }
  console.log(cards)
  const onDropHandler = (e, card) => {
      e.preventDefault();
      console.log("df")
      setCards([...cards].map(c => {
        if (c.id === card.id) {
            return {...c, order: currentCard.order};
        }
        if (c.id === currentCard.id) {
          return {...c, order: card.order};
        }
        return c;
      }));
  }
  
  function sorting (a, b) {
    if (a.order > b.order) return 1;
    else return -1;
  }

  return (
    <div className="App">
      <CardForm addCard={addCard} />
      <hr />
      <div className="cardList">
        {cards.sort(sorting).map((card) => (
          <Card
            key={card.id}
            header={card.header}
            content={card.content}
            onDragStart={(e) => dragStartHandler(e, card)}
            onDragOver={(e) => dragOverHandler(e, card)}
            onDrop={(e) => onDropHandler(e, card)}
            draggable={true}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default App;