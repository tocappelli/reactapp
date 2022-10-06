import {useState,useEffect} from "react"
import {getProductById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ()=> {
  const [product,setProduct] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    getProductById(9).then(resolve=>{
      console.log(resolve);
      
      setProduct(resolve);
    }).finally(()=>{
      setLoading(false);
    })
    
  },[])

  if(loading){
    return <div className="spinner-border" role="status"></div>
    }
    
    return( 
      <div>
        <ItemDetail key={product.id}{...product}/>
     </div> 
  
     
  
   )   
}

export default ItemDetailContainer