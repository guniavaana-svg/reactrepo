import "./App.css";
import Header from "./layouts/Header/Header.jsx";
import Footer from "./layouts/Footer/Footer.jsx";
import Posts from "./layouts/Components/PostCard/PostCard.jsx";
import User from "./layouts/Components/UserCard/UserCard.jsx";
import Product from "./layouts/Components/ProductCard/ProductCard.jsx";
import Recipe from "./layouts/Components/RecipeCard/ResipeCard.jsx";
import Btn from "./layouts/Components/Btn/Btn.jsx";
import postsData from "./layouts/SecData/PostsData.jsx";
import usersData from "./layouts/SecData/UsersData.jsx";
import productData from "./layouts/SecData/ProductData.jsx";
import RecipeData from "./layouts/SecData/RecipeData.jsx";
import Counter from "./layouts/Components/Counter/Counter.jsx";

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
        <section className="productSection">
          <h2>this is product section</h2>
          <div className="products">
            <Product>
              <Btn text="read more"></Btn>
            </Product>
            {console.log(productData)}
            {productData.map(pro=>(
              <Product key={pro.id} test="txt" img={pro.image_url} name={pro.name} brand={pro.brand} description={pro.description}  price={pro.price} currency={pro.currency} rating={pro.rating}>
                <Btn text="properties"></Btn>
              </Product>
            ))}
          </div>
        </section>
        {/* <section className="Cards">
          {ar.map(() => (
            <Card />
          ))}
        </section> */}
        <section className="counter">
          <Counter></Counter>
        </section>
        <section className="recipes">
          <h2>this is recipes section</h2>
          {console.log(RecipeData)}
          <Recipe>
          </Recipe>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
