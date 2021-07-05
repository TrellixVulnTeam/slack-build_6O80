
import React from "react";
import { Route } from "react-router-dom";
import './App.css';

import Header from "./components/header/header-component";
import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shop.component";
import SignPage from "./pages/signing/signing.component";





function App() {
  return (

    
    <div> 

      <Header/>
      
    <switch>

    <Route exact path="/" component = {HomePage}/>

    <Route  path="/shop" component= {ShopPage}/>

    <Route  path="/signin" component= {SignPage}/>

    </switch>
     
    </div>
  );
}

export default App;
