import {useState,useEffect} from "react"
//import {getProductById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { Metronome } from '@uiball/loaders'
import { useNavigate } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/firebase";



const ItemDetailContainer = ()=> {
  const [product,setProduct] = useState({})
  const [loading,setLoading] = useState(true)
  const {productId} = useParams()
  const navigate = useNavigate();
  
  

  useEffect(()=>{
    const docRef = doc(db,"productos",productId)

    getDoc(docRef).then(response =>{
      const data = response.data()
      const productAdapted = {id: response.id, ...data}
      setProduct(productAdapted) 
    }).finally(()=>{
      setLoading(false);
    }) 
   // getProductById(productId).then(response=>{
   //  setProduct(response);
   // }).finally(()=>{
   //   setLoading(false);
   // })
    
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
        <button className="btn btn-light count mt-5" onClick={() => navigate(-1)} style={{fontFamily:"IMB Plex Mono,monospace", fontSize:"18px"}} >Volver Atras</button> 
     </div> 
  
     
  
   )   
}

export default ItemDetailContainer