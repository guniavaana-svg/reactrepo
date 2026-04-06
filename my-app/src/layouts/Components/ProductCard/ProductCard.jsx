import "./productCard.css";
import Btn from "../Btn/Btn.jsx";
function product(props){
    const {test, name="name default", brand="brand default", price=10000, currency="GEO", rating=1, img="https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg", description="this is props default", more="this is more"}=props;
    return(
        <div className="product">
            <div className="pro_img_box">
                <img src={img} alt={name} />
            </div>
            <div className="pro_text_box">
                <h3>{name} <strong>{brand}</strong></h3>
                <p>{description}</p>
                <span>{price} {currency}</span>
                <span>rating: {rating}</span>
                {test && <span>this is a {test}</span>}
            </div>
            {props.children}
        </div>
    )
}
export default product;