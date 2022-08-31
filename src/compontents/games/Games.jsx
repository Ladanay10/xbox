import React from 'react';
import './Games.css';
import im1 from '../../assets/cyberpunk.png';
import im2 from '../../assets/medium.png';
import im3 from '../../assets/assasin.png';
import {motion} from 'framer-motion';
export const Games = () => {
	const transition ={type: 'spring', duration: 3};
	return (
		<>
			<section className="container">
				<div className="games">
					<div className="games-l">
						<h3>Optimized for <br/>series X-S</h3>
						<span>From future adventures, to current obsessions, to classic titles, thousands of favorites across four generations of Xbox look and play best on Xbox Series X.</span>
					</div>
					<div className="games-r">
						<img src={im1} alt="" />
						<motion.img whileInView={{top:'-5rem'}} initial={{top:'5rem'}} transition={transition} src={im2} alt="" />
						<motion.img  whileInView={{top:'20rem'}} 	 transition={transition}src={im3} alt="" />
					</div>
				</div>
			</section>
		</>
	)
}
