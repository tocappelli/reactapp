import "./ItemCount.css"
import React, {useState} from "react";





const Itemcount =({onAdd})=>{
  const [count, setCount] = useState(0);
  
  const decrease = ()=> {
     setCount (count -1);
  }
  const increase = ()=> {
    setCount (count +1);
 }

const stock = 5



  return (
   <div className="Counter">
    <button disabled={count <=0} onClick={decrease} type="button" className="btn btn-light m-3 span ">-</button>
    <span className="span">{count}</span>
    <button disabled={count >= stock} onClick={increase} type="button" className="btn btn-light m-3 span ">+</button>
      <div className="handleOnAdd">
      <button type="button" className="btn btn-light count" onClick={onAdd} style={{fontFamily:"IMB Plex Mono,monospace", fontSize:"25px"}} >Agregar al carrito</button>
      </div>
      
   </div>
   
  )
}



export default Itemcount;