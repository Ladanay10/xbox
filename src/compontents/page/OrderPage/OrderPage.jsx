import React, { useRef, useState } from 'react';
import './OrderPage.css';
import emailjs from '@emailjs/browser';
import { Modal } from '../../modal/Modal';

export const OrderPage = () => {
	const [modalActive, setModalActive] = useState(false);
	const form = useRef();
	const sendEmail = (e) => {
		setTimeout(4000);
		emailjs.sendForm('service_6nwar6r', 'template_0ylw8l4' ,form.current, 'Q1T6jpxsISccMY9R6');
		e.preventDefault();
	}



	return (
		<>
			<section className="order">
				<div className="container">
					<h3>place an order</h3>
					<form  ref={form}  action="" className='order-content'>
						<input type="text" name='from_name' placeholder='Enter your name...' />
						<input type="email" name='email' placeholder='Enter your email...' />
						<input type="number" name='number' placeholder='Enter your number...' />
						<button onClick={() => setModalActive(true)}  onSubmit={sendEmail} type='submit' value='send' >Buy now</button>
					</form>
					<Modal active={modalActive} setActive={setModalActive}/>
				</div>
			</section>
		</>
	)
}
