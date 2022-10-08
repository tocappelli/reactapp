import "./Item.css"
import { Link } from "react-router-dom"


const Item = ({id,img,name,category,price})=> {
  
  return (
    
    <div className="d-flex d-inline-flex justify-content-center cardStyle m-3 ">
      <div className="card border border-end-0 " >
          <img src={img} className="card-img-top" style={{width: 400}}alt={name}/>
        <div className="card-body ">
          <h5 className="card-title cardName">{name}</h5>
          <p className="card-text">{category}</p>
          <p className="card-text">${price}</p>
           <Link className="btn btn-light" to={`/detail/${id}`}>Ver Detalle</Link>
          
          
       </div>
     </div>
   </div>
  )
  
}


export default Item