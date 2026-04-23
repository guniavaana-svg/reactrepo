import "./Resipecard.css";
function recipeCard(props) {
  const {
    name = "recipe name",
    ingredients = "recipe ingredients",
    instructions = "recipe instructions",
    prepTimeMinutes = 0.0,
    cookTimeMinutes = 0.0,
    difficulty = "recipe difficulty",
    cuisine = "Italian",
    image = "recipe image",
  } = props;
  return (
    <>
      <div className="recipe">
        <div className="recipe_img_box">
          <img src={image} alt={image} />
        </div>
        <div className="recipe_text_box">
          <h3>{name}</h3>
          <h4>ingredient</h4>
          <ul>
            <li>{ingredients}</li>
          </ul>
          <h4>instructions</h4>
          <ul>
            <li>{instructions}</li>
          </ul>
          <span>
            prepTimeMinutes <strong>{prepTimeMinutes}</strong> cookTimeMinutes
            <strong>{cookTimeMinutes}</strong>
          </span>
          <span>{cuisine}</span>
        </div>
      </div>
    </>
  );
}
export default recipeCard;
