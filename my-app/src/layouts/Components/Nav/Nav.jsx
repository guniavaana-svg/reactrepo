import "./Nav.css";
function nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="#">ჩვენ შესახებ</a>
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
      </ul>
    </nav>
  );
}
export default nav;
