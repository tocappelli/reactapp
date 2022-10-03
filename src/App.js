import React from 'react';
import './App.css';
import Navbar from './componentes/NavBar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Itemcount from './componentes/ItemCount/ItemCount';




function App() {
 
  const handleOnAdded= ()=> {
     console.log("se hizo click en agregar al carrito")
  }


  return (
    <div className="App">
     <Navbar/>
     <ItemListContainer saludo={"Listado de productos"} />
     <Itemcount onAdd={handleOnAdded} />
     
    </div>
  );
}

export default App;
