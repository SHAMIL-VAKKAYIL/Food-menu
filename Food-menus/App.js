import React from "react";
import Footer from "./compo/footer";
import Header from "./compo/header";
import './App.css'
import Card from "./compo/Card";
import Carddata from "./compo/Carddat";
import Pic from "./compo/Pic";



function Myapp() {
  let fitem=("Food-items")
 let card= Carddata.map((carditem)=> {
   return(
    
    <Card cardcontent={{
      cardsrc:carditem.cardsrc,
      name:carditem.name,
     
    }} />
   )
  })

  return(
    <div >
       <Header/>
    <div className="main-pic">
         <Pic/>
    </div>
          <h2 style={{fontSize:"20px",fontWeight:"bold",marginLeft:"40px",padding:"10px",textDecoration:"underline" }}>{fitem}</h2><br/>
      <div className="card-align">
          {card}
      </div>
       <Footer/>
  
       </div>
  )
  
}
  
export default Myapp;