import "./ItemCount.css"
import React, {useState} from "react";







const Itemcount =({stock = 0, initial = 0, onAdd})=>{
  const [quantity, setQuantity] = useState(initial);
  

  

  const increase = ()=> {
    if (quantity < stock){
      setQuantity(quantity + 1);
    }
  }
  const decrease = ()=> {
    if (quantity > 1){
      setQuantity(quantity - 1);
    }
  }


 return (
   <div className="Counter">
    <h2 className="count">Cantidad</h2>
    <button  onClick={decrease} type="button" className="btn btn-light m-3 span  ">-</button>
    <span className="span">{quantity}</span>
    <button onClick={increase} type="button" className="btn btn-light m-3 span ">+</button>
      <div className="handleOnAdd">
      <button type="button" className="btn btn-light count" onClick={()=> onAdd(quantity)} style={{fontFamily:"IMB Plex Mono,monospace", fontSize:"25px"}} >Agregar al carrito</button>
      </div>
      
   </div>
   
  )
}



export default Itemcount;