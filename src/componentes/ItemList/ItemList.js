import Item from "../Item/Item"

const ItemList =({products})=>{
  console.log(products)
  return (
    <div>
    {products.map(prod => <Item key={prod.id}  img ={prod.img} name={prod.name} category={prod.category} price= {prod.price} id={prod.id} stock={prod.stock}/>)}
    </div>
  )
}

export default ItemList