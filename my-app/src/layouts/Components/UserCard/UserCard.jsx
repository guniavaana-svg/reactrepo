import "./UserCard.css";
function user(props){
    return(
        <ul className="userInfo">
            <li><img src={props.img} alt={props.img}/></li>
            <li>firstName: {props.firstName}</li>
            <li>lastName: {props.lastName}</li>
            <li>email: {props.email}</li>
            <li>phone: {props.phone}</li>
        </ul>
    )
   
}
export default user;