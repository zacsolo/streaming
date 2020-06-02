import React from 'react';
import ReactDOM from 'react-dom';

function Modal(props) {
  return ReactDOM.createPortal(
    <div className='ui dimmer modals visible active'>
      <div className='ui standard modal visible active'>THIS IS THE MODAL</div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
