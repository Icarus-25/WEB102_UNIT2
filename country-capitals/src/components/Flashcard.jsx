import './Flashcard.css';

const Flashcard = ({ card, flipped, setFlipped }) => {
  const flagUrl = `https://flagcdn.com/w320/${card.code.toLowerCase()}.png`;

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flashcard-container">
      <div 
        className={`flashcard ${flipped ? 'flipped' : ''} ${card.difficulty}`}
        onClick={handleFlip}
      >
        <div className="flashcard-inner">
          
          {/* FRONT - Country + Flag */}
          <div className="flashcard-front">
            <div className="card-content">
              <div className="flag-wrapper">
                <img 
                  src={flagUrl} 
                  alt={`${card.country} flag`} 
                  className="country-flag" 
                />
              </div>
              <p className="label">COUNTRY</p>
              <h2>{card.country}</h2>
            </div>
          </div>

          {/* BACK - Capital */}
          <div className="flashcard-back">
            <div className="card-content">
              <p className="label">CAPITAL CITY</p>
              <h2>{card.capital}</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Flashcard;