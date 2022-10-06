import Itemcount from "../ItemCount/ItemCount"
import "./ItemDetail.css"


 const ItemDetail = ({img,name,category,price,description})=> {
  return (
    <div className="card text-center bg-ligth animate__animated animate__fadeInUp">
    <div>
      <img src={img} alt={name} className="card-img-top imgDetail" />
    </div>
    <div className="card-body ">
      <h2 className="card-title">{name}</h2>
      <p className="card-text text-dark">{description}</p>
      <p className="card-text text-dark">${price}</p>
      <p className="card-text text-dark">{category}</p>
      <span className="countStyles"><Itemcount/></span>

      
    </div>
  </div>
    
  )
}

export default ItemDetail