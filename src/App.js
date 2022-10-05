import React from 'react';
import './App.css';
import Itemcount from './componentes/ItemCount/ItemCount';
import Navbar from './componentes/NavBar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';





function App() {
 
  const handleOnAdded= ()=> {
     console.log("se hizo click en agregar al carrito")
  }


  return (
    <div className="App container">
     <Navbar/>
     <ItemListContainer />
     <Itemcount onAdd={handleOnAdded} />
     
    </div>
  );
}

export default App;
