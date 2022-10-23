import "./ItemListContainer.css";
import { useState,useEffect } from "react";
//import { getProducts, getProductByCategory} from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Metronome } from '@uiball/loaders'
import {getDocs,collection, query, where} from "firebase/firestore"
import { db } from "../../service/firebase";



const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const {categoryId}= useParams()
  
  useEffect(()=>{
    setLoading(true)
  
    const collectionRef = categoryId
     ? query(collection(db,"productos"), where ("category", "==", categoryId))
     : collection(db, "productos")
    
    getDocs(collectionRef).then(response=>{
      
      const productsAdapted = response.docs.map(doc=> {
        const data = doc.data()
        console.log(data)
        return {id: doc.id, ...data}
      })

      setProducts(productsAdapted);

      
    }).catch(error => {
      console.log(error)
      
    }).finally(()=>{
      setLoading(false);      
    })
  },[categoryId])

  //  const asyncFunction = categoryId ? getProductByCategory : getProducts
//
 //   asyncFunction(categoryId).then(response=>{
 //     console.log(response);
 //     setProducts(response);
 //   }).finally(()=>{
 //     setLoading(false);
 //   })
    
  
 

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