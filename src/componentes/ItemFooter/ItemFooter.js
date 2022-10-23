import React from 'react'

import "./ItemFooter.css" 

const ItemFooter = ()=> {
  return (
    <div className='container-fluid footerContainer'>
      <div className="row p-5 bg-ligth text-dark footerStyles ">
     <hr></hr>
        <div className="col-xs-12 col-md-6 col-lg-4">
          <p className='h5 '>Contacto</p>
          <p className='h6 m-3'>115478-2712</p>
          <p className='h6 m-3'>tocappelli@gmail.com</p>
          <a rel="noreferrer" href="https://www.linkedin.com/in/tocappelli/"  target="_blank" className='refStyles '>Linkedin</a>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-4">
          <p className='h5 '>CURSOS REALIZADOS EN CODER HOUSE</p>
          <p className='h6 m-3'>Desarrollo Web</p>
          <p className='h6 m-3'>JavaScript</p>
          <p className='h6'>React Js</p>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-4 row">
        <p className='h5 '>Github</p>
           <a rel="noreferrer" href="https://tocappelli.github.io/tercerentrega/"  target="_blank" className='refStyles '>Proyecto DW</a>  
           <a rel="noreferrer" href="https://tocappelli.github.io/localStorage/"  target="_blank" className='refStyles '>Proyecto Js</a>
           <a rel="noreferrer" href="https://github.com/tocappelli/reactapp"  target="_blank" className='refStyles '>Proyecto React Js</a>
          </div>
        <div className="col-xs-12 col-md-6 col-lg-12 mt-5">
            <p className='h6'>© 2022 Tomas Cappelli</p>
            <hr></hr>
          </div>
      </div>

    </div>
  )
}
export default ItemFooter