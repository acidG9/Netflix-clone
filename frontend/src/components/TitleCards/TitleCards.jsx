import "./TitleCards.css";
import cards_data from "./Cards_data";

const TitleCards = ({ title }) => {
  return (
    <div className="titlecards">
      <h2>{title ? title : "My List"}</h2>
      <div className="card-list">
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="cards" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
