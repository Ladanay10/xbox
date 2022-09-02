import React from 'react';
import './Modal.css';
export const Modal = ({active, setActive}) => {
  return (
	<>
		<div className={active? "modal active" : 'modal'} onClick={() => setActive(false)}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<h4>Order sending...</h4>
			</div>
		</div>
	</>
  )
}
