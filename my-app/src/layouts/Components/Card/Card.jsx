import "./Card.css";
import CardImg from "../../../assets/card.jpg";
function card() {
  return (
    <div className="card">
      <div className="cardImgBox">
        <img src={CardImg} alt="image" />
      </div>
      <div className="cardTextBox">
        <h3>უმაღლესი საგანმანათლებლო დაწესებულებები</h3>
        <p>უმაღლესი საგანმანათლებლო დაწესებულებები უმაღლესი საგანმანათლებლო</p>
      </div>
    </div>
  );
}
export default card;
