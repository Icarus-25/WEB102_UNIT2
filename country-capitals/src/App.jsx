import './App.css';
import { useState, useEffect } from 'react';
import { americaCards } from './data/americaCards';
import Flashcard from './components/Flashcard';

const App = () => {
  const [allCards] = useState(americaCards);           // Original fixed order
  const [cards, setCards] = useState([...americaCards]); // Current working deck
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [mastered, setMastered] = useState(new Set());

  const currentCard = cards[currentIndex];

  // Lenient answer checker
  const isCorrectAnswer = (userGuess, correctCapital) => {
    const cleanGuess = userGuess.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    const cleanCorrect = correctCapital.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    
    return cleanGuess === cleanCorrect || 
           cleanCorrect.includes(cleanGuess) || 
           cleanGuess.includes(cleanCorrect);
  };

  const handleSubmitGuess = () => {
    if (!guess.trim() || !currentCard) return;

    const isCorrect = isCorrectAnswer(guess, currentCard.capital);

    if (isCorrect) {
      setFeedback('correct');
      setFlipped(true);
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > longestStreak) setLongestStreak(newStreak);
    } else {
      setFeedback('incorrect');
      setCurrentStreak(0);
    }
  };

  const markAsMastered = () => {
    if (!currentCard) return;
    setMastered(prev => new Set(prev).add(currentCard.id));
    
    // Remove from current deck
    const newDeck = cards.filter(card => card.id !== currentCard.id);
    setCards(newDeck);
    
    // Adjust index if needed
    if (currentIndex >= newDeck.length) {
      setCurrentIndex(Math.max(0, newDeck.length - 1));
    }
    
    setFlipped(false);
    setGuess('');
    setFeedback('');
  };

  const shuffleDeck = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setFlipped(false);
    setGuess('');
    setFeedback('');
  };

  const changeCard = (newIndex) => {
    setCurrentIndex(newIndex);
    setFlipped(false);
    setGuess('');
    setFeedback('');
  };

  const goToNext = () => {
    if (currentIndex < cards.length - 1) {
      changeCard(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      changeCard(currentIndex - 1);
    }
  };

  const getRandomCard = () => {
    if (cards.length <= 1) return;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cards.length);
    } while (newIndex === currentIndex);
    changeCard(newIndex);
  };

  // Reset when deck becomes empty
  useEffect(() => {
    if (cards.length === 0) {
      alert("Congratulations! You've mastered all cards!");
      setCards([...allCards]);
      setMastered(new Set());
      setCurrentIndex(0);
      setCurrentStreak(0);
    }
  }, [cards.length, allCards]);

  return (
    <div className="App">
      <div className="header">
        <h1>Country Capitals of America</h1>
        <h2>Can you guess all capitals of the countries in America?</h2>
        <p className="total-cards">
          Card <strong>{currentIndex + 1}</strong> of <strong>{cards.length}</strong>
        </p>
        
        <div className="stats">
          <p>Current Streak: <strong>{currentStreak}</strong> 🔥</p>
          <p>Longest Streak: <strong>{longestStreak}</strong></p>
          <p>Mastered: <strong>{mastered.size}</strong> / {allCards.length}</p>
        </div>
      </div>

      {cards.length > 0 && (
        <Flashcard 
          card={currentCard} 
          flipped={flipped}
          setFlipped={setFlipped}
        />
      )}

      {/* Guess Section */}
      <div className="guess-section">
        <h3>What's the capital of {currentCard?.country}?</h3>
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

      {/* Action Buttons */}
      <div className="actions">
        <button onClick={markAsMastered} className="master-btn">
          ✓ Mark as Mastered
        </button>
        <button onClick={shuffleDeck} className="shuffle-btn">
          🔀 Shuffle Deck
        </button>
      </div>

      {/* Navigation */}
      <div className="navigation">
        <button onClick={goToPrevious} disabled={currentIndex === 0} className="nav-btn prev-btn">
          ← Previous
        </button>

        <button onClick={getRandomCard} className="random-btn">
          🎲 Random Card
        </button>

        <button onClick={goToNext} disabled={currentIndex === cards.length - 1} className="nav-btn next-btn">
          Next →
        </button>
      </div>
    </div>
  );
};

export default App;