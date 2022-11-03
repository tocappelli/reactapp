import { useNavigate } from 'react-router-dom';
import React from 'react';
 import { CartContext } from '../../context/CartContext';
 import { useContext } from 'react';
 import "./ItemCart.css"
 import trash from "../../assets/img/trash-outline.svg"
 import { Link } from 'react-router-dom';




const ItemCart = () => {
  const navigate = useNavigate();
  const {cart,removeItem, total,clearCart}= useContext(CartContext)
  
  if (cart.length === 0) {
    return( 
       <div>
       <h1 className='mt-5'>El carrito esta vacio</h1>
       <Link className="btn btn-light m-5" to={'/'}> <h6 className='emptyCart'>Volver a la tienda</h6> </Link>
       </div>
    )
   }  
 

  return ( 
      <div className='container'>
          <h3>Carrito</h3>
          {cart.map(prod=>( 
               <table className="table table-dark mt-5" key={prod.id}>
                  <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio por unidad</th>
                        <th>Subtotal</th>
                        <th>Eliminar</th>
                      </tr>
                 </thead>
                    <tbody>
                      <tr>
                        <td>{prod.name}</td>
                        <td>{prod.count}</td>
                        <td>${prod.price}</td>
                        <td>${prod.count * prod.price}</td>
                        <td><button type="button" className="btn btn-light" onClick={()=> removeItem(prod.id)}><img className='cart' src={trash} alt= "trash" style={{  width: 20}} /></button></td>
                      </tr>
                 </tbody>
             </table>
                 

            ))
          }
       <div className='mt-5'>
            <h2>Precio Total: $ {total}</h2>
            <Link to='/checkout'><button type="button" className="btn btn-light count mt-3" style={{fontFamily:"IMB Plex Mono,monospace", fontSize:"20px"}} >Continuar Compra</button></Link>
            
          </div>
          <div className='mt-5'>
          <button type="button" className="btn btn-light count" onClick={()=> clearCart()} style={{fontFamily:"IMB Plex Mono,monospace", fontSize:"15px"}} >Limpiar Carrito</button>
          
          </div>
          
          <button className="btn btn-light count mt-5" onClick={() => navigate(-1)} style={{fontFamily:"IMB Plex Mono,monospace", fontSize:"18px"}}>Volver Atras</button>





          </div> 
          
      



      
   );
}

export default ItemCart;