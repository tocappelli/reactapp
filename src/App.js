import React from 'react';
import './App.css';
import Navbar from './componentes/NavBar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';






function App() {
/*
  const handleOnAdded= ()=> {
     console.log("se hizo click en agregar al carrito")
  }
*/

  return (
    <div className="App ">
     <Navbar/>
     <ItemListContainer />
     <ItemDetailContainer />
     
  </div>
  );
}

export default App;
