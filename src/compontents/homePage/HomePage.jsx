import React from 'react';
import './HomePage.css';
import cons from '../../assets/home-b.png';
import { Advantages } from './advantages/Advantages';
import { motion } from 'framer-motion';
export const HomePage = () => {
	const transition ={type: 'spring', duration: 3};
	return (
		<>
			<section className="home container">
				<div className="home-content">
					<h3 >completely new</h3>
					<h1>Xbox Series X</h1>
					<span >Experience 12 teraflops of graphics processing power and 4K resolution at up to 120 fps
						second with Xbox Series X. *</span>
						<motion.img whileInView={{top:'3rem'}} transition={transition} src={cons} alt="" />
				</div>
				
				<Advantages/>
			</section>
			
		</>
	)
}
