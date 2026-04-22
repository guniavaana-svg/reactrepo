import "./Resipecard.css";
function recipeCard(props){
    const {
        name="recipe name", 
        ingredients="recipe ingredients",
        instructions="recipe instructions",
        prepTimeMinutes=0.0,
        cookTimeMinutes=0.0,
        difficulty="recipe difficulty",
        cuisine="Italian",
        image="recipe image"
     }=props;
    return(
        <>
        <div className="recipe">
            <div className="recipe_img_box">
                <img src={image} alt={image}/>
            </div>
            <div className="recipe_text_box">
                <h3>{name}</h3>
                <ul>{ingredients}</ul>
            </div>
        </div>
        
        </>
    )
}
export default recipeCard;