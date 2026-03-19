import "./App.css";
import serviseimg from "./assets/servisesImg/5-პატარა.jpg";
import Header from "./Header";
import Footer from "./Footer";
import MainSlider from "./MainSlider";
import Card from "./Card/Card";

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <MainSlider></MainSlider>
        <Card name="susana" count="30" isHuman='false'></Card>
        {/* <section className="mainSection1">
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
        </section> */}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
