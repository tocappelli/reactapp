import { useContext, useState} from "react"
import Itemcount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({id,stock,img,name,price,description})=> {
  
  const [goToCart, setGoToCart] = useState (false)
  const {addItem, getProductQuantity }= useContext(CartContext)
  
  const handleOnAdd = (count) => {
    const productToAdd = {
       id, name, price, count
       
   }
   addItem(productToAdd)
   setGoToCart(true);
   
}


const countAdded = getProductQuantity(id)




return (
    <div className="card text-center bg-ligth animate__animated animate__fadeInUp   ">
    <div >
      <img src={img} alt={name} className="card-img-top imgDetail mt-5" />
    </div>
    <div className="card-body mt-5 ">
      <h2 className="card-title">{name}</h2>
      <p className="card-text text-dark mt-5">{description}</p>
      <p className="card-text text-dark mt-5">Price:${price}</p>
      <p className="card-text text-dark mt-5">Stock:{stock}</p>
        
    </div>
    <div className="countStyles">
    { !goToCart ? <Itemcount onAdd={handleOnAdd} stock={stock} initial={countAdded} /> : <Link className="btn btn-light count mt-5" to='/cart'>Ir al carrito</Link> }
    </div>
    
  </div>
    
  )
}

export default ItemDetail