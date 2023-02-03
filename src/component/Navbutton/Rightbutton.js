import React from 'react';
import rightCSS from "./rightbutton.module.css";
function Rightbutton(props) {
 console.log(props);
  return (
    <div className={rightCSS.navbutton}>
        <div className={rightCSS.buttons} >
            <img  src="../assets/home/backbtn.png" alt="aerodynamic" className={rightCSS.btnImg}
             onClick={props.goback}/>
            <div className={rightCSS.btnLbl}>BACK</div>
        </div>
        <div className={rightCSS.buttons}>
            <img  src="../assets/home/settings.png" alt="aerodynamic" className={rightCSS.btnImg}
            onClick={props.modalopen}/>
            <div className={rightCSS.btnLbl} >SETTINGS</div> 
        </div>
        <div className={rightCSS.buttons}>
            <img  src="../assets/home/cashback_wheel.png" alt="aerodynamic" className={rightCSS.btnImg}
            onClick={props.modalopen}/>
            <div className={rightCSS.btnLbl} >CASHBACK</div>
        </div>
        <div className={rightCSS.buttons} >
            <img  src="../assets/home/logout.png" alt="aerodynamic" className={rightCSS.btnImg}
             onClick={props.logout}/>
            <div className={rightCSS.btnLbl}>LOGOUT</div>
        </div>
    </div>
  )
}

export default Rightbutton;