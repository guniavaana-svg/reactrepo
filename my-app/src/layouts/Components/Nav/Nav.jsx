import "./Nav.css";
import AboutUs from "../../../Pages/AboutUs.jsx";
import navData from "../../SecData/NavData.jsx";
function goToPage(){
  const state={page: "about"};
  history.pushState(state, " ", "/about");
  document.body.innerHTML="<h2>this is about page</h2>"
  root.render(<AboutUs/>)
}
function nav() {
  return (
    <nav className="nav">
      {/* <ul>
        <li>
          <a onClick={(e)=>{
            e.preventDefault();
            goToPage()
          }}>ჩვენ შესახებ</a>
          <ul>
            <li>
              <a href="#">მისია, მიზნები, სტრატეგია</a>
            </li>
            <li>
              <a href="#">ჩვენი გუნდი / სტრუქტურა</a>
            </li>
            <li>
              <a href="#">ხშირად დასმული კითხვები - FAQ</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">სერვისები</a>
          <ul>
            <li>
              <a href="#">სკოლამდელი განათლება</a>
            </li>
            <li>
              <a href="#">ზოგადი განათლება</a>
            </li>
            <li>
              <a href="#">პროფესიული განათლება</a>
            </li>
            <li>
              <a href="#">უმაღლესი განათლება</a>
            </li>
            <li>
              <a href="#">სხვა</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">სიახლეები</a>
        </li>
        <li>
          <a href="#">საჯარო ინფორმაცია</a>
        </li>
        <li>
          <a href="#">კონტაქტი</a>
        </li>
      </ul> */}
      <ul>
        {navData.map(nav=>(
          <li key={nav.id}><a href={nav.link}>{nav.title}</a></li>
        ))}
      </ul>
    </nav>
  );
}
export default nav;
