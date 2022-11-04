import ShoppingCart from "./ShoppingCart";
import Footer from './Footer'
import NavBar from "./NavBar";
const Home = () => {
  return (
   <main>
     <NavBar/>
     <section className="app-container">
       <h1 className="your-bag">Your Bag</h1>
       <ShoppingCart />
       <Footer/>
     </section>
   </main>
  )
}

export default Home
