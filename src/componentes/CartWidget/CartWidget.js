import { useContext } from 'react'
import cart from '../../assets/img/minecart.svg'
import { CartContext } from '../../context/CartContext'
import "./CartWidget.css"



const CartWidget= ()=> {
   const {getQuantity} = useContext(CartContext)

   const quantity = getQuantity()



  return (
     <div className='d-flex container'>
      <img className='cart' src={cart} alt= "cart" />
      <div className='fs-4'>
      {quantity}
      </div>
     </div> 


  )
}

export default CartWidget