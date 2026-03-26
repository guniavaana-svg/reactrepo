import "./App.css";
import Header from "./layouts/Header/Header.jsx";
import Footer from "./layouts/Footer/Footer.jsx";
import Card from "./layouts/Components/Card/Card.jsx";

const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <>
      <Header></Header>
      <main className="main container">
        <section className="Cards">
          {ar.map(() => (
            <Card />
          ))}
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
