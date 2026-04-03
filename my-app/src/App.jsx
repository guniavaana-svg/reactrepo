import "./App.css";
import Header from "./layouts/Header/Header.jsx";
import Footer from "./layouts/Footer/Footer.jsx";
import Posts from "./layouts/Components/PostCard/PostCard.jsx";
import User from "./layouts/Components/UserCard/UserCard.jsx";
import postsData from "./layouts/SecData/PostsData.jsx";
import usersData from "./layouts/SecData/UsersData.jsx";
const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <>
      <Header/>
      <main className="main container">
        <section className="postsSection">
          <h2>this is posts section</h2>
          <div className="posts">
            {postsData.map(post=>(
             <Posts key={post.id} img={post.image} title={post.title} description={post.description}></Posts>
          ))}
          </div>
        </section>
        <section className="usersSection">
          <h2>this is Users section</h2>
          <div className="users">
            {usersData.map(user=>(
              <User key={user.id} firstName={user.firstName} lastName={user.lastName} email={user.email} phone={user.phone} img={user.avatar}></User>
            ))}
          </div>
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
