import TinderCard from "react-tinder-card";

import "./CardContainer.css";
import "./Swipe.css";
import "./SwipeCard.css";

const onSwipe = (direction) => {
  console.log("You swiped: " + direction);
};

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + " left the screen");
};

const TinderFormContainer = (props) => {
  return (
    <div className="card-container">
      {props.items.map((card) => (
        <div key={card.id} className="swipe">
          <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("Card " + card.id)}
            className="swipe-card"
          >
            <img src={card.imgSrc} />
          </TinderCard>
        </div>
      ))}
    </div>
  );
};

export default TinderFormContainer;

/**
 * preventSwipe={["right", "left"]}
 */
