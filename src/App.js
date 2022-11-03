import React from 'react';
import './App.css';
import Navbar from './componentes/NavBar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemAbout from './componentes/ItemAbout/ItemAbout';
import Error from './componentes/Error/Error';
import ItemFooter from './componentes/ItemFooter/ItemFooter';
import CartProvider from './context/CartContext';
import ItemCart from './componentes/ItemCart/ItemCart';
import Checkout from './componentes/Checkout/Checkout';









function App() {


  return (
    <div className="App ">
      <CartProvider>
          <BrowserRouter>
           <Navbar/>
               <Routes>
                 <Route path="/about" element= {<ItemAbout/>}/>
                 <Route path='/' element={<ItemListContainer />}/>
                 <Route path="/category/:categoryId" element={<ItemListContainer />}/>  
                 <Route path= "/detail/:productId" element = { <ItemDetailContainer/>}/> 
                 <Route path= "*" element={<Error/>}/>
                 <Route path="/cart" element={<ItemCart />} />
                 <Route path='/checkout' element={<Checkout />} />
               </Routes>
           <ItemFooter />
         </BrowserRouter>
      </CartProvider>
    
     
    </div>
  );
}

export default App;
