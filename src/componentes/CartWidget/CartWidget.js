import cart from '../../assets/img/cart.svg'
import "./CartWidget.css"

const CartWidget= ()=> {
  return (
     <div>
      <img className='cart' src={cart} alt= "cart" />
      <span className='cart'>5</span> 
     </div> 


  )
}

export default CartWidget