import React from 'react'
import  "./gamemodal.css";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


function Gamemodal(props) {
  return (
    <div>
    <Modal open={props.show} onClose={props.onHide} center 
    style={{backgroundColor:'red'}}
     classNames={{
      overlay: 'customOverlay',
      modal:  'customModal',
    }}
    >
      <div className='modalContainer'> 
     
      </div>
      </Modal>
      </div>
    
  )
}

export default Gamemodal;