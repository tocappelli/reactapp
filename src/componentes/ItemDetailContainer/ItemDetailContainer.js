import {useState,useEffect} from "react"
import {getProductById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { Metronome } from '@uiball/loaders'


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
    return <div className="d-flex justify-content-center loadStyles">
    <Metronome 
    size={80}
    speed={1.6} 
    color="black" 
   />
   </div>
    }
    
    
    return( 
      <div>
        <ItemDetail {...product} /> 
     </div> 
  
     
  
   )   
}

export default ItemDetailContainer