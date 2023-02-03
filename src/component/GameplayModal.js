import React from 'react'
import  "./gamemodal.css";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


function GameplayModal(props) {
  return (
    <div>
    <Modal open={props.show} onClose={props.onHide} center 
    
     classNames={{
      overlay: 'customOverlay',
      modal:  'customModalGAme',
    }}
    >
      <div className='modalContainer'> 
     
      </div>
      </Modal>
      </div>
    
  )
}

export default GameplayModal;