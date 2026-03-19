import logo from "./assets/logo-with-name.svg";
import serviseimg from "./assets/servisesImg/5-პატარა.jpg";

import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
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
        <div className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
        <div className="col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-moon-stars"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
          </svg>
        </div>
      </div>
      <main className="main">
        <section className="mainSection1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
          <div>
            <div className="sliterItem">
              <h3>
                განისაზღვრა 2025-2026 სასწავლო წლის გაზაფხულის სემესტრის
                მობილობის ვადები
              </h3>
              <a href="#">sსრულად წაკითხვა</a>
            </div>
            <div className="sliterItem">
              <h3>
                განისაზღვრა 2025-2026 სასწავლო წლის გაზაფხულის სემესტრის
                მობილობის ვადები
              </h3>
              <a href="#">sსრულად წაკითხვა</a>
            </div>
            <div className="sliterItem">
              <h3>
                განისაზღვრა 2025-2026 სასწავლო წლის გაზაფხულის სემესტრის
                მობილობის ვადები
              </h3>
              <a href="#">sსრულად წაკითხვა</a>
            </div>
            <div className="sliterItem">
              <h3>
                განისაზღვრა 2025-2026 სასწავლო წლის გაზაფხულის სემესტრის
                მობილობის ვადები
              </h3>
              <a href="#">sსრულად წაკითხვა</a>
            </div>
            <div className="sliterItem">
              <h3>
                განისაზღვრა 2025-2026 სასწავლო წლის გაზაფხულის სემესტრის
                მობილობის ვადები
              </h3>
              <a href="#">sსრულად წაკითხვა</a>
            </div>
            <div className="sliterItem">
              <h3>
                განისაზღვრა 2025-2026 სასწავლო წლის გაზაფხულის სემესტრის
                მობილობის ვადები
              </h3>
              <a href="#">sსრულად წაკითხვა</a>
            </div>
            <div className="sliterItem">
              <h3>
                განისაზღვრა 2025-2026 სასწავლო წლის გაზაფხულის სემესტრის
                მობილობის ვადები
              </h3>
              <a href="#">sსრულად წაკითხვა</a>
            </div>
            <div className="sliterItem">
              <h3>
                განისაზღვრა 2025-2026 სასწავლო წლის გაზაფხულის სემესტრის
                მობილობის ვადები
              </h3>
              <a href="#">sსრულად წაკითხვა</a>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </section>
        <section className="mainSection2">
          <h2>სერვისები</h2>
          <div className="servisesItems">
            <div className="servisesItem">
              <div className="imgBox">
                <img src={serviseimg} alt="serviseimg" />
              </div>
              <div className="textBox">
                <h3>უმაღლესი საგანმანათლებლო დაწესებულებები</h3>
                <p>უმაღლესი საგანმანათლებლო დაწესებულებები</p>
              </div>
            </div>
            <div className="servisesItem">
              <div className="imgBox">
                <img src={serviseimg} alt="serviseimg" />
              </div>
              <div className="textBox">
                <h3>უმაღლესი საგანმანათლებლო დაწესებულებები</h3>
                <p>უმაღლესი საგანმანათლებლო დაწესებულებები</p>
              </div>
            </div>
            <div className="servisesItem">
              <div className="imgBox">
                <img src={serviseimg} alt="serviseimg" />
              </div>
              <div className="textBox">
                <h3>უმაღლესი საგანმანათლებლო დაწესებულებები</h3>
                <p>უმაღლესი საგანმანათლებლო დაწესებულებები</p>
              </div>
            </div>
            <div className="servisesItem">
              <div className="imgBox">
                <img src={serviseimg} alt="serviseimg" />
              </div>
              <div className="textBox">
                <h3>უმაღლესი საგანმანათლებლო დაწესებულებები</h3>
                <p>უმაღლესი საგანმანათლებლო დაწესებულებები</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mainSection3">
          <div className="faq">
            <h2>ხშირად დასმული კითხვები</h2>
            <ul>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-journal-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                  </svg>
                  <span>პირველკლასელთა რეგისტრაცია</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-journal-bookmark"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8"
                    />
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                  </svg>
                  <span>ელექტრონული ჟურნალი</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                    />
                  </svg>
                  <span>სტუდენტთა მობილობა</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-display"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145" />
                  </svg>
                  <span>სკოლების პორტალი</span>
                </a>
              </li>
            </ul>
          </div>
          <form className="events">
            <legend>ღონისძიებები</legend>
            <button className="end btn"></button>
            <button className="current btn"></button>
            <div>
              <input type="search" name="search" />
              <p>დასრულებული ღონისძიება არ არსებობს</p>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
