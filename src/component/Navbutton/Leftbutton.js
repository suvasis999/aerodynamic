import React from 'react';
import leftCSS from "./leftbutton.module.css";
function Leftbutton(props) {
  return (
    <div className={leftCSS.navbutton}>
        <div className={leftCSS.buttons}>
            <img  src="../assets/home/all.png" alt="aerodynamic" className={leftCSS.btnImg} 
            onClick={props.modalopen}  onClick={props.openGame}/>
            <div className={leftCSS.btnLbl}>ALL</div> 
        </div>
        <div className={leftCSS.buttons}>
            <img  src="../assets/home/fishing.png" alt="aerodynamic" className={leftCSS.btnImg} 
            onClick={props.modalopen}/>
            <div className={leftCSS.btnLbl}>FISHING</div>
        </div>
        <div className={leftCSS.buttons}>
            <img  src="../assets/home/jackpot.png" alt="aerodynamic" className={leftCSS.btnImg} 
            onClick={props.modalopen}/>
            <div className={leftCSS.btnLbl}>SLOT</div>
        </div>
        <div className={leftCSS.buttons}>
            <img  src="../assets/home/casino.png" alt="aerodynamic" className={leftCSS.btnImg} />
            <div className={leftCSS.btnLbl}>CASHINO</div>
        </div>
    </div>
  )
}

export default Leftbutton;