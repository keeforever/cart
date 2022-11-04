import {FaAngleUp,FaAngleDown} from 'react-icons/fa'
import { useGlobalContext } from '../context';

const Product = ({product}) => {
  const {addCart,removeCart,removeProduct}=useGlobalContext();

  const {title,price,img,id,amount}=product
  return (
    <section className="product__cart-wrapper">
      <div className="product__img">
        <img src={img} alt={title} />
      </div>
      <div className="product__info">
        <h3 className="product__title">{title}</h3>
        <h3 className="product__price">{price}</h3>
        <button className="remove__cart-btn txt-btn" onClick={()=>removeProduct(id)}>Remove</button>
      </div>
      <div className="add__cart">
        <button className="txt-btn inc-btn" onClick={()=>addCart(id)}><FaAngleUp/></button>
        <span className="quantity">{amount}</span>
        <button className="txt-btn dec-btn" onClick={()=>removeCart(id)}><FaAngleDown/></button>
      </div>
    </section>
  )
}

export default Product
