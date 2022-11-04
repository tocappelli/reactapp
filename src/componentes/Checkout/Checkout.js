import "./Checkout.css"
import { CartContext } from '../../context/CartContext'
import { useContext } from "react";
import { useState } from 'react';
import React from 'react';
import { addDoc, collection, getDocs, getFirestore, query, where, documentId, writeBatch } from 'firebase/firestore';
import { useNavigate } from "react-router-dom"
import swal from "sweetalert";



const Checkout = ()=>{

  const { cart, total, totalQuantity, clearCart,getTotal} = useContext(CartContext)

  const [ name, setName] = useState('')
  const [ lastName, setLastName] = useState('')
  const [ email, setEmail] = useState('')
  const [email1, setEmail1] = useState('')
  const [ coments, setComents] = useState('')
  const navigate = useNavigate()

  const eValidate = (e) => {
    e.preventDefault()
   }












    const generateOrder = async (e) => {

     
      e.preventDefault();

      const db = getFirestore();


        





        if (!name && !email && !lastName )
        {
            const alert = () => {
                swal({
                    title: "Complete todos los campos.",
                    text: `Es necesario  para enviar la orden.`,
                    icon: "warning"
                })
            }

            alert()
        }
    else {
    
        const order = {
            comprador: {
                nombre: name,
                apellido: lastName,
                email: email,
                comentarios: coments,
            },
            Productos: cart.map(product => ({ id: product.id, titulo: product.name, cantidad: product.count })),

            Total: getTotal(cart)

          }






        const batch = writeBatch(db)

        const outOfStock = []

        const ids = cart.map(prod => prod.id)

        const productsRef = collection(db, 'productos')

        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

        const { docs } = productsAddedFromFirestore

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedtoCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedtoCart?.count

            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity })

            } else {
                outOfStock.push({ id: doc.id, ...dataDoc })

            }
        })


        if (outOfStock.length === 0) {
            await batch.commit()

            const ordersCollection = collection(db, 'ordenes');
            const orderAdded = await addDoc(ordersCollection, order)


            const alert = () => {
              swal({
                    title: "Orden Creada.",
                    text: `El id de su orden es: ${orderAdded.id}`,
                    icon: "success",
                     
                    
                })
            }

            alert()
            clearCart(cart)
            setTimeout(() => {
                navigate('/')
            }, 2000)

          




        } else {
            const alert = () => {
              swal({
                    title: "Sin Stock",

                    icon: "warning"
                })
            }

            alert()



        }

    }
    


}


  
  

  return(
    <div className="container mt-5">
       
        <div className="row">
        <h5>Usted esta comprando:</h5>
        {cart.map(prod => {
                        return (
                            <div key={prod.id} className=" justify-content-center">
                                 
                                <h6>Producto: {prod.name}</h6>
                                <h6>Cantidad:{prod.count}</h6>
                                
                            </div>
                            )
                          })}
        <div className="row mt-5">
            
           <h3>Cantidad Total de Productos:{totalQuantity}</h3>
           <h3>Valor total de la compra: ${total}</h3>
           <h1 className="mt-5">Completa los datos para generar la orden</h1>
          </div>                  

        </div>


        
        


           
              

       
       <div className="row g-3 mt-5">
        <div className="col">
        <label className="form-label label">Nombres</label>
        <input type="text" className="form-control btnOrden" placeholder="First name" aria-label="First name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="col">
        <label className="form-label label">Apellidos</label>
        <input type="text" className="form-control btnOrden" placeholder="Last name" aria-label="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
       </div>
       <div className="row g-3 mt-5">
        <div className="col">
        <label className="form-label label">Email</label>
        <input type="email" className="form-control btnOrden" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="col">
        <label className="form-label label">Confirme Email</label>
        <input type="email" className="form-control btnOrden" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={email1}  onChange={(e) => setEmail1(e.target.value)}/>
        </div>
       </div>
       <div className="d-grid gap-2 mt-5 btnOrden">
        Aclaraciones
       <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={coments} onChange={(e) => setComents(e.target.value)}></textarea>
       </div>
       <div className="d-grid gap-2 mt-5 btnOrden">

      { email===email1 ? <button className="btn btn-secondary btnOrden" type="button"  onClick={generateOrder}>Generar Orden</button>: <button className="btn btn-secondary btnOrden" type="button"  onClick={eValidate} style={{background: 'red'}}>No coinciden los correos</button>}
      
      </div>
  
    </div>
        
    


  )
}

export default Checkout