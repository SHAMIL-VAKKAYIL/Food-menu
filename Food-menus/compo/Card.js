import React,{useState} from 'react'
import heart from "../Asset/heart-solid.svg"
function Card(props) {
  let fav=useState("Add")
  let activeclass=useState("")

    let[Addbtn,favbtn]=fav
    let[classstate,setclassstate]=activeclass
 
   
  //modify state  
   function Addfav(){
    console.log("done")
     favbtn((prevstate) => {
        if(prevstate === "Add"){

          return " Added"
        }else{
          return "Add"
        }
      });

      setclassstate((prevclass)=>{
        if (prevclass == ""){
          return "active"
        }else{
          return ""
        }
      })
    }

 
  return (
      
    <div className={`card ${classstate}`}> 
      <img src={heart} className="icon"/>

      <img src={props.cardcontent.cardsrc}></img>
      <p className={"item "}> {props.cardcontent.name}</p>
      <button className='btn'  onClick={Addfav}>{Addbtn} </button>
  
    </div>
  )
}

export default Card
