import { useContext} from "react"
import Itemcount from "../ItemCount/ItemCount"
import "./ItemDetail.css"


import { CartContext } from "../../context/CartContext"




 const ItemDetail = ({id,stock,img,name,price,description})=> {
  
  const {addItem}= useContext(CartContext)
  
  const handleOnAdd = (quantity) => {
    const productToAdd = {
       id, name, price, quantity
       
   }
   addItem(productToAdd)
}



return (
    <div className="card text-center bg-ligth animate__animated animate__fadeInUp   ">
    <div >
      <img src={img} alt={name} className=" imgDetail mt-5" />
    </div>
    <div className="card-body mt-5 ">
      <h2 className="card-title">{name}</h2>
      <p className="card-text text-dark mt-5">{description}</p>
      <p className="card-text text-dark mt-5">Price:${price}</p>
      <p className="card-text text-dark mt-5">Stock:{stock}</p>
      
    </div>
    <div className="countStyles">
      <Itemcount onAdd={handleOnAdd} stock={stock} />
    </div>
    
  </div>
    
  )
}

export default ItemDetail