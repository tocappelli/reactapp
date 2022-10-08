import React from 'react';
import './App.css';
import Navbar from './componentes/NavBar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemAbout from './componentes/ItemAbout/ItemAbout';
import Error from './componentes/Error/Error';









function App() {
/*
  const handleOnAdded= ()=> {
     console.log("se hizo click en agregar al carrito")
  }
*/  

  return (
    <div className="App ">
      <BrowserRouter>
       <Navbar/>
       
      <Routes>
      <Route path="/:about" element= {<ItemAbout/>}/>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path="/category/:categoryId" element={<ItemListContainer />}/>  
      <Route path= "/detail/:productId" element = { <ItemDetailContainer/>}/> 
      <Route path= "*" element={  <Error/> } />
     </Routes>
    </BrowserRouter>
     
  </div>
  );
}

export default App;
