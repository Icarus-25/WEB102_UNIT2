import './App.css';
import { useState } from 'react';
import { americaCards } from './data/americaCards';
import Flashcard from './components/Flashcard';  

const App = () => { 
const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * americaCards.length))
const [flipped, setFlipped] = useState(false)

const currentCard = americaCards[currentIndex] 

const getRandomCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * americaCards.length);
    } while (newIndex === currentIndex);  

    setCurrentIndex(newIndex);
    setFlipped(false);
  };

  
  return (
    <div className="App">
      <div className="header">
        <h1>Capital of America</h1>
        <h2>Can you guess all capitals of the countries in America?</h2>
        <h2>Count: {americaCards.length} </h2>
      </div>

      <Flashcard 
        card={currentCard} 
        flipped={flipped}
        setFlipped={setFlipped}
        onNext={getRandomCard}
      />

      <div className="controls">
        <button onClick={getRandomCard} className="next-btn">
          Next Country →
        </button>
      </div>
      
    </div>
  )
}

export default App