import './Flashcard.css';

const Flashcard = ({ card, flipped, setFlipped, onNext }) => {
  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flashcard-container">
      <div 
        className={`flashcard ${flipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flashcard-inner">
          
          {/* FRONT - Country */}
          <div className="flashcard-front">
            <div className="card-content">
              <p className="label">Country</p>
              <h2>{card.country}</h2>
            </div>
          </div>

          {/* BACK - Capital */}
          <div className="flashcard-back">
            <div className="card-content">
              <p className="label">Capital</p>
              <h2>{card.capital}</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Flashcard;