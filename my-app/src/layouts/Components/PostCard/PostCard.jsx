import "./PostCard.css";
function posts(props) {
  return (
        <div className="post">
            <img src={props.img} alt="" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
  );
}
export default posts;