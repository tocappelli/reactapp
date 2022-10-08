import "./ItemListContainer.css";
import { useState,useEffect } from "react";
import { getProducts, getProductByCategory} from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const {categoryId}= useParams()
  console.log(categoryId)
  
  useEffect(()=>{

    const asyncFunction = categoryId ? getProductByCategory : getProducts

    asyncFunction(categoryId).then(response=>{
      console.log(response);
      setProducts(response);
    }).finally(()=>{
      setLoading(false);
    })
    
  },[categoryId])
 
// console.log (products)
 //const productsMap = products.map(prod =>{prod.name})
 //console.log(productsMap)
 if(loading){
 return <div className="spinner-border" role="status"></div>
 }
  return( 
    <div className="mt-5">
      <h1>Comprate los 90´</h1>
     <h1>Listado de Productos</h1>
    <ItemList products={products}/>
   </div> 

   

 )

} 

export default ItemListContainer