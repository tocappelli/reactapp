import {useState,useEffect} from "react"
import {getProductById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ()=> {
  const [product,setProduct] = useState({})
  const [loading,setLoading] = useState(true)
  const {productId} = useParams()
  
  

  useEffect(()=>{
    getProductById(productId).then(response=>{
     setProduct(response);
    }).finally(()=>{
      setLoading(false);
    })
    
  },[productId])

  if(loading){
    return <div className="spinner-border" role="status"></div>
    }
    
    
    return( 
      <div>
        <ItemDetail {...product} /> 
     </div> 
  
     
  
   )   
}

export default ItemDetailContainer