import React from 'react'

export default function Mode(props) {

    const handleToggle = () =>{
        if(props.mode.background === "#CADCFC"){
            props.handleMode("#1A120B","#3C2A21","white")
        }
        else{
            console.log("hello")
            
            props.handleMode("#8AB6F9","#CADCFC","black")
        }
    }


  return (
    <div className='modebtn'>
        <button onClick={handleToggle} type='button' style={{color : props.mode.background === "#CADCFC"?"#CADCFC":"#3C2A21" ,background : props.mode.background !== "#CADCFC"?"#CADCFC":"#3C2A21", height: "50px",
  width: "70px", border:0, borderRadius : "0 20% 20% 0"}}>{props.mode.background === "#CADCFC"?"Dark":"Light"}</button>
    </div>
  )
}
      
