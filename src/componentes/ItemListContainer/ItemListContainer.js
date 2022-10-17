import "./ItemListContainer.css";
import { useState,useEffect } from "react";
import { getProducts, getProductByCategory} from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Metronome } from '@uiball/loaders'




const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const {categoryId}= useParams()
  
  
  useEffect(()=>{

    const asyncFunction = categoryId ? getProductByCategory : getProducts

    asyncFunction(categoryId).then(response=>{
      console.log(response);
      setProducts(response);
    }).finally(()=>{
      setLoading(false);
    })
    
  },[categoryId])
 

 if(loading){
 return  <div className="d-flex justify-content-center loadStyles">
 <Metronome 
 size={80}
 speed={1.6} 
 color="black" 
/>
</div>
 }
  return( 
    <div className="mt-5">
      <h1 className="titleFont">Comprate los 90´</h1>
     <h1 className="titleFont">Listado de Productos</h1>
     <ItemList products={products}/>
   </div> 

   

 )

} 

export default ItemListContainer