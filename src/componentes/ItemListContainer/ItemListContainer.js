import "./ItemListContainer.css";
import { useState,useEffect } from "react";
import { getProduct } from "../../asyncMock";

const ItemListContainer = ({saludo}) => {
  const [products, setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  
  useEffect(()=>{
    getProduct().then(response=>{
      console.log(response);
      setProducts(response);
    }).finally(()=>{
      setLoading(false);
    })
    
  },[])
 
// console.log (products)
 //const productsMap = products.map(prod =><li>{prod.name}</li>)
 //console.log(productsMap)
 if(loading){
 return <div className="spinner-border" role="status"></div>
 }
  return( 
    <div>
     <h1>{saludo}</h1>
     {products.map(prod => <li key={prod.id} style={{fontFamily:"IMB Plex Mono,monospace", fontSize:"25px"}}>{prod.name}</li>)}
   </div>

   

 )

} 

export default ItemListContainer