import { useGlobalContext } from "../context";
const Footer = () => {
  const {clearCart,state}=useGlobalContext();
  if(state.count===0){
    return (
      <footer className="empty-cart">
        <h3>is Currently Empty.</h3>
      </footer>
    )
  }
  return (

    <footer>
      <hr />
      <div className="cart-total">
        <h3>total</h3>
        <h3 className="cart-price">{`$ ${state.total}`}</h3>
      </div>
      <button className="clear__cart-btn" onClick={clearCart}>Clear Cart</button>
    </footer>
  )
}

export default Footer
