import PropTypes from 'prop-types';
import cardImg from '../assets/cardImg.jpg';
import styles from './Card.module.css';
function Card(props){
    //props is Object
    return(
        <div className={styles.card}>
            <img src={cardImg} alt="card image" />
            <h2>this is card</h2>
            <span>Card name is {props.name}</span><br />
            <span>Card is used {props.count} times</span><br />
            <span>card is {props.isHuman?'human':'something else'}</span>
            <p>this card is about something</p>
        </div>
    )
}
Card.PropTypes={
    name:PropTypes.string,
    const:PropTypes.number,
    isHuman:PropTypes.bool,
}
Card.defaultProps={
    name:"default card",
    const:1,
    isHuman: true,
}
export default Card;