import React from 'react';
import './App.css';
import { CartProvider } from 'react-use-cart';
import CollapsibleExample from './CollapsibleExample';
import Footer from './Footer';





function App() {

  return (
    <div className="App">
     
      <CartProvider>
      <CollapsibleExample/> 
    </CartProvider>
    <Footer/>
   
     
    
    </div>
  );
}

export default App;
 