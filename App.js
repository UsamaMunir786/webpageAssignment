import React from "react";
import "./components/App.css"
// import Navbar from './components/navbar'
import Home from './components/Home'
import About from "./components/About";
import Shope from "./components/Shope";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";

function App(){
  return(
    <div>
      {/* <Navbar/> */}
      <Home/>
      <About/>
      <Shope/>
      <Menu/>
      <Clients/>
      <Prices/>
    </div>
  )
  
}

export default App;