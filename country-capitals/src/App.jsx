import './App.css';
import { useState } from 'react';
import { americaCards } from './data/americaCards';
import Flashcard from './components/Flashcard';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const currentCard = americaCards[currentIndex];

  const handleSubmitGuess = () => {
    if (!guess.trim()) return;

    const userAnswer = guess.trim().toLowerCase();
    const correctAnswer = currentCard.capital.toLowerCase();

    if (userAnswer === correctAnswer) {
      setFeedback('correct');
      setFlipped(true);
    } else {
      setFeedback('incorrect');
    }
  };

  const changeCard = (newIndex) => {
    setCurrentIndex(newIndex);
    setFlipped(false);
    setGuess('');
    setFeedback('');
  };

  const goToNext = () => {
    if (currentIndex < americaCards.length - 1) {
      changeCard(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      changeCard(currentIndex - 1);
    }
  };

  const getRandomCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * americaCards.length);
    } while (newIndex === currentIndex);
    changeCard(newIndex);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Country Capitals of America</h1>
        <h2>Can you guess all capitals of the countries in America?</h2>
        <p className="total-cards">
          Card <strong>{currentIndex + 1}</strong> of <strong>{americaCards.length}</strong>
        </p>
      </div>

      <Flashcard 
        card={currentCard} 
        flipped={flipped}
        setFlipped={setFlipped}
        feedback={feedback}
      />

      {/* Guess Input */}
      <div className="guess-section">
        <h3>What's the capital of {currentCard.country}?</h3>
        <div className="input-group">
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Type your guess here..."
            className="guess-input"
            onKeyPress={(e) => e.key === 'Enter' && handleSubmitGuess()}
          />
          <button onClick={handleSubmitGuess} className="submit-btn">
            Submit Guess
          </button>
        </div>

        {feedback && (
          <p className={`feedback ${feedback}`}>
            {feedback === 'correct' ? '✅ Correct!' : '❌ Incorrect. Try again!'}
          </p>
        )}
      </div>

      {/* Navigation */}
      <div className="navigation">
        <button 
          onClick={goToPrevious} 
          disabled={currentIndex === 0}
          className="nav-btn prev-btn"
        >
          ← Previous
        </button>

        <button onClick={getRandomCard} className="random-btn">
          🎲 Random Card
        </button>

        <button 
          onClick={goToNext} 
          disabled={currentIndex === americaCards.length - 1}
          className="nav-btn next-btn"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default App;