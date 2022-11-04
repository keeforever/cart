// import products from "../data";
import Product from "./Product";
import { useGlobalContext } from "../context";

const ShoppingCart = () => {
  const {state} = useGlobalContext();

  return (
    <section className="shopping__cart-wrapper">
      {
        state.products.map((product,index)=>
          <Product key={index} product={product} />
        )
      }
    </section>
  )
}

export default ShoppingCart;
