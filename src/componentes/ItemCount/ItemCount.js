import "./ItemCount.css"
import React, {useState} from "react";







const Itemcount =({stock , initial = 1, onAdd})=>{
  const [count, setCount] = useState(initial);
  

  

  const increase = ()=> {
    if (count < stock){
      setCount(count + 1);
    }
  }
  const decrease = ()=> {
    if (count > 1){
      setCount(count - 1);
    }
  }
  


 return (
   <div className="Counter">
    <h2 className="count">Cantidad</h2>
    <button  onClick={decrease} type="button" className="btn btn-light m-3 span  ">-</button>
    <span className="span">{count}</span>
    <button onClick={increase} type="button" className="btn btn-light m-3 span ">+</button>
      
      <div className="handleOnAdd">
      <button type="button" className="btn btn-light count" onClick={()=> onAdd(count)} style={{fontFamily:"IMB Plex Mono,monospace", fontSize:"20px"}} >Agregar al carrito</button> 
      
      </div>
      
   </div>
   
  )
}



export default Itemcount;