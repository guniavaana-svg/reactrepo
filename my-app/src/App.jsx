import "./App.css";
import Header from "./layouts/Header/Header.jsx";
import Footer from "./layouts/Footer/Footer.jsx";
import Posts from "./layouts/SecData/PostsData/PostsData.jsx";
import Users from "./layouts/SecData/UsersData/UsersData.jsx";
const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <>
      <Header></Header>
      <main className="main container">
        <section className="postsSection">
          <h2>this is posts section</h2>
          <Posts />
        </section>
        <section className="usersSection">
          <h2>this is Users section</h2>
          <Users />
        </section>
        {/* <section className="Cards">
          {ar.map(() => (
            <Card />
          ))}
        </section> */}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
