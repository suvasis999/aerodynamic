import React from 'react'
import  "./gamemodal.css";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"
const bg = {
  customModal: {
    background: "#00000000"
  }
};
function Paymentmodal(props) {
    const [amount,setAmount]=('');
  return (
    <div>
    <Modal open={props.show} onClose={props.onHide} center 
      styles={bg} 
     classNames={{
      overlay: 'customOverlay',
      modal:  'customModal',
    }}
     >
      <div className='modalContainer' > 
     <div className='paymentModal'>
        <div className='paymentModalDiv'>
         <div className='paymentLable'>
            Enter Amount:
         </div>
         <input
          type="text" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)} 
          className='paymentInput'
         />
         <div>
          
          
         </div>
         <div style={{width:'100%',marginTop:'15px'}}>
         <Button variant="success" className='btnJoin'>
            <Link to="/Splash"  style={{color:'#ffffff',textDecoration:'none'}}>
           Submit
            </Link>
        </Button>

         </div>
        </div>
       
      </div>
   
      </div>
      </Modal>
      </div>
    
  )
}

export default Paymentmodal;