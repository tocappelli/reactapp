import { useContext } from 'react'
import cart from '../../assets/img/minecart.svg'
import { CartContext } from '../../context/CartContext'
import "./CartWidget.css"
import { Link } from 'react-router-dom'



const CartWidget= ()=> {
   

   const  { totalQuantity } = useContext(CartContext)



  return (
     <div className='d-flex container mt-5'>
     <Link to='/cart'><img className='cart me-3' src={cart} alt= "cart" /></Link> 
      <div className='fs-3 cart'>
      {totalQuantity}
      </div>
     </div> 


  )
}

export default CartWidget