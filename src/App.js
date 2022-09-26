import React from 'react';
import './App.css';
import Navbar from './componentes/NavBar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ItemListContainer saludo={"VOLVELO A COMPRAR"} />
    </div>
  );
}

export default App;
