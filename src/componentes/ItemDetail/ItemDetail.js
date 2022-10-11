import Itemcount from "../ItemCount/ItemCount"
import "./ItemDetail.css"



 const ItemDetail = ({id,stock,img,name,price,description})=> {
  const handleOnAdd = (quantity) => {
    const productToAdd = {
       id, name, price, quantity
   }
   console.log(productToAdd(name))
}
  
  return (
    <div className="card text-center bg-ligth animate__animated animate__fadeInUp mt-5  ">
    <div >
      <img src={img} alt={name} className="card-img-top imgDetail" />
    </div>
    <div className="card-body ">
      <h2 className="card-title">{name}</h2>
      <p className="card-text text-dark">{description}</p>
      <p className="card-text text-dark">Price:${price}</p>
    </div>
    <div className="countStyles">
    <Itemcount  onAdd={handleOnAdd}stock={stock}/>
    </div>
  </div>
    
  )
}

export default ItemDetail